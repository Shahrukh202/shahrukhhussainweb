import React from 'react';
import { motion } from 'framer-motion';
import { Check, Terminal, Cpu } from 'lucide-react';
import { Code2, Server, ShoppingCart, LayoutTemplate } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';


import shahrukh from '../assets/my profile new .webp';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '60+', label: 'Happy Clients' },
  { value: '15+', label: 'Technologies' },
];
const AREAS = [
  { icon: Code2, label: 'Frontend Development' },
  { icon: Server, label: 'Full-Stack Development' },
  { icon: LayoutTemplate, label: 'WordPress & Wix' },
  { icon: ShoppingCart, label: 'Shopify E-commerce' },
];
const highlights = [
  'Pixel-perfect, responsive designs',
  'SEO-optimized & performance-focused',
  'Clean, maintainable, documented code',
  'Cross-browser compatibility',
];

export function About() {
  const reduced = useReducedMotion();

  return (
     <section id="about" className="relative pt-10 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-dot opacity-50" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1FFF1F] rounded-full blur-[150px] opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side - Developer coding with multiple screens */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#1FFF1F]/30 group">
              <img
                src={shahrukh}
                alt="Shahrukh Hussain Dev"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Floating code snippet card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card backdrop-blur-xl border border-[#1FFF1F]/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-[#1FFF1F]" />
                  <span className="text-xs font-mono text-muted-foreground/60">developer@dev:~</span>
                </div>
                <div className="font-mono text-[11px] space-y-0.5">
                  <div className="text-muted-foreground/40">$ npm run build</div>
                  <div className="text-[#1FFF1F]">✓ Building production bundle...</div>
                  <div className="text-muted-foreground/60">✓ 247 modules transformed</div>
                  <div className="text-[#1FFF1F]">✓ Built in 2.4s — ready to ship</div>
                </div>
              </motion.div>
              

            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-6 -right-6 px-5 py-4 rounded-2xl bg-[#1FFF1F] text-black shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                <div>
                  <div className="text-2xl font-bold leading-none">100%</div>
                  <div className="text-xs font-medium opacity-80">Dedication</div>
                </div>
              </div>
            </motion.div>

            {/* Floating second screen mockup */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-6 w-40 rounded-xl overflow-hidden border-2 border-[#1FFF1F]/30 shadow-2xl hidden md:block"
            >
              <div className="bg-card px-2 py-1.5 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="bg-card p-2 font-mono text-[8px] leading-tight">
                <div className="text-[#c678dd]">const</div>
                <div className="text-[#61afef]">  app</div>
                <div className="text-foreground/80">  = ()</div>
                <div className="text-[#98c379]">  {'=> {'}</div>
                <div className="text-[#e06c75]">    return</div>
                <div className="text-[#1FFF1F]">    {'<Hero />'}</div>
                <div className="text-[#98c379]">  {'}'}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs font-bold text-[#1FFF1F] font-display tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-fg text-balance leading-[0.92] tracking-tightest mb-6">
              I turn ideas into{' '}
              <span className="text-[#1FFF1F]">production-ready</span> web applications
            </h2>
            <p className="text-base text-muted font-mono mb-4">
             I'm a web developer focused on building modern, high-performing, and scalable websites and web applications. I work across React.js, JavaScript, Tailwind CSS, WordPress, WooCommerce, Shopify, and Wix — combining strong development with clean, thoughtful UI/UX.
            </p>
            <p className="text-base text-muted font-mono mb-8">
              My approach is simple: write clean code, build intuitive experiences, and make every project perform. From high-converting landing pages and e-commerce stores to custom web applications and SaaS platforms, I build digital products that are fast, responsive, accessible, and ready to grow.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {AREAS.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-[#1FFF1F]/30 bg-card p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated text-accent">
                    <area.icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs lg:text-sm font-medium text-fg font-mono">{area.label}</span>
                </motion.div>
              ))}
            </div>

            
          </motion.div>
        </div>
      </div>
            <div className="section-divider mt-10" />

    </section>
  );
}
