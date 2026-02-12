"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Category = "All" | "Branding & Identity" | "Digital Marketing" | "Web Design & Development" | "Traditional & Print Marketing";
const filters: Category[] = [
  "All",
  "Branding & Identity",
  "Digital Marketing",
  "Web Design & Development",
  "Traditional & Print Marketing"
];

const projects = [
  {
    id: 1,
    title: "Apex Financial Identity",
    client: "Apex Group",
    category: "Branding & Identity" as Category,
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete visual identity overhaul for a leading fintech firm."
  },
  {
    id: 2,
    title: "EcoStyle E-Commerce",
    client: "EcoStyle",
    category: "Web Design & Development" as Category,
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    description: "High-conversion Shopify store with custom headless architecture."
  },
  {
    id: 3,
    title: "Urban Coffee Social Growth",
    client: "Urban Coffee",
    category: "Digital Marketing" as Category,
    image: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "300% ROI on Meta ads and organic Instagram growth campaign."
  },
  {
    id: 4,
    title: "Luxe Realty Brochure",
    client: "Luxe Estates",
    category: "Traditional & Print Marketing" as Category,
    image: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium tactile brochures for luxury property showcases."
  },
  {
    id: 5,
    title: "TechFlow SaaS Platform",
    client: "TechFlow",
    category: "Web Design & Development" as Category,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "SaaS dashboard design focused on user retention and ease of use."
  },
  {
    id: 6,
    title: "Vitality Health Rebrand",
    client: "Vitality Corp",
    category: "Branding & Identity" as Category,
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Modern, approachable brand system for a healthcare provider."
  },
  {
    id: 7,
    title: "Global Logistics SEO",
    client: "Swift Cargo",
    category: "Digital Marketing" as Category,
    image: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Technical SEO strategy resulting in #1 rankings for key industry terms."
  },
  {
    id: 8,
    title: "Artisan Bakery Packaging",
    client: "Crust & Crumb",
    category: "Traditional & Print Marketing" as Category,
    image: "https://images.pexels.com/photos/172282/pexels-photo-172282.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sustainable, eye-catching packaging design for retail expansion."
  },
  {
    id: 9,
    title: "Elevate Digital Experience",
    client: "Elevate",
    category: "Web Design & Development" as Category,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Immersive web experience for a high-end lifestyle brand."
  }
];

export function Portfolio() {
  // Debug: Ensure projects are updating
  console.log("Portfolio projects count:", projects.length);
  const [active, setActive] = useState<Category>("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  // Lock body scroll and handle ESC key when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedId(null);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  return (
    <section id="portfolio" className="bg-background py-20 sm:py-24 md:py-28 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center space-y-6"
        >
          <div>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Our Work
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-primary">
              Selected Projects
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
              A showcase of our best work across branding, digital strategy, development, and print.
            </p>
          </div>

          <div className="flex w-full overflow-x-auto gap-3 pb-4 sm:pb-0 sm:flex-wrap sm:justify-center sm:gap-2 sm:w-auto snap-x snap-mandatory scroll-pl-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {filters.map((filter) => {
              const selected = active === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`snap-start rounded-full px-5 py-2.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center justify-center text-center ${selected
                    ? "bg-gray-900 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200"
                    }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layoutId={`card-${project.id}`}
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden sm:h-72 pointer-events-none">
                  <motion.div
                    className="h-full w-full bg-cover bg-center transition duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />
              <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4 pointer-events-none">
                <motion.div
                  layoutId={`card-${selectedId}`}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full max-w-4xl bg-white rounded-t-[2rem] sm:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] pointer-events-auto"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="h-64 sm:h-80 w-full relative shrink-0">
                    <motion.div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${projects.find(p => p.id === selectedId)?.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-2xl">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-block rounded-full bg-accent/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-3"
                      >
                        {projects.find(p => p.id === selectedId)?.category}
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold leading-tight"
                      >
                        {projects.find(p => p.id === selectedId)?.title}
                      </motion.h2>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto bg-white p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3 space-y-6">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-lg text-gray-700 leading-relaxed font-medium"
                        >
                          {projects.find(p => p.id === selectedId)?.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-4 text-gray-600 leading-relaxed"
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                        </motion.div>
                      </div>

                      <div className="md:w-1/3 space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Project Info</h4>
                          <div className="space-y-4">
                            <div>
                              <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Client</span>
                              <span className="text-sm font-semibold text-gray-900 block">
                                {projects.find(p => p.id === selectedId)?.client}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Year</span>
                              <span className="text-sm font-semibold text-gray-900 block">2026</span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Role</span>
                              <span className="text-sm font-semibold text-gray-900 block">Design & Dev</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

