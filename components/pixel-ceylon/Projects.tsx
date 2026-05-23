'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    name: 'Meshaun Journeys',
    type: 'Tourism & Hospitality · Sri Lanka',
    tags: ['Web Design', 'UI/UX', 'Development'],
  },
  {
    num: '02',
    name: 'Gosberton House',
    type: 'Care & Healthcare · United Kingdom',
    tags: ['Web Design', 'Branding', 'SEO'],
  },
  {
    num: '03',
    name: 'Red State Invest',
    type: 'Investment & Finance · Sri Lanka',
    tags: ['Development', 'Content', 'Branding'],
  },
];

function ProjectRow({ p, index }: { p: typeof projects[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group grid grid-cols-[60px_1fr] md:grid-cols-[60px_1fr_auto_auto] items-center gap-4 md:gap-8 px-6 md:px-8 py-6 bg-[#0F1117] border border-[#1E2130] rounded-xl hover:bg-[#181B25] hover:border-[#C8FF00]/15 transition-all duration-300 cursor-pointer"
    >
      <div className="font-['Space_Mono'] text-[12px] text-[#7E8190]">{p.num}</div>

      <div>
        <div className="text-lg font-bold text-white group-hover:text-[#C8FF00] transition-colors duration-200">
          {p.name}
        </div>
        <div className="text-[13px] text-[#7E8190] mt-0.5">{p.type}</div>
      </div>

      <div className="hidden md:flex gap-2 flex-wrap">
        {p.tags.map((t) => (
          <span
            key={t}
            className="bg-[#181B25] border border-[#1E2130] rounded-full text-[11px] px-3 py-1 text-[#7E8190]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-[#C8FF00]">
        View Case Study
        <div className="w-9 h-9 rounded-full border border-[#C8FF00]/30 flex items-center justify-center group-hover:bg-[#C8FF00] group-hover:border-[#C8FF00] transition-all duration-200">
          <ArrowUpRight className="w-4 h-4 group-hover:text-black text-[#C8FF00] transition-colors duration-200" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" style={{ background: '#07080D' }} className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="inline-block bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 mb-4">
              Case Studies
            </span>
            <h2
              className="font-['Bebas_Neue'] leading-none text-white"
              style={{ fontSize: 'clamp(38px, 5vw, 62px)' }}
            >
              Our Work
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-[#C8FF00] hover:underline hidden sm:block">
            View all projects →
          </a>
        </motion.div>

        <div className="flex flex-col gap-3">
          {projects.map((p, i) => (
            <ProjectRow key={p.num} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
