'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { icon: '🏟️', name: 'Client A', platform: 'Instagram · Business', count: '64K+', label: 'Followers grown' },
  { icon: '🎵', name: 'Client B', platform: 'Facebook · Entertainment', count: '26K+', label: 'Followers grown' },
  { icon: '🌿', name: 'Client C', platform: 'Instagram · Lifestyle', count: '3.8K+', label: 'Followers grown' },
  { icon: '🏡', name: 'Client D', platform: 'Facebook · Real Estate', count: '14K+', label: 'Followers grown' },
];

export default function SocialProof() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section style={{ background: '#FAFAFA' }} className="py-24 relative overflow-hidden">
      {/* Organic flowing curved lines - unique pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ opacity: 0.07 }}>
        <defs>
          <pattern id="socialproof-waves" patternUnits="userSpaceOnUse" width="300" height="150">
            <path d="M0 75 Q75 40 150 75 T300 75" fill="none" stroke="#b5e409" strokeWidth="1" />
            <path d="M0 110 Q60 85 120 110 T240 110 T300 110" fill="none" stroke="#b5e409" strokeWidth="0.7" opacity="0.7" />
            <path d="M0 40 Q50 20 100 40 T200 40 T300 40" fill="none" stroke="#b5e409" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#socialproof-waves)" />
      </svg>

      {/* Large gradient orbs */}
      <div className="absolute top-[15%] left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(181,228,9,0.12) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0.6 }} />
      <div className="absolute bottom-[5%] right-0 w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 70%, rgba(100,140,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.5 }} />

      {/* Scattered accent dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(181,228,9,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5,
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#b5e409]/10 text-[#0A0A0A] border border-[#b5e409]/30 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            Digital Marketing
          </span>
          <h2
            className="font-['Bebas_Neue'] leading-none text-[#0A0A0A] mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
          >
            We Grow <span className="text-[#b5e409]">Audiences</span>
          </h2>
          <p className="text-base text-[#6B7280] max-w-[480px] mx-auto">
            Our social media management builds communities that convert. Here's what we've achieved for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white border border-[#E5E5E5] rounded-2xl p-7 text-center hover:border-[#b5e409]/40 transition-colors duration-300 shadow-sm shadow-black/5"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5F5F5] border-2 border-[#E5E5E5] flex items-center justify-center text-2xl mx-auto mb-4">
                {c.icon}
              </div>
              <div className="text-[15px] font-bold text-[#0A0A0A] mb-1">{c.name}</div>
              <div className="text-[12px] text-[#6B7280] mb-5">{c.platform}</div>
              <div
                className="font-['Bebas_Neue'] text-[#b5e409] leading-none"
                style={{ fontSize: 38 }}
              >
                {c.count}
              </div>
              <div className="text-[12px] text-[#6B7280] mt-1">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
