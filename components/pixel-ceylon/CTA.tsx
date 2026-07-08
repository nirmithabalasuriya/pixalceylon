'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#0F1117', borderTop: '1px solid #1E2130', borderBottom: '1px solid #1E2130' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12"
        >
          <div>
            <span className="inline-block bg-[#b5e409]/10 text-[#b5e409] border border-[#b5e409]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-6">
              Start Today
            </span>
            <h2
              className="font-['Bebas_Neue'] leading-[0.93] text-white"
              style={{ fontSize: 'clamp(42px, 6vw, 78px)' }}
            >
              READY TO GROW
              <br />
              <span style={{ WebkitTextStroke: '1.5px #7E8190', color: 'transparent' }}>
                YOUR BRAND?
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 min-w-[220px]">
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="bg-[#b5e409] text-black font-bold text-[15px] px-8 py-4 rounded-xl text-center hover:bg-[#A8D900] transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a Free Call
            </Link>
            <Link
              href="/#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="border border-[#1E2130] text-white font-semibold text-[15px] px-8 py-4 rounded-xl text-center hover:border-[#7E8190] transition-all duration-200"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
