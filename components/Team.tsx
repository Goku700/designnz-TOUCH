"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const teamCategories = [
  {
    id: "branding",
    title: "Branding & Identity",
    description: "The visionaries who craft your story and visual soul.",
    members: [
      { name: "John Doe", role: "Creative Director" },
      { name: "Lena Hofmann", role: "Brand Strategist" },
      { name: "Alex M.", role: "Senior Graphic Designer" }
    ]
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Data-driven growth hackers scaling your reach.",
    members: [
      { name: "Sara Kim", role: "Head of Growth" },
      { name: "Ravi Patel", role: "Performance Marketer" },
      { name: "Emily Chen", role: "Social Media Manager" }
    ]
  },
  {
    id: "web",
    title: "Web Design & Dev",
    description: "Engineers of immersive, high-conversion experiences.",
    members: [
      { name: "Carlos Diaz", role: "Engineering Lead" },
      { name: "Amelia Park", role: "UI/UX Designer" },
      { name: "David L.", role: "Frontend Developer" }
    ]
  },
  {
    id: "print",
    title: "Traditional & Print",
    description: "Masters of tangible brand presence and campaigns.",
    members: [
      { name: "Marcus T.", role: "Print Production Lead" },
      { name: "Sarah J.", role: "Offline Campaign Manager" },
      { name: "Priya R.", role: "Packaging Specialist" }
    ]
  }
];

export function Team() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamCategories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = teamCategories[index];

  return (
    <section id="team" className="bg-background-alt py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Experts
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-primary">
            Meet the minds behind the magic
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Multidisciplinary squads dedicated to every aspect of your brand's growth.
          </p>
        </motion.div>

        {/* Carousel Area */}
        <div
          className="relative mx-auto max-w-4xl min-h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-gray-100 flex flex-col items-center text-center">

                {/* Category Icon/Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 font-primary mb-2">
                    {active.title}
                  </h3>
                  <p className="text-gray-500 font-medium">
                    {active.description}
                  </p>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-6">
                  {active.members.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex flex-col items-center p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mb-3 flex items-center justify-center text-xl font-bold text-gray-500">
                        {member.name.charAt(0)}
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                      <p className="text-xs text-accent font-semibold tracking-wide uppercase mt-1">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {teamCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-accent" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to ${cat.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

