"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  }
];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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

          <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:flex-wrap sm:justify-center sm:gap-2 sm:w-auto">
            {filters.map((filter) => {
              const selected = active === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-3 py-2.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-semibold transition-all duration-300 w-full sm:w-auto flex items-center justify-center text-center h-full sm:h-auto ${selected
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

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200"
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Category Tag Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

