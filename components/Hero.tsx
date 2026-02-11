"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "12+" },
  { label: "Brands Partnered", value: "100+" },
  { label: "Campaign Success", value: "90%+" }
];

const PARTICLE_COUNT = 18;

// Deterministic pseudo-random values based on index to avoid SSR/client mismatch
const particleSeeds = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const xSeed = Math.sin(i * 12.9898) * 43758.5453;
  const ySeed = Math.sin(i * 78.233) * 96234.5453;
  const durationSeed = Math.sin(i * 45.123) * 12345.6789;

  return {
    x: ((xSeed - Math.floor(xSeed)) * 1200) - 600,
    y: ((ySeed - Math.floor(ySeed)) * 800) - 400,
    duration: 12 + ((durationSeed - Math.floor(durationSeed)) * 10)
  };
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg-primary)] hero-gradient pt-0"
    >
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {particleSeeds.map((seed, i) => (
          <motion.div
            key={i}
            className="particle absolute h-1 w-1 rounded-full opacity-40"
            initial={{
              x: seed.x,
              y: seed.y,
              scale: 0
            }}
            animate={{
              y: ["0%", "10%", "-5%", "0%"],
              scale: [0, 1, 0.6, 1],
              opacity: [0, 0.6, 0.3, 0.6]
            }}
            transition={{
              duration: seed.duration,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Decorative Background Logo */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="opacity-20"
          animate={{ rotateY: 360 }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <img
            src="/logo.png"
            alt=""
            className="h-[800px] w-[800px] object-contain"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="space-y-4 pt-10">
            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
              }}
              className="font-mono text-sm uppercase tracking-[0.4em] text-[color:var(--text-secondary)]"
            >
              Branding • Digital Marketing • Web Design
            </motion.p>

            <h1 className="font-primary text-[56px] leading-tight tracking-tight text-[color:var(--text-primary)] sm:text-[72px] md:text-[90px] lg:text-[100px] overflow-hidden">
              <span className="block font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#4a90e2,#4caf50,#ff9800,#9c27b0,#e91e63)] pb-2">
                <motion.span
                  className="inline-block"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                >
                  Designrz
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backOut", delay: 0.1 }}
                >
                  TOUCH
                </motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-2 block text-3xl font-light text-[color:var(--text-secondary)] sm:text-4xl md:text-5xl"
              >
                Your Brand. Our Strategy. Real Results.
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-lg leading-relaxed text-[color:var(--text-secondary)]"
          >
            A full-service advertising, branding & digital marketing agency turning businesses
            into recognizable brands through strategy-led creative and performance-driven campaigns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center gap-6 pt-4 sm:flex-row"
          >
            <a
              href="#services"
              className="btn-gold text-sm font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-glow transition-all hover:-translate-y-1"
            >
              Start Your Journey
            </a>
            <button className="group flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors">
              <span className="h-px w-12 bg-gray-300 transition-all group-hover:bg-gold group-hover:w-16" />
              Scroll to Explore
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

