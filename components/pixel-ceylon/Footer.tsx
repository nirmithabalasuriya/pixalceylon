'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const siteMap = ['Home', 'Services', 'Case Studies', 'Pricing', 'Contact'];
const services = ['Web Development', 'SEO & Marketing', 'Web Design', 'Branding', 'AI Automation'];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#07080D' }} className="pt-16 pb-10 border-t border-[#1E2130]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="font-['Bebas_Neue'] text-[26px] tracking-widest text-white mb-3">
              PIXEL <span className="text-[#C8FF00]">CEYLON</span>
            </div>
            <p className="text-[14px] text-[#7E8190] leading-relaxed max-w-[220px]">
              Building digital excellence for businesses across Sri Lanka and beyond — pixel by pixel.
            </p>
          </div>

          {/* Site map */}
          <div>
            <h4 className="text-[12px] font-bold text-white uppercase tracking-[0.1em] mb-5">Site Map</h4>
            <ul className="flex flex-col gap-3 list-none">
              {siteMap.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-[#7E8190] hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-bold text-white uppercase tracking-[0.1em] mb-5">Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              {services.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-[#7E8190] hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-bold text-white uppercase tracking-[0.1em] mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <a
                  href="mailto:hello@pixelceylon.com"
                  className="text-[14px] text-[#7E8190] hover:text-white transition-colors duration-200"
                >
                  hello@pixelceylon.com
                </a>
              </li>
              <li>
                <span className="text-[14px] text-[#7E8190]">Sri Lanka</span>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[14px] text-[#C8FF00] font-semibold hover:underline"
                >
                  Book a Call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E2130] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#7E8190]">
            © 2025 Pixel Ceylon. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[#1E2130] flex items-center justify-center text-[#7E8190] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
