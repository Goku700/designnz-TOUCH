export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent/20 px-3 py-1 font-mono text-xs font-bold tracking-widest text-accent">
                DESIGNRZ
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Elevating brands through strategic design, cutting-edge technology, and data-driven marketing.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Branding & Identity</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Web Design & Dev</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Print & Packaging</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=designrztouch@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  designrztouch@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:7010776767" className="hover:text-white transition-colors">
                  +91 70107 76767
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <span>
                  Trichy, Tamil Nadu<br />
                  India
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/20 hover:text-white transition-colors text-gray-400">
                X
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/20 hover:text-white transition-colors text-gray-400">
                in
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-colors text-gray-400">
                Ig
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-gray-500">
            &copy; 2026 Designrz Touch. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

