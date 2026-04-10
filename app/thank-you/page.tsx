"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-1 flex items-center justify-center relative overflow-hidden px-6 py-24">
                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-2xl"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                        className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent/20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-primary">
                        Message Received!
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        Thank you for reaching out to Designrz Touch. We've received your inquiry and our team will get back to you within 24 hours.
                    </p>

                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-5 text-sm font-bold uppercase tracking-widest text-black shadow-xl shadow-accent/20 transition-all hover:bg-accent-light"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Return to Home
                        </motion.button>
                    </Link>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
