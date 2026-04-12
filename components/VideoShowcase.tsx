"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const videos = [
    { id: 1, src: "/video/Diwali.mp4", title: "Diwali Special", aspectRatio: "aspect-[9/16] max-w-sm" },
    { id: 2, src: "/video/Drone.mp4", title: "Drone Cinematography", aspectRatio: "aspect-video max-w-5xl" },
    { id: 3, src: "/video/KMS Grill chicken 1.mp4", title: "KMS Grill Chicken", aspectRatio: "aspect-[9/16] max-w-sm" },
    { id: 4, src: "/video/Saathukudi Out.mp4", title: "Saathukudi Commercial", aspectRatio: "aspect-[9/16] max-w-sm" },
];

export function VideoShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

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
                            className="absolute inset-0 w-full h-full"
                        >
                            <video
                                src={videos[currentIndex].src}
                                className="w-full h-full object-cover bg-black"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                            {/* Title overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-xl font-bold text-white drop-shadow-md">{videos[currentIndex].title}</h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>

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
