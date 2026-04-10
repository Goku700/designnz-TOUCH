"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Category = "All" | "Business Automation" | "Industry Solutions" | "Management Systems" | "Digital Commerce";
const filters: Category[] = [
  "All",
  "Business Automation",
  "Industry Solutions",
  "Management Systems",
  "Digital Commerce"
];

const projects = [
  {
    id: 1,
    title: "Advanced Billing & GST",
    client: "Retail Connect",
    category: "Management Systems" as Category,
    image: "/projects/billing_gst.png",
    description: "Generate invoices in seconds. Manage inventory and get GST-ready reports instantly.",
    details: "Our advanced billing solution is designed to streamline your financial operations. It features automated invoice generation, real-time inventory tracking, and one-click GST report generation to ensure your business remains compliant and efficient."
  },
  {
    id: 2,
    title: "Smart Restaurant POS",
    client: "Flavor Flow",
    category: "Industry Solutions" as Category,
    image: "/projects/restaurant_pos.png",
    description: "From table management to kitchen orders (KOT), handle your food business like a pro.",
    details: "Elevate your dining experience with our intelligent POS system. It offers comprehensive table management, instant Kitchen Order Tickets (KOT), and integrated billing, allowing you to focus on delivering great food while we handle the logistics."
  },
  {
    id: 3,
    title: "Healthcare Systems",
    client: "MediCare Plus",
    category: "Industry Solutions" as Category,
    image: "/projects/healthcare.png",
    description: "Digitize patient records, manage appointments, and track pharmacy stock effortlessly.",
    details: "Simplify patient care with our integrated healthcare platform. From digital health records and appointment scheduling to pharmacy stock management, we provide the tools needed to run an efficient medical practice or hospital."
  },
  {
    id: 4,
    title: "Multi-Branch Office",
    client: "Global Sync",
    category: "Management Systems" as Category,
    image: "/projects/multi_branch.png",
    description: "Monitor multiple locations, sync data across branches, and view real-time reports.",
    details: "Manage your global footprint with ease. Our multi-branch synchronization software provides real-time visibility across all locations, centralizing data and reporting so you can make informed decisions from anywhere."
  },
  {
    id: 5,
    title: "Business Automation",
    client: "Ops Efficiency",
    category: "Business Automation" as Category,
    image: "/projects/automation.png",
    description: "We build custom bots and scripts to handle repetitive tasks so you can focus on growth.",
    details: "Transform your workflow with custom automation solutions. We develop specialized bots and scripts that handle repetitive back-office tasks, reducing human error and freeing up your team to focus on strategic growth."
  },
  {
    id: 6,
    title: "HR & Payroll Hub",
    client: "People First",
    category: "Management Systems" as Category,
    image: "/projects/hr_payroll.png",
    description: "Automate attendance, salary calculations, and employee document management.",
    details: "Take the complexity out of people management. Our HR & Payroll Hub automates attendance tracking, salary processing, and employee documentation, ensuring timely payments and total compliance with local labor laws."
  },
  {
    id: 7,
    title: "Edu-Tech Solutions",
    client: "NextGen Academy",
    category: "Industry Solutions" as Category,
    image: "/projects/edutech.png",
    description: "Comprehensive software for schools to manage admissions, fees, and student progress.",
    details: "Empower the next generation with our school management suite. We offer a unified platform for admissions, fee management, student progress tracking, and teacher-parent communication, tailored for modern educational institutions."
  },
  {
    id: 8,
    title: "E-commerce & Web",
    client: "Market Reach",
    category: "Digital Commerce" as Category,
    image: "/projects/ecommerce.png",
    description: "Get a professional online store with payment gateway integration to sell 24/7.",
    details: "Launch and scale your online presence with our premium e-commerce solutions. We build high-performance, conversion-optimized stores with secure payment gateway integrations and intuitive user experiences for 24/7 selling."
  },
  {
    id: 9,
    title: "Smart Logistics",
    client: "Swift Track",
    category: "Industry Solutions" as Category,
    image: "/projects/logistics.png",
    description: "Route optimization, vehicle tracking, and real-time delivery management tools.",
    details: "Optimize your supply chain with real-time tracking and route optimization. Our smart logistics tools help you monitor your fleet, reduce fuel costs, and guarantee on-time deliveries through advanced analytics and fleet management."
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
              Solutions Tailored for You
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
              Modernize your operations and stop wasting time on manual paperwork.
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
                      <div className="md:w-full space-y-6">
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
                            {projects.find(p => p.id === selectedId)?.details}
                          </p>
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

