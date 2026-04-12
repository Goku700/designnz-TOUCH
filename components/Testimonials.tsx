"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Arjun Kumar",
    role: "Founder, Spicy Bowl",
    quote:
      "Designrz Touch completely transformed our brand. From the logo to the menu and packaging design, everything feels premium. Our walk-ins increased by 40% in just two months.",
    rating: 5,
    initials: "AK"
  },
  {
    name: "Senthil Rajan",
    role: "Marketing Head, TechSolutions",
    quote:
      "Their performance ads and digital marketing strategy cut our customer acquisition costs in half while doubling our lead quality. Highly professional team.",
    rating: 5,
    initials: "SR"
  },
  {
    name: "Dr. Lakshmi Priya",
    role: "Director, CarePlus Clinic",
    quote:
      "A complete turnkey solution. The rebranding and the new responsive website gave us a fresh, trustworthy identity that our patients in Trichy love.",
    rating: 5,
    initials: "LP"
  },
  {
    name: "Karthik Sivakumar",
    role: "CEO, GreenEarth Realty",
    quote:
      "Their approach to property marketing is unmatched. The drone cinematography and social media reels they produced for our new project went viral.",
    rating: 5,
    initials: "KS"
  },
  {
    name: "Dr. Sameer Khan",
    role: "Founder, MediCare",
    quote:
      "They handled our business registration and GST compliance seamlessly. It's rare to find a creative agency that also understands the technicalities of business startup.",
    rating: 5,
    initials: "SK"
  },
  {
    name: "Deepika Rao",
    role: "Owner, Velvet Boutique",
    quote:
      "They don't just design; they build a brand story. The custom web design and social media strategy they created has become a favorite for our online customers.",
    rating: 5,
    initials: "DR"
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  // Triple the items to ensure smooth infinite loop on wide screens
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScroll = () => {
      // Auto-scroll on infinite loop
      // If user is interacting (paused), we don't increment
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset loop
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/client_bg.png")' }}
      />
      {/* Reduced opacity for better background visibility as requested */}
      <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-black mb-4">
              Client Stories
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-primary">
              Trusted by ambitious brands
            </h2>
            <p className="mt-4 text-lg text-black font-medium max-w-2xl mx-auto">
              Don't just take our word for it. Here’s what founders and marketing leaders say about working with Designrz Touch.
            </p>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto cursor-pointer [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex gap-8 w-max pl-4"
            style={{
              // No inline styles needed
            }}
          >
            {marqueeItems.map((t, idx) => (
              <div
                key={`${t.initials}-${idx}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-white/95 backdrop-blur-md p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-accent/20 w-[350px] md:w-[400px] shrink-0 hover:scale-[1.02]"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-serif text-accent">"</span>
                </div>

                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-black font-medium leading-relaxed italic relative z-10 text-sm md:text-base">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">{t.name}</h4>
                    <p className="text-xs text-gray-700 font-bold uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
