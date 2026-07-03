'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const badges = [
  { icon: '⚡', label: '2–3 Week Delivery' },
  { icon: '🌍', label: '4+ Countries Served' },
  { icon: '✦', label: '23+ Happy Clients' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Premium subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(circle, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Soft mesh gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 800px 600px at 20% 50%, rgba(181,228,9,0.07) 0%, transparent 70%), radial-gradient(ellipse 600px 500px at 85% 20%, rgba(100,120,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 400px 400px at 10% 80%, rgba(181,228,9,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Blurred organic shapes */}
      <div className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(181,228,9,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(100,120,255,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      {/* Pixel deco */}
      <div className="absolute top-16 right-16 opacity-[0.50] pointer-events-none hidden lg:block">
        <svg width="180" height="180" viewBox="0 0 200 200">
          {[[0,0],[16,16],[32,0],[48,32],[0,48],[64,16],[80,48],[16,64],[96,0]].map(([x,y],i) => (
            <rect key={i} x={x} y={y} width="8" height="8" fill="#b5e409" />
          ))}
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#b5e409] pulse-dot block" />
              <span style={{ fontFamily: 'var(--font-space-mono, monospace)' }} className="text-[11px] text-[#6B7280] tracking-[0.12em] uppercase">
                Sri Lanka&apos;s Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-bebas, sans-serif)',
                fontSize: 'clamp(58px, 8vw, 100px)',
                lineHeight: 0.93,
                letterSpacing: '0.01em',
                color: '#0A0A0A',
              }}
              className="mb-6"
            >
              BUILDING
              <br />
              <span style={{ WebkitTextStroke: '1.5px #b5e409', color: 'transparent' }}>
                DIGITAL
              </span>
              <br />
              EXCELLENCE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-[17px] text-[#4B5563] leading-relaxed max-w-[460px] mb-8"
            >
              We craft high-performance websites and data-driven digital marketing strategies that turn clicks into customers — pixel by pixel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="flex flex-wrap gap-2.5"
            >
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg px-3.5 py-2 text-[13px] text-[#1F2937]"
                >
                  <span className="text-[#0A0A0A] font-bold text-base">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
