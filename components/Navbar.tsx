"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#works", label: "Works" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-200"
    >
      <div className="container flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Designrz Touch Logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
          <h1 className="text-2xl sm:text-3xl font-primary font-bold bg-gradient-to-r from-gray-900 to-yellow-500 bg-clip-text text-transparent tracking-tight">
            Designrz TOUCH
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-900">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link as any).target ? { target: (link as any).target, rel: "noopener noreferrer" } : {}}
              className="text-base font-medium text-gray-700 hover:text-yellow-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="btn-gold text-sm">
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-900 focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block origin-center transition-transform"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-current block transition-opacity"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block origin-center transition-transform"
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full bg-white flex flex-col items-center justify-center md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    {...(link as any).target ? { target: (link as any).target, rel: "noopener noreferrer" } : {}}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    className="text-2xl font-primary font-bold text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-gray-900 hover:to-yellow-500 transition-all transform hover:scale-110"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="btn-gold text-xl px-8 py-3 mt-6 shadow-xl"
                >
                  Get Quote
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

