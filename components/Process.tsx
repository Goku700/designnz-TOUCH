"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Years Industry Experience", value: "12+" },
  { label: "Years Branding Success", value: "8+" },
  { label: "Positive Campaign Results", value: "90%" }
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30, // Lower damping = faster/bouncier
    stiffness: 200, // Higher stiffness = faster
  });
  // Changed once: true to once: false to repeat every time
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Extract number: "12+" -> 12, "90%" -> 90
      const numericValue = parseInt(value.replace(/\D/g, ""));
      motionValue.set(numericValue);
    } else {
      // Reset to 0 when out of view so it can animate again
      motionValue.set(0);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Re-append non-numeric characters (suffix)
        const suffix = value.replace(/[0-9]/g, "");
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
}

export function Process() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background-alt py-20 sm:py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gold/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl mx-auto"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-primary leading-tight">
            More than design. It’s a <span className="text-accent">brand experience</span>.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Designrz Touch is a full-service Advertising, Branding & Digital Marketing Agency with
            <span className="font-semibold text-gray-900"> 12+ years of proven experience</span>.
            We blend creative design, market insights, and digital performance to transform businesses into recognizable brands that scale with confidence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white p-8 text-center shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
              <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                {stat.label}
              </dt>
              <dd className="text-5xl font-bold tracking-tight text-gray-900">
                <Counter value={stat.value} />
              </dd>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout: Legacy & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-primary">Our Legacy of Excellence</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over a decade of industry expertise, we have successfully transformed multiple businesses.
                Notably, we have <span className="font-semibold text-gray-900">8+ years of continuous success</span> in building and promoting a Trichy-based biriyani brand into one of the city’s top names.
              </p>
              <p>
                This journey reflects our deep understanding of local markets, consumer psychology, and high-impact brand positioning. We don’t just create campaigns — <span className="font-semibold text-accent">we build results.</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">✓</span>
                Research-backed planning
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">✓</span>
                Creative storytelling
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">✓</span>
                Performance tracking
              </div>
            </div>
          </motion.div>

          {/* Cards for Vision/Mission */}
          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 border-l-4 border-accent"
            >
              <span className="text-4xl mb-4 block">🚀</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To deliver innovative, result-based marketing solutions that transform businesses into strong, memorable brands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 border-l-4 border-gray-900"
            >
              <span className="text-4xl mb-4 block">👁️</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
              <p className="text-gray-600">
                To become the most trusted branding and marketing partner for businesses looking to grow sustainably and dominate their local markets.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Signature Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gray-900 p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-primary">
              "We don’t follow trends — we create brand value that lasts."
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
              Our ability to blend creative design, market insights, and digital performance marketing makes us a trusted growth partner.
            </p>
            <a href="#contact" className="btn-gold inline-block hover:scale-105 transition-transform">
              Let’s Build Your Brand
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

