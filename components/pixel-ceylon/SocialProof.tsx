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
    <section style={{ background: '#0F1117' }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            Digital Marketing
          </span>
          <h2
            className="font-['Bebas_Neue'] leading-none text-white mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
          >
            We Grow <span className="text-[#C8FF00]">Audiences</span>
          </h2>
          <p className="text-base text-[#7E8190] max-w-[480px] mx-auto">
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
              className="bg-[#07080D] border border-[#1E2130] rounded-2xl p-7 text-center hover:border-[#C8FF00]/20 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#181B25] border-2 border-[#1E2130] flex items-center justify-center text-2xl mx-auto mb-4">
                {c.icon}
              </div>
              <div className="text-[15px] font-bold text-white mb-1">{c.name}</div>
              <div className="text-[12px] text-[#7E8190] mb-5">{c.platform}</div>
              <div
                className="font-['Bebas_Neue'] text-[#C8FF00] leading-none"
                style={{ fontSize: 38 }}
              >
                {c.count}
              </div>
              <div className="text-[12px] text-[#7E8190] mt-1">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
