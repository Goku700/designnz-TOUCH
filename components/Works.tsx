"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const galleryItems = [
    { id: 1, src: "/service/Bucket Design.jpeg", title: "Bucket Design" },
    { id: 2, src: "/service/instagram-flat-post-mocku.jpeg", title: "Instagram Post Design" },
    { id: 3, src: "/service/MockuuupsTwobusinesscardmockupsonadeskwithstationery.jpeg", title: "Business Card Context" },
    { id: 4, src: "/service/KMS_VC.jpg.jpeg", title: "KMS Visiting Card" },
    { id: 5, src: "/service/MockuuupsBusinesscardmockupinhandsagainstneutralbackground.jpeg", title: "Handheld Business Card" },
    { id: 6, src: "/service/A5_Doubleside_Flyer_01.jpg (1).jpeg", title: "A5 Double Sided Flyer" },
    { id: 7, src: "/service/Offer Banner Design.jpg.jpeg", title: "Offer Banner" },
    { id: 8, src: "/service/Premium Bucket Design.jpeg", title: "Premium Bucket Design" },
    { id: 9, src: "/service/Rollups-Stands.jpg.jpeg", title: "Rollups & Stands" },
    { id: 10, src: "/service/Street-Billboard-A5 ratio size.jpg.jpeg", title: "Street Billboard" },
    { id: 11, src: "/service/T_Shirt Design.jpg.jpeg", title: "T-Shirt Design" },
    { id: 12, src: "/service/Visiting Cards Mockup.jpeg", title: "Visiting Cards Mockup" },
    { id: 13, src: "/service/ClothBagDesig.jpeg", title: "Cloth Bag Design" },
    { id: 14, src: "/service/instagram-post-mockup.png", title: "Instagram Post Mockup" },
    { id: 15, src: "/service/instagram-post-on-smartphone-screen-mockup (1).png", title: "Smartphone App Mockup" },
    { id: 16, src: "/service/simple-stationery-mockup.png", title: "Simple Stationery Mockup" },
    { id: 17, src: "/service/Mockuuups Business card mockup in hands against neutral background.jpeg", title: "Business Card Mockup" },
    { id: 18, src: "/service/Mockuuups Two business card mockups on a desk with stationery.jpeg", title: "Stationery Mockup" },
];

export function Works() {
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
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + galleryItems.length) % galleryItems.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="works" className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-yellow-500 font-medium tracking-widest uppercase text-sm mb-4"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        Our works
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-[#111] rounded-3xl overflow-hidden shadow-2xl group">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={galleryItems[currentIndex].src}
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

                                if (swipe < -5000) { // Lowered threshold for better mobile responsiveness
                                    paginate(1);
                                } else if (swipe > 5000) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                            onClick={() => paginate(-1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                            onClick={() => paginate(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {galleryItems.map((_, index) => (
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
                </div>
            </div>
        </section>
    );
}
