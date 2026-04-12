"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "917806886767";
const MESSAGE = "Hello Designrz Touch! I'd like to get in touch.";

export function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const handleClick = () => {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        className="pointer-events-auto"
                    >
                        <div className="relative group">
                            {/* Tooltip */}
                            <AnimatePresence>
                                {(showTooltip || false) && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                        className="absolute bottom-full right-0 mb-4 whitespace-nowrap bg-black/90 border border-white/20 text-white px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md"
                                    >
                                        <div className="text-xs font-bold tracking-widest uppercase font-primary">
                                            Get in Touch
                                        </div>
                                        {/* Arrow */}
                                        <div className="absolute top-full right-6 w-3 h-3 bg-black/90 border-r border-b border-white/20 transform rotate-45 -translate-y-1.5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Main Button */}
                            <motion.button
                                onClick={handleClick}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow duration-300 overflow-hidden group/btn"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />

                                {/* WhatsApp Icon SVG */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.199.3-.771.971-.945 1.171-.174.199-.348.225-.648.075-.3-.15-1.268-.468-2.415-1.493-.892-.795-1.493-1.777-1.668-2.078-.175-.3-.019-.462.13-.61.136-.134.3-.342.45-.514.15-.172.199-.294.298-.49.099-.196.05-.367-.025-.516-.075-.15-.669-1.612-.916-2.21-.242-.584-.487-.504-.669-.514-.173-.008-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.294.174-1.418-.076-.125-.272-.199-.57-.349zM12 21.056l-.001.001h-.001c-1.571 0-3.107-.423-4.453-1.228L4 21l1.192-4.349A8.966 8.966 0 0 1 4 12c0-4.962 4.038-9 9-9s9 4.038 9 9c0 4.963-4.038 9-9 9z" />
                                </svg>

                                {/* Pulse Ring */}
                                <motion.div
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-[#25D366]"
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
