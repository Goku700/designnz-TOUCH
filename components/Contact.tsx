"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
      {/* Background Image with Waving Animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url("/contact-bg.png")' }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-4 border border-accent/20 backdrop-blur-md">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl font-primary">
            Ready to scale your brand?
          </h2>
          <p className="mt-4 text-lg text-gray-400 group-hover:text-gray-200 transition-colors">
            Share your details below. We usually respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          action="https://formsubmit.co/designrztouch@gmail.com"
          method="POST"
          className="relative rounded-3xl bg-white/5 backdrop-blur-xl p-8 sm:p-12 shadow-2xl ring-1 ring-white/10"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Inquiry from Designrz Touch Website" />
          <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Cooper"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-300">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email Address</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="active@brand.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-gray-300">Service Interest</label>
              <select
                name="service"
                id="service"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent [&>option]:text-black"
              >
                <option value="Branding">Branding & Identity</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Design">Web Design & Development</option>
                <option value="Print">Traditional & Print Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-300">Project Details</label>
              <textarea
                required
                name="message"
                id="message"
                rows={4}
                placeholder="Tell us about your timeline, goals, and budget..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-accent focus:bg-white/10 focus:ring-1 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-accent py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02] hover:bg-accent-light focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
            >
              Send Message
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            We respect your privacy. No spam, ever.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

