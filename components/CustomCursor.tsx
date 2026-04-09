"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pupilRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const onMouseMove = (e: MouseEvent) => {
            if (!cursorRef.current) return;

            const { clientX, clientY } = e;

            // Zero-Latency Translation
            // Using translate3d(x, y, 0) for GPU acceleration
            // Centering: -12px left (half of 24), -7px top (half of 14) to center the eye strictly on pointer
            cursorRef.current.style.transform = `translate3d(${clientX - 12}px, ${clientY - 7}px, 0)`;

            // Subtle Pupil Tracking (Parallax)
            // Moves slightly within the eye based on screen position
            if (pupilRef.current) {
                const x = (clientX / window.innerWidth - 0.5) * 4; // -2 to +2px
                const y = (clientY / window.innerHeight - 0.5) * 2; // -1 to +1px
                pupilRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        const onMouseDown = () => {
            if (cursorRef.current) {
                // Blink Animation: Squash height
                cursorRef.current.style.setProperty("--scale-y", "0.1");
            }
        };

        const onMouseUp = () => {
            if (cursorRef.current) {
                // Open Eye
                cursorRef.current.style.setProperty("--scale-y", "1");
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            if (!cursorRef.current) return;
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.tagName === "INPUT" ||
                target.closest("a") ||
                target.closest("button");

            if (isClickable) {
                cursorRef.current.style.setProperty("--scale-base", "1.2");
            } else {
                cursorRef.current.style.setProperty("--scale-base", "1");
            }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mousedown", onMouseDown, { passive: true });
        window.addEventListener("mouseup", onMouseUp, { passive: true });
        window.addEventListener("mouseover", onMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mouseover", onMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="hidden lg:block fixed pointer-events-none z-[99999] top-0 left-0 mix-blend-exclusion"
            style={{
                width: "24px",
                height: "14px",
                willChange: "transform",
                // CSS Variables for separate scaling of blinking (Y) and hovering (Base)
                "--scale-y": "1",
                "--scale-base": "1",
                // Combine scales in the child container or use nested approach
            } as React.CSSProperties}
        >
            {/* Container for animations (Blink/Hover) separate from movement */}
            <div
                className="w-full h-full relative"
                style={{
                    transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)", // Smooth blink/hover
                    transform: "scale(var(--scale-base)) scaleY(var(--scale-y))",
                    transformOrigin: "center",
                }}
            >
                {/* Sclera (White Part) - SVG for Almond Shape */}
                <svg
                    viewBox="0 0 24 14"
                    fill="none"
                    className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                >
                    <path
                        d="M1 7C5 1.5 19 1.5 23 7C19 12.5 5 12.5 1 7Z"
                        fill="white"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="0.5"
                    />
                </svg>

                {/* Pupil (Dark Part) - Centered absolute */}
                <div
                    ref={pupilRef}
                    className="absolute top-1/2 left-1/2 w-[6px] h-[6px] bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        marginTop: "-3px", // Exact centering
                        marginLeft: "-3px",
                        willChange: "transform"
                    }}
                >
                    {/* Pupil Glint (Optional) */}
                    <div className="absolute top-1 right-1 w-[2px] h-[2px] bg-white rounded-full opacity-50" />
                </div>
            </div>
        </div>
    );
};
