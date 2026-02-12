"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const EnergyBlastText = () => {
    const [phase, setPhase] = useState<"idle" | "gathering" | "blast" | "flow">("idle");
    const [blastParticles, setBlastParticles] = useState<any[]>([]);
    const [gatheringParticles, setGatheringParticles] = useState<any[]>([]);

    // Ref for visibility detection
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.3 }); // Trigger when 30% visible

    useEffect(() => {
        const colors = ["#4a90e2", "#4caf50", "#f4c430", "#9c27b0", "#e91e63"];

        // 1. Generate Paint Splat Particles
        const bParticles = Array.from({ length: 120 }, (_, i) => {
            const angle = Math.random() * Math.PI * 2;
            // Variable distance for erratic splat pattern
            const distance = 200 + Math.random() * 800;
            const startX = (Math.random() - 0.5) * 600;
            const startY = (Math.random() - 0.5) * 100;

            return {
                id: i,
                color: colors[i % colors.length],
                initialX: startX,
                initialY: startY,
                targetX: startX + Math.cos(angle) * distance,
                targetY: startY + Math.sin(angle) * distance,
                // Drip distance varies
                dripY: (50 + Math.random() * 150),
                scale: 0.8 + Math.random() * 1.5,
                rotation: Math.random() * 360,
                delay: Math.random() * 0.1
            };
        });
        setBlastParticles(bParticles);

        // 2. Generate Gathering Particles
        const gParticles = Array.from({ length: 60 }, (_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 600 + Math.random() * 400;

            return {
                id: i,
                color: colors[i % colors.length],
                initialX: Math.cos(angle) * distance,
                initialY: Math.sin(angle) * distance,
                targetX: (Math.random() - 0.5) * 400,
                targetY: (Math.random() - 0.5) * 100,
                scale: 1 + Math.random() * 1.5,
                delay: Math.random() * 0.5
            };
        });
        setGatheringParticles(gParticles);

    }, []);

    // Handle Animation Sequence based on View
    useEffect(() => {
        let blastTimer: NodeJS.Timeout;
        let flowTimer: NodeJS.Timeout;

        if (isInView) {
            // Start Sequence
            setPhase("gathering");

            blastTimer = setTimeout(() => {
                setPhase("blast");
            }, 1500);

            flowTimer = setTimeout(() => {
                setPhase("flow");
            }, 2300);
        } else {
            // Reset when out of view
            setPhase("idle");
        }

        return () => {
            clearTimeout(blastTimer);
            clearTimeout(flowTimer);
        };
    }, [isInView]);

    return (
        <div ref={containerRef} className="relative flex items-center justify-center overflow-visible" style={{ filter: "none" }}>
            {/* Particles Layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-visible">
                <AnimatePresence>
                    {/* Gathering Phase */}
                    {phase === "gathering" && gatheringParticles.map((p) => (
                        <motion.div
                            key={`g-${p.id}`}
                            className="absolute rounded-full"
                            style={{
                                backgroundColor: p.color,
                                width: 4 * p.scale,
                                height: 4 * p.scale,
                                boxShadow: `0 0 ${8 * p.scale}px ${p.color}`,
                            }}
                            initial={{ x: p.initialX, y: p.initialY, opacity: 0 }}
                            animate={{
                                x: p.targetX,
                                y: p.targetY,
                                opacity: [0, 1, 1], // Fade in then stay
                                scale: [p.scale, p.scale * 0.5] // Shrink as they compress
                            }}
                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.05 } }}
                            transition={{
                                duration: 1.5,
                                ease: "easeIn",
                                delay: p.delay
                            }}
                        />
                    ))}

                    {/* Paint Blast Phase */}
                    {(phase === "blast" || phase === "flow") && blastParticles.map((p) => (
                        <motion.div
                            key={`b-${p.id}`}
                            className="absolute rounded-full"
                            style={{
                                backgroundColor: p.color,
                                width: 10 * p.scale,
                                height: 10 * p.scale,
                                // Glow for wet paint look
                                boxShadow: `0 0 ${5 * p.scale}px ${p.color}`,
                                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" // Organic shape
                            }}
                            initial={{ x: p.initialX, y: p.initialY, opacity: 1, scale: 0 }}
                            animate={{
                                x: [p.initialX, p.targetX, p.targetX], // Fly out -> Stop
                                y: [p.initialY, p.targetY, p.targetY + p.dripY], // Fly out -> Stop -> Drip
                                opacity: [1, 1, 0], // Stay visible -> Fade out
                                scale: [0, p.scale, p.scale * 1.1], // Expand on hit
                                rotate: [0, p.rotation, p.rotation + 10]
                            }}
                            transition={{
                                duration: 4,
                                times: [0, 0.1, 1], // 10% for blast, 90% for dripping/fading
                                ease: ["circOut", "linear"] // Explode fast, drip linear
                            }}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Main Text Layer - z-10 */}
            <h1 className="relative z-10 font-primary text-[56px] leading-tight tracking-tight text-[color:var(--text-primary)] sm:text-[72px] md:text-[90px] lg:text-[100px] overflow-visible text-center">
                <motion.div
                    className="flex flex-col items-center"
                    animate={phase === "blast" ? {
                        x: [0, -5, 5, -5, 5, 0],
                        rotate: [0, -2, 2, -2, 2, 0]
                    } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <span
                        className={`block font-bold pb-2 ${phase === "flow"
                            ? "animate-liquid"
                            : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-pink-500"
                            }`}
                        style={{
                            backgroundSize: "200% auto",
                            backgroundPosition: phase === "gathering" ? "100% 50%" : "0% 50%",
                            transition: phase === "gathering" ? "background-position 1.5s ease-in" : "none"
                        }}
                    >
                        Designrz TOUCH
                    </span>

                    {/* Restored Subtitle */}
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-2 block text-3xl font-light text-[color:var(--text-secondary)] sm:text-4xl md:text-5xl"
                    >
                        Your Brand. Our Strategy. Real Results.
                    </motion.span>
                </motion.div>
            </h1>
        </div>
    );
};
