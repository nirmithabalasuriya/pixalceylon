'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';

const services = [
  'Web Development',
  'SEO & Digital Marketing',
  'Web Design',
  'Branding',
  'Social Media Management',
  'All of the above',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('contact_submissions').insert([form]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ first_name: '', last_name: '', email: '', service: '', message: '' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative bg-[#0F1117] border border-[#1E2130] rounded-2xl p-8 overflow-hidden"
    >
      {/* top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8FF00] to-[#60A5FA] rounded-t-2xl" />

      <h2 className="text-xl font-bold text-white mb-1">Get a Free Proposal</h2>
      <p className="text-sm text-[#7E8190] mb-6">Tell us about your project — we'll respond within 24 hours.</p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-10 gap-4 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 flex items-center justify-center">
            <svg className="w-7 h-7 text-[#C8FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-bold text-lg">Sent! We'll be in touch soon.</p>
          <p className="text-[#7E8190] text-sm">Expect a reply within 24 hours.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-widest">First Name</label>
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                required
                placeholder="John"
                className="bg-[#181B25] border border-[#1E2130] rounded-xl text-white text-sm px-3.5 py-3 placeholder-[#7E8190] focus:outline-none focus:border-[#C8FF00] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-widest">Last Name</label>
              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                required
                placeholder="Doe"
                className="bg-[#181B25] border border-[#1E2130] rounded-xl text-white text-sm px-3.5 py-3 placeholder-[#7E8190] focus:outline-none focus:border-[#C8FF00] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-widest">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className="bg-[#181B25] border border-[#1E2130] rounded-xl text-white text-sm px-3.5 py-3 placeholder-[#7E8190] focus:outline-none focus:border-[#C8FF00] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-widest">Service You Need</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="bg-[#181B25] border border-[#1E2130] rounded-xl text-sm px-3.5 py-3 focus:outline-none focus:border-[#C8FF00] transition-colors appearance-none cursor-pointer text-[#7E8190]"
              style={{ color: form.service ? '#E8E9EF' : '#7E8190' }}
            >
              <option value="" disabled>Select a service…</option>
              {services.map((s) => (
                <option key={s} value={s} style={{ background: '#181B25', color: '#E8E9EF' }}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-[#7E8190] uppercase tracking-widest">Tell us about your project</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Briefly describe what you're looking for…"
              className="bg-[#181B25] border border-[#1E2130] rounded-xl text-white text-sm px-3.5 py-3 placeholder-[#7E8190] focus:outline-none focus:border-[#C8FF00] transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#C8FF00] text-black font-bold text-[15px] py-3.5 rounded-xl hover:bg-[#A8D900] transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          >
            {status === 'loading' ? 'Sending…' : 'Send My Free Proposal →'}
          </button>

          <p className="text-[11px] text-[#7E8190] text-center">No spam. No commitment. Just a friendly chat.</p>
        </form>
      )}
    </motion.div>
  );
}
