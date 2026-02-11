"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const services: {
  title: string;
  icon: ReactNode;
  points: string[];
}[] = [
    {
      title: "Branding & Identity",
      icon: <span className="text-2xl">✨</span>,
      points: [
        "Strategic Brand Positioning",
        "Visual Identity Design",
        "Rebranding",
        "Brand Guidelines"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <span className="text-2xl">📈</span>,
      points: [
        "Social Media Marketing & Management",
        "Performance Ads (Meta & Google)",
        "Content Strategy Campaigns",
        "SEO & Analytics"
      ]
    },
    {
      title: "Web Design & Development",
      icon: <span className="text-2xl">🕸️</span>,
      points: [
        "Custom Web Design & Development",
        "UI/UX Design",
        "Responsive Layouts",
        "Performance Optimization"
      ]
    },
    {
      title: "Traditional & Print Marketing",
      icon: <span className="text-2xl">🖨️</span>,
      points: [
        "Outdoor & Offline Promotions",
        "Printing Solutions (Posters, Banners)",
        "Packaging Design",
        "Local Market Campaign Planning"
      ]
    }
  ];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/service_bg.png")' }}
      />
      <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Rotating HUD / Tech Ring */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-30"
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            {/* Outer Ring */}
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="opacity-50" />
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.1" className="opacity-20" />

            {/* Middle Tech Ring */}
            <path d="M50 10 A40 40 0 0 1 90 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-80" />
            <path d="M50 90 A40 40 0 0 1 10 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-80" />
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" className="opacity-40" />

            {/* Inner Ring with Ticks */}
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" className="opacity-60" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="25"
                x2="50"
                y2="28"
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(${i * 30} 50 50)`}
                className="opacity-80"
              />
            ))}

            {/* Core Circle */}
            <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-70" />
            <circle cx="50" cy="50" r="5" fill="currentColor" className="opacity-20" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-white mb-4 border border-white/20 backdrop-blur-sm">
              Our Expertise
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl font-primary">
              What we ship with you
            </h2>
          </div>
          <p className="max-w-xl text-lg text-white font-medium leading-relaxed text-left sm:text-left drop-shadow-md">
            Modular services designed to plug into your roadmap. Choose a single track
            or spin up a full-stack squad.
          </p>
        </motion.div>

        <div className="flex -mx-6 px-6 overflow-x-auto pb-8 snap-x md:grid md:gap-8 md:grid-cols-2 md:lg:grid-cols-4 md:overflow-visible md:pb-0 md:px-0 md:mx-0 hide-scrollbar">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{
                y: -8,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.4 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[85vw] snap-center group relative flex flex-col justify-between rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl hover:ring-accent/20 md:min-w-0"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-400 transition-colors duration-300 group-hover:text-accent">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent font-primary">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 leading-snug">
                      <span className="mr-2 mt-1.5 block h-1 w-1 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-gray-100">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-900 transition-colors duration-300 group-hover:text-accent"
                >
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

