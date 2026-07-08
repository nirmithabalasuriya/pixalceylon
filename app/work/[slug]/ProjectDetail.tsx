'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ExternalLink, Check } from 'lucide-react';
import Footer from '@/components/pixel-ceylon/Footer';

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  summary: string;
  description: string;
  features: string[];
  image_url: string;
  gallery: { url: string; alt: string }[];
  external_url: string;
};

export default function ProjectDetail({ project }: { project: Project }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay },
  });

  return (
    <main style={{ background: '#07080D' }}>
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[#7E8190] hover:text-white text-sm font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            ref={headerRef}
            {...fadeIn(0.1)}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#181B25] border border-[#1E2130] rounded-full text-[11px] font-semibold tracking-wide uppercase px-3 py-1 text-[#7E8190]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-bebas, sans-serif)',
                fontSize: 'clamp(48px, 7vw, 88px)',
                lineHeight: 0.92,
                letterSpacing: '0.01em',
                color: 'white',
              }}
              className="mb-4"
            >
              {project.name}
            </h1>
            <p className="text-[#7E8190] text-lg max-w-[640px]">{project.summary}</p>
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-[#1E2130] bg-[#0F1117]"
          >
            <Image
              src={project.image_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop'}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080D]/60 via-transparent to-transparent pointer-events-none" />
            {/* Project info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-white/70 text-sm font-medium">{project.client_type}</p>
            </div>
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
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: 1,
                  color: 'white',
                }}
                className="mb-6"
              >
                About the Project
              </h2>
              <div className="text-[#A0A1B0] leading-relaxed text-base space-y-4">
                <p>{project.description}</p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Project info */}
              <div className="p-6 rounded-xl bg-[#0F1117] border border-[#1E2130]">
                <p className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-[0.1em] mb-3">Client</p>
                <p className="text-white font-semibold">{project.client_type}</p>
              </div>

              {/* Services */}
              <div className="p-6 rounded-xl bg-[#0F1117] border border-[#1E2130]">
                <p className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-[0.1em] mb-3">Services</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-white text-sm bg-[#181B25] px-3 py-1.5 rounded-lg border border-[#1E2130]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {project.external_url && (
                <a
                  href={project.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#b5e409] text-black font-bold text-sm hover:bg-[#A8D900] transition-all duration-200 group"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </motion.aside>
          </div>

          {/* Features */}
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
              className="mb-8"
            >
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 p-5 rounded-xl bg-[#0F1117] border border-[#1E2130] hover:border-[#b5e409]/20 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#b5e409]/10 border border-[#b5e409]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#b5e409]" />
                  </div>
                  <span className="text-[#E8E9EF] text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery (if any) */}
          {project.gallery && project.gallery.length > 0 && (
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
                className="mb-8"
              >
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden border border-[#1E2130] bg-[#0F1117]"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt || `${project.name} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Next CTA */}
      <section className="py-16 border-t border-[#1E2130]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7E8190] text-sm mb-4">Ready to start your project?</p>
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
