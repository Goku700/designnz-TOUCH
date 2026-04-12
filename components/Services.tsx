"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

const services: {
  id: number;
  title: string;
  icon: ReactNode;
  points: string[];
  details: string;
}[] = [
    {
      id: 1,
      title: "Branding & Identity",
      icon: <span className="text-2xl">✨</span>,
      points: [
        "Strategic Brand Positioning",
        "Visual Identity Design",
        "Rebranding",
        "Brand Guidelines"
      ],
      details: "We build brands that stand out and tell a story. From deep market research and strategic positioning to visual identity and comprehensive brand guidelines, we ensure your brand resonates with your target audience and maintains a consistent, premium presence across all touchpoints."
    },
    {
      id: 2,
      title: "Digital Marketing",
      icon: <span className="text-2xl">📈</span>,
      points: [
        "Social Media Marketing & Management",
        "Performance Ads (Meta & Google)",
        "Content Strategy Campaigns",
        "SEO & Analytics"
      ],
      details: "Our data-driven digital marketing strategies are built for conversion. We manage your entire digital presence, from multi-platform social media campaigns and high-ROI performance advertising to technical SEO and content strategies that drive organic growth and customer loyalty."
    },
    {
      id: 3,
      title: "Web Design & Development",
      icon: <span className="text-2xl">🕸️</span>,
      points: [
        "Custom Web Design & Development",
        "UI/UX Design",
        "Responsive Layouts",
        "Performance Optimization"
      ],
      details: "We create high-performance, future-ready websites that deliver exceptional user experiences. Our approach combines cutting-edge technology with intuitive UI/UX design to build responsive, fast-loading, and conversion-optimized web platforms tailored to your business goals."
    },
    {
      id: 4,
      title: "Traditional & Print Marketing",
      icon: <span className="text-2xl">🖨️</span>,
      points: [
        "Outdoor & Offline Promotions",
        "Printing Solutions (Posters, Banners)",
        "Packaging Design",
        "Local Market Campaign Planning"
      ],
      details: "Bring your brand into the physical world with impact. We offer comprehensive offline marketing solutions, including strategic outdoor promotions, high-quality printing services, eco-friendly packaging design, and localized campaign planning to capture your target market's attention."
    },
    {
      id: 5,
      title: "Business Registrations",
      icon: <span className="text-2xl">📋</span>,
      points: [
        "GST Registration",
        "MSME & FSSAI Registration & Renewal",
        "PAN, TAN & Professional Tax"
      ],
      details: "Seamlessly navigate the complexities of business setup. We handle end-to-end registrations including GST, MSME, FSSAI, and tax-related IDs like PAN and TAN, ensuring your business is legally compliant from day one."
    },
    {
      id: 6,
      title: "Compliance & Filings",
      icon: <span className="text-2xl">📑</span>,
      points: [
        "GST Return Filing (Monthly/Quarterly/Annual)",
        "Income Tax Return (ITR) Filing",
        "TDS & TCS Compliance"
      ],
      details: "Stay ahead of regulatory requirements with our expert compliance services. We manage all your statutory filings, including regular GST returns, annual Income Tax returns, and rigorous TDS/TCS compliance to prevent penalties and ensure smooth operations."
    },
    {
      id: 7,
      title: "Employee & Digital Services",
      icon: <span className="text-2xl">👤</span>,
      points: [
        "ESI Registration & PF Claims",
        "DSC Registration (eMudhra)"
      ],
      details: "Optimize your workforce management and digital security. Our services cover everything from ESI and PF registrations and claims to providing secure Digital Signature Certificates (DSC) through eMudhra, empowering your business in the digital era."
    }
  ];

export function Services() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 overflow-visible pb-0 px-0 mx-0">
          {services.map((service, index) => (
            <motion.article
              layoutId={`service-${service.id}`}
              key={service.title}
              onClick={() => setSelectedId(service.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{
                y: -8,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.4 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-h-[320px] group relative flex flex-col justify-between rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl hover:ring-accent/20 cursor-pointer"
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

            </motion.article>
          ))}
        </div>

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
              <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  layoutId={`service-${selectedId}`}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] pointer-events-auto"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="p-8 sm:p-12 overflow-y-auto">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-8">
                      {services.find(s => s.id === selectedId)?.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-primary">
                      {services.find(s => s.id === selectedId)?.title}
                    </h2>

                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {services.find(s => s.id === selectedId)?.details}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Core Capabilities</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {services.find(s => s.id === selectedId)?.points.map((point, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-700">
                              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-accent" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <a
                        href="#contact"
                        onClick={() => setSelectedId(null)}
                        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:scale-105 active:scale-95"
                      >
                        Book a Consultation
                      </a>
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

