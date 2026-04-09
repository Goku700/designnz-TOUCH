"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const galleryItems = [
    { id: 1, type: "image", src: "/service/Bucket Design.jpeg", title: "Bucket Design" },
    { id: 4, type: "image", src: "/service/KMS_VC.jpg.jpeg", title: "KMS Visiting Card" },
    { id: 5, type: "image", src: "/service/Mockuuups Business card mockup in hands against neutral background.jpeg", title: "Business Card Mockup" },
    { id: 6, type: "image", src: "/service/Mockuuups Two business card mockups on a desk with stationery.jpeg", title: "Stationery Mockup" },
    { id: 7, type: "image", src: "/service/Offer Banner Design.jpg.jpeg", title: "Offer Banner" },
    { id: 8, type: "image", src: "/service/Premium Bucket Design.jpeg", title: "Premium Bucket Design" },
    { id: 9, type: "image", src: "/service/Rollups-Stands.jpg.jpeg", title: "Rollups & Stands" },
    { id: 10, type: "image", src: "/service/Street-Billboard-A5 ratio size.jpg.jpeg", title: "Street Billboard" },
    { id: 11, type: "image", src: "/service/T_Shirt Design.jpg.jpeg", title: "T-Shirt Design" },
    { id: 12, type: "image", src: "/service/Visiting Cards Mockup.jpeg", title: "Visiting Cards Mockup" },
    { id: 14, type: "image", src: "/service/instagram-post-mockup.png", title: "Instagram Post Mockup" },
    { id: 15, type: "image", src: "/service/instagram-post-on-smartphone-screen-mockup.png", title: "Smartphone Mockup" },
    { id: 16, type: "image", src: "/service/simple-stationery-mockup.png", title: "Simple Stationery Mockup" },
];

export default function GalleryPage() {
    const [mounted, setMounted] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedId]);

    if (!mounted) return null;

    const selectedItem = galleryItems.find(item => item.id === selectedId);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 bg-[#f5f5f7] py-12 sm:py-20 px-4 sm:px-8 mt-20">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-auto"
                        >
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent mb-4 tracking-tight">
                                Our Gallery
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg max-w-xl">
                                Explore our collection of premium designs and mockups crafted for excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full md:w-auto"
                        >
                            <Link
                                href="/"
                                className="inline-flex w-full md:w-auto justify-center px-8 py-3 bg-white text-gray-900 rounded-full font-semibold border border-gray-200 hover:bg-gray-50 transition-all shadow-sm items-center gap-2 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 group-hover:-translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                layoutId={`card-${item.id}`}
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="agerocard group overflow-hidden bg-white rounded-2xl sm:rounded-3xl cursor-pointer p-3 sm:p-4"
                            >
                                <div className="relative aspect-square overflow-hidden mb-4 rounded-xl sm:rounded-2xl pointer-events-none">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-sm sm:text-base font-medium px-4 py-2 border border-white/40 rounded-full backdrop-blur-md">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                                <div className="px-1 sm:px-2">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-1">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 pb-1">Premium Design</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedId && selectedItem && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedId(null)}
                                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md cursor-zoom-out"
                                />
                                <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 md:p-8 pointer-events-none">
                                    <motion.div
                                        layoutId={`card-${selectedId}`}
                                        className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[95vh] sm:max-h-[90vh] pointer-events-auto"
                                    >
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm shadow-xl"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <div className="relative w-full overflow-hidden bg-gray-50 flex-1 min-h-0 flex items-center justify-center">
                                            <img
                                                src={selectedItem.src}
                                                alt={selectedItem.title}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>

                                        <div className="p-5 sm:p-8 bg-white border-t border-gray-100 flex-shrink-0">
                                            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{selectedItem.title}</h2>
                                            <p className="text-sm sm:text-base text-gray-500">Premium High-Quality Design Mockup</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </div>
    );
}
