import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, ArrowUpRight, MapPin } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';
import { BrandIcon } from '@/components/BrandIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollToSection } from '@/utils/scroll';
import { heroStats } from '@/data/content';
import { siteConfig } from '@/data/siteConfig';
import { techIconKey } from '@/utils/techIcon';

const HERO_BADGES = ['React.js', 'JavaScript', 'Node.js', 'WordPress', 'Shopify' , 'Wix'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative  min-h-screen  items-center overflow-hidden pt-36 bg-grid"
    >
      {/* Background layers */}
      <motion.div
        style={reduced ? undefined : { y: yBg }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.025]" />
      </motion.div>

      <div className="container-max section-pad w-full">
        <motion.div style={reduced ? undefined : { y: yContent, opacity }} className="max-w- flex flex-col justify-center items-center">
          {/* Availability pill */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center  bg-card gap-2 rounded-full border tracking-[0.1em] border-[#1FFF1F]/30  px-10 py-2.5 text-xs  font-display text-fg backdrop-blur-sm"
          >
            {/* <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span> */}
            <Sparkles className="w-3.5 h-3.5 text-[#1FFF1F]" />
            {siteConfig.availability}
            <span className="text-fg">|</span>
            <MapPin size={12} className="text-[#1FFF1F]" />
            {siteConfig.location}
          </motion.div>
{/* Role + headline */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="font-mono text-md uppercase font-bold tracking-[0.3em] text-subtle sm:text-lg">
              Web Developer
            </span>
            {/* <span className="h-px flex-1 max-w-[120px] bg-line" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Full-Stack
            </span> */}
          </motion.div>
          {/* Name */}
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 font-display text-center text-[11vw]  lg:text-[8vw] font-bold leading-[0.92] tracking-tightest "
          >
            <span className="block text-fg">Building Digital</span>
            <span className="block text-[#1FFF1F] mt-2">Experiences</span>
          </motion.h1>

          

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 max-w- text-center text-[1.2rem] md:text-[2rem] text-subtle font-mono text-base text-subtle sm:text-xl"
          >
            that convert visitors into customers
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex- justify-center items-center gap-4"
          >
            <Magnetic as="button" onClick={() => scrollToSection('projects')} ariaLabel="View my work">
              <span className="inline-flex font-display tracking-[0.em] items-center gap-2 rounded-full bg-[#1FFF1F] px-7 py-3.5 text-sm font-semibold text-black shadow-[0_8px_30px_-8px_rgb(var(--accent-glow)/0.5)] transition-shadow hover:shadow-[0_12px_40px_-6px_rgb(var(--accent-glow)/0.7)]">
                View My Work
                <ArrowRight size={16} strokeWidth={2.2} />
              </span>
            </Magnetic>
            <Magnetic as="button" onClick={() => scrollToSection('contact')} ariaLabel="Let's work together">
              <span className="inline-flex font-display tracking-[0.em] items-center gap-2 rounded-full border border-[#1FFF1F]/30 bg-card px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent">
                Let's Work Together
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </Magnetic>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-2.5"
          >
            {HERO_BADGES.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center font-display tracking-[0.1em] gap-2 rounded-full border border-[#1FFF1F]/30 bg-card px-3.5 py-1.5 text-xs font-medium text-subtle backdrop-blur-sm"
              >
                <BrandIcon name={techIconKey(tech)} className="h-3.5 w-3.5 text-[#1FFF1F]" />
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 place-items-center gap-px overflow-hidden rounded-2xl border border-[#1FFF1F]/30 bg-subtle/40 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-card/60 p-5 ">
              <div className="font-display text-2xl font-bold text-fg sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-[#1FFF1F] font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-subtle lg:flex"
        aria-hidden
      >
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-accent"
            animate={reduced ? undefined : { y: [-12, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
      <div className="section-divider mt-10" />
    
    </section>
  );
}
