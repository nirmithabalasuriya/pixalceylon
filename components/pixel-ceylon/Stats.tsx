'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function StatCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={`bg-white border border-[#E5E5E5] rounded-2xl p-8 relative overflow-hidden hover:border-[#b5e409]/40 transition-colors duration-300 shadow-sm shadow-black/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Stats() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="stats" style={{ background: '#FFFFFF' }} className="py-24 relative overflow-hidden">
      {/* Technical blueprint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A0A0A 1px, transparent 1px),
            linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Diagonal technical lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="100" height="100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="#0A0A0A" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none opacity-[0.03]" style={{ background: 'radial-gradient(circle at top left, #b5e409 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-[0.02]" style={{ background: 'radial-gradient(circle at bottom right, #b5e409 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#b5e409]/10 text-[#0A0A0A] border border-[#b5e409]/30 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            By the Numbers
          </span>
          <h2
            className="font-['Bebas_Neue'] leading-none text-[#0A0A0A]"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
          >
            Why Clients <span className="text-[#b5e409]">Trust Us</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Happy clients */}
          <StatCard delay={0}>
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.1em] mb-3">Happy Clients</p>
            <div
              className="font-['Bebas_Neue'] leading-none text-[#0A0A0A]"
              style={{ fontSize: 64 }}
            >
              <span className="text-[#b5e409]">23</span>+
            </div>
            <p className="text-sm text-[#6B7280] mt-2">Websites, branding &amp; campaigns delivered</p>
            <div className="absolute bottom-[-16px] right-[-8px] font-['Bebas_Neue'] text-[120px] leading-none text-[#0A0A0A]/[0.03] select-none pointer-events-none">
              23
            </div>
          </StatCard>

          {/* Delivery time */}
          <StatCard delay={0.08}>
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.1em] mb-3">Avg. Delivery Time</p>
            <div className="font-['Bebas_Neue'] leading-tight text-[#0A0A0A]" style={{ fontSize: 44 }}>
              2–3<br />
              <span className="text-[#b5e409]" style={{ fontSize: 28 }}>Weeks</span>
            </div>
            <p className="text-sm text-[#6B7280] mt-2">Fastest turnaround in the region</p>
          </StatCard>

          {/* Countries */}
          <StatCard delay={0.16}>
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.1em] mb-3">Countries Served</p>
            <div className="font-['Bebas_Neue'] leading-none text-[#0A0A0A]" style={{ fontSize: 64 }}>
              <span className="text-[#b5e409]">4</span>+
            </div>
            <p className="text-sm text-[#6B7280] mt-2">Across borders &amp; time zones</p>
            <div className="absolute bottom-[-16px] right-[-8px] font-['Bebas_Neue'] text-[120px] leading-none text-[#0A0A0A]/[0.03] select-none pointer-events-none">
              4
            </div>
          </StatCard>

          {/* Web designs — spans 2 cols */}
          <StatCard delay={0.24} className="sm:col-span-2">
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.1em] mb-3">Web Designs Shipped</p>
            <div className="flex items-end gap-5">
              <div className="font-['Bebas_Neue'] leading-none text-[#0A0A0A]" style={{ fontSize: 64 }}>
                <span className="text-[#b5e409]">30</span>+
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 mb-1">
                {[48, 36, 56, 42, 52, 38].map((h, i) => (
                  <div
                    key={i}
                    className="w-2.5 rounded-sm bg-[#b5e409]"
                    style={{ height: h, opacity: 0.5 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#6B7280] mt-2">Unique, tailored designs — zero templates</p>
          </StatCard>

          {/* AI Automation */}
          <StatCard delay={0.32} className="bg-[#b5e409]/[0.08] border-[#b5e409]/30">
            <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-[0.1em] mb-3">AI Automation</p>
            <div className="font-['Bebas_Neue'] text-[28px] text-[#0A0A0A] my-2">ACTIVE</div>
            <p className="text-sm text-[#6B7280]">Workflows &amp; agents built for efficiency</p>
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#b5e409] pulse-dot" />
          </StatCard>
        </div>
      </div>
    </section>
  );
}
