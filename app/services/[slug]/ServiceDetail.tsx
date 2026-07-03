'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import Footer from '@/components/pixel-ceylon/Footer';

type Service = {
  id: string;
  slug: string;
  num: string;
  name: string;
  intro: string;
  description: string;
  tech_stack: { name: string; category: string }[];
  features: string[];
  image_url: string;
  icon: string;
};

const categoryColors: Record<string, string> = {
  Analytics: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  Frontend: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  Backend: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
  Database: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  DevOps: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  CMS: 'from-pink-500/20 to-pink-600/10 border-pink-500/30',
  Design: 'from-rose-500/20 to-rose-600/10 border-rose-500/30',
};

const categoryTextColors: Record<string, string> = {
  Analytics: 'text-blue-400',
  Frontend: 'text-emerald-400',
  Backend: 'text-orange-400',
  Database: 'text-purple-400',
  DevOps: 'text-cyan-400',
  CMS: 'text-pink-400',
  Design: 'text-rose-400',
};

export default function ServiceDetail({ service }: { service: Service }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const techByCategory = service.tech_stack.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, typeof service.tech_stack>
  );

  return (
    <main style={{ background: '#07080D' }}>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background image */}
        {service.image_url && (
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image_url}
              alt={service.name}
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07080D]/60 via-[#07080D]/80 to-[#07080D]" />
          </div>
        )}

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[#7E8190] hover:text-white text-sm font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to services
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="font-mono text-[11px] text-[#b5e409] tracking-[0.12em] mb-4">
              {service.num}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-bebas, sans-serif)',
                fontSize: 'clamp(48px, 8vw, 100px)',
                lineHeight: 0.92,
                letterSpacing: '0.01em',
                color: 'white',
              }}
            >
              {service.name}
            </h1>
            <p className="text-[#A0A1B0] text-lg md:text-xl max-w-[720px] mt-6 leading-relaxed">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 border-t border-[#1E2130]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 lg:gap-20">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-bebas, sans-serif)',
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  lineHeight: 1,
                  color: 'white',
                }}
                className="mb-6"
              >
                What We Offer
              </h2>
              <div className="text-[#A0A1B0] leading-relaxed text-base space-y-4">
                <p>{service.description}</p>
              </div>

              {/* Features */}
              <div className="mt-12">
                <h3
                  style={{
                    fontFamily: 'var(--font-bebas, sans-serif)',
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    lineHeight: 1,
                    color: 'white',
                  }}
                  className="mb-6"
                >
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[#0F1117] border border-[#1E2130] hover:border-[#b5e409]/20 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#b5e409]/10 border border-[#b5e409]/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#b5e409]" />
                      </div>
                      <span className="text-[#E8E9EF] text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar CTA */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-[#0F1117] border border-[#1E2130]">
                <p className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-[0.1em] mb-3">Ready to start?</p>
                <p className="text-[#A0A1B0] text-sm mb-5">Let us help you achieve your goals with our {service.name.toLowerCase()} expertise.</p>
                <a
                  href="/#contact"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#b5e409] text-black font-bold text-sm hover:bg-[#A8D900] transition-all duration-200 group"
                >
                  <span>Get a Free Quote</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#b5e409]/5 to-transparent border border-[#b5e409]/15">
                <p className="text-[11px] font-semibold text-[#b5e409] uppercase tracking-[0.1em] mb-2">Free Consultation</p>
                <p className="text-[#7E8190] text-sm">Book a 30-minute discovery call to discuss your project.</p>
              </div>
            </motion.aside>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-16 border-t border-[#1E2130]"
          >
            <h2
              style={{
                fontFamily: 'var(--font-bebas, sans-serif)',
                fontSize: 'clamp(28px, 3vw, 40px)',
                lineHeight: 1,
                color: 'white',
              }}
              className="mb-10"
            >
              Technologies We Use
            </h2>

            <div className="space-y-8">
              {Object.entries(techByCategory).map(([category, techs], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${categoryTextColors[category] || 'text-[#7E8190]'}`}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.35 }}
                        className={`px-5 py-3 rounded-xl bg-gradient-to-br border ${
                          categoryColors[category] || 'from-[#b5e409]/10 to-[#b5e409]/5 border-[#b5e409]/25'
                        } hover:scale-105 transition-transform duration-200`}
                      >
                        <span className="text-white font-semibold text-sm">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1E2130]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7E8190] text-sm mb-4">Ready to get started?</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#b5e409] text-black font-bold text-sm px-7 py-4 rounded-xl hover:bg-[#A8D900] transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Free Proposal
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
