'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#stats' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-[#07080D]/90 backdrop-blur-xl border-b border-[#1E2130]'
    : 'bg-transparent'
}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="font-['Bebas_Neue'] text-2xl tracking-widest text-white shrink-0">
            <span className="text-[#b5e409]">PIXEL</span> <span className="text-[#b5e409]">CEYLON</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => handleLink(l.href)}
                  className="text-sm font-medium text-[#7E8190] hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:block bg-[#b5e409] text-black text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#A8D900] transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-[#7E8190] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#0F1117] border-b border-[#1E2130] px-6 py-6 md:hidden"
          >
            <ul className="flex flex-col gap-4 list-none">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className="text-base font-medium text-[#E8E9EF] hover:text-[#b5e409] transition-colors w-full text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-[#b5e409] text-black text-sm font-bold px-5 py-3 rounded-lg text-center mt-2"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
