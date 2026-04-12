"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const videos = [
    { id: 2, src: "/video/Drone.mp4", title: "Drone Cinematography", aspectRatio: "aspect-video max-w-5xl" },
    { id: 1, src: "/video/Diwali.mp4", title: "Diwali Special", aspectRatio: "aspect-[9/16] max-w-sm" },
    { id: 3, src: "/video/KMS Grill chicken 1.mp4", title: "KMS Grill Chicken", aspectRatio: "aspect-[9/16] max-w-sm" },
    { id: 4, src: "/video/Saathukudi Out.mp4", title: "Saathukudi Commercial", aspectRatio: "aspect-[9/16] max-w-sm" },
];

export function VideoShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + videos.length) % videos.length);
    };

    // Auto-sliding disabled as per user request

    return (
        <section id="videos" className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-4"
                    >
                        Motion Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Video Showcase
                    </motion.h2>
                </div>

                <motion.div
                    layout
                    className={`relative mx-auto bg-[#111] rounded-3xl overflow-hidden shadow-2xl group border border-white/5 transition-all duration-500 ease-in-out ${videos[currentIndex].aspectRatio}`}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -5000) {
                                    paginate(1);
                                } else if (swipe > 5000) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                        >
                            <video
                                src={videos[currentIndex].src}
                                className="w-full h-full object-cover bg-black pointer-events-none"
                                autoPlay
                                muted={isMuted}
                                loop
                                playsInline
                            />
                            {/* Title overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-xl font-bold text-white drop-shadow-md">{videos[currentIndex].title}</h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Mute/Unmute Toggle */}
                    <button
                        onClick={toggleMute}
                        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all border border-white/10 group/mute"
                        title={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6h2.25l5.03-5.03c.63-.63 1.72-.18 1.72.71v16.12c0 .89-1.09 1.34-1.72.71l-5.03-5.03H6.75c-.414 0-.75-.336-.75-.75V10.5c0-.414.336-.75.75-.75z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        )}
                    </button>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors shadow-lg"
                            onClick={() => paginate(-1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors shadow-lg"
                            onClick={() => paginate(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 bg-yellow-500" : "w-2 bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
