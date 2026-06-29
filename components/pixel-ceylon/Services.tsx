'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Search, Code as Code2, Sparkles, Palette, ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    slug: 'seo-content',
    icon: Search,
    name: 'SEO & Content',
    desc: 'Data-driven keyword research, technical audits, and content strategies that push you to the top of search results and keep you there.',
  },
  {
    num: '02',
    slug: 'web-development',
    icon: Code2,
    name: 'Web Development',
    desc: 'Blazing-fast, responsive websites and web apps built with modern frameworks. Secure, scalable, and optimised for conversions.',
  },
  {
    num: '03',
    slug: 'branding',
    icon: Sparkles,
    name: 'Branding',
    desc: 'Cohesive brand identities — from logo systems to brand voice — that build trust, recognition, and lasting emotional connection.',
  },
  {
    num: '04',
    slug: 'web-design',
    icon: Palette,
    name: 'Web Design',
    desc: 'Intuitive, visually stunning UI/UX that guides users from landing to conversion with purpose-driven design and smooth flows.',
  },
];

function ServiceCard({ s, index }: { s: typeof services[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = s.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link
        href={`/services/${s.slug}`}
        className="group block bg-[#0F1117] p-8 hover:bg-[#181B25] transition-colors duration-300"
      >
        <div className="font-['Space_Mono'] text-[11px] text-[#C8FF00] tracking-[0.12em] mb-6">{s.num}</div>
        <div className="w-12 h-12 rounded-xl bg-[#C8FF00]/8 border border-[#C8FF00]/15 flex items-center justify-center mb-6 group-hover:bg-[#C8FF00]/12 transition-colors">
          <Icon className="w-5 h-5 text-[#C8FF00]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#C8FF00] transition-colors">{s.name}</h3>
        <p className="text-sm text-[#7E8190] leading-relaxed">{s.desc}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-[#C8FF00] mt-6 group-hover:gap-3 transition-all duration-200">
          Learn more
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="services" style={{ background: '#07080D' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-24 pb-0">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
            What We Do
          </span>
          <h2
            className="font-['Bebas_Neue'] leading-none text-white mb-4"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
          >
            Services That <span className="text-[#C8FF00]">Drive Growth</span>
          </h2>
          <p className="text-base text-[#7E8190] max-w-[480px]">
            From pixel-perfect designs to campaigns that convert — we cover every layer of your digital presence.
          </p>
        </motion.div>
      </div>

      {/* Grid spanning full width */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ background: '#1E2130', gap: '1px' }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.num} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
