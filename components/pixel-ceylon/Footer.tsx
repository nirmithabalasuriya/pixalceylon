'use client';

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#stats' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
];

export default function Footer() {
  return (
    <>
      {/* Rotating Circle Badge */}
      <div className="relative h-32 flex items-center justify-center overflow-visible">
        <div className="absolute bottom-0 translate-y-1/2 z-10">
          {/* Rotating ring */}
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* Outer rotating text ring */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
              style={{ transformOrigin: 'center center' }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
              </defs>
              <text
                fill="none"
                stroke="rgba(200, 255, 0, 0.3)"
                strokeWidth="0.5"
                fontSize="9"
                fontFamily="system-ui, sans-serif"
                fontWeight="500"
                letterSpacing="0.25em"
              >
                <textPath href="#circlePath" startOffset="0%">
                  PIXEL CEYLON • DIGITAL AGENCY • PIXEL CEYLON • DIGITAL AGENCY •{' '}
                </textPath>
              </text>
            </svg>

            {/* Glassmorphism center badge */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(200, 255, 0, 0.05) 0%, transparent 70%)',
              }}
            >
              <div
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-[#b5e409]/20 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 17, 23, 0.9) 0%, rgba(7, 8, 13, 0.95) 100%)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 0 40px rgba(200, 255, 0, 0.08), inset 0 0 30px rgba(200, 255, 0, 0.03)',
                }}
              >
                <span className="font-['Bebas_Neue'] text-2xl md:text-3xl tracking-[0.15em] text-[#b5e409]">
                  PC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{ background: 'linear-gradient(180deg, #07080D 0%, #0A0B12 100%)' }}
        className="pt-24 pb-10 border-t border-[#1E2130]"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Main footer content */}
          <div className="flex flex-col items-center text-center mb-14">
            {/* Logo */}
            <div className="font-['Bebas_Neue'] text-[28px] tracking-[0.2em] text-white mb-4">
              <span className="text-[#60A5FA]">PIXEL</span> <span className="text-[#b5e409]">CEYLON</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-[#7E8190] tracking-wide max-w-[320px] mb-8">
              Crafting digital experiences that drive growth.
            </p>

            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#A0A1B0] hover:text-white transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-3 mb-10">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#2A2D3A] flex items-center justify-center text-[#7E8190] hover:border-[#b5e409]/40 hover:text-[#b5e409] transition-all duration-300 hover:bg-[#b5e409]/5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-[#7E8190]">
              <a
                href="mailto:hello@pixelceylon.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#b5e409]" />
                hello@pixelceylon.com
              </a>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#3A3D4A]" />
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#b5e409]" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1E2130] pt-8 flex flex-col items-center gap-2">
            <p className="text-xs text-[#5A5D6A] tracking-wide">
              © {new Date().getFullYear()} Pixel Ceylon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
