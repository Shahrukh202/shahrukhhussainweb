import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollToSection } from '@/utils/scroll';

export function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="services" className="relative pt-10">
      <div className="container-max section-pad">
        <SectionHeading
          eyebrow="Services"
          title="What I build"
          description="From a single landing page to a full e-commerce platform — here's where I can help."
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-[#1FFF1F]/30 bg-subtle/40 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative bg-card/60 p-6 transition-colors duration-300 hover:bg-card"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1FFF1F]/30 bg-elevated text-[#1FFF1F] transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_24px_-6px_rgb(var(--accent-glow)/0.5)]">
                  <service.icon size={22} strokeWidth={1.6} />
                </span>

                <h3 className="mt-5 font-display text-base font-bold text-balance leading-[0.92] tracking-tightest text-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs  text-muted font-mono">
                  {service.description}
                </p>

                <div  onClick={() => scrollToSection('projects')}  className="cursor-pointer mt-5 font-mono flex items-center gap-1 text-xs font-medium text-subtle opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#1FFF1F] group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight size={13} strokeWidth={2} />
                </div>
              </div>

              {/* Index */}
              <span className="absolute right-5 top-5 font-mono text-[10px] text-subtle/50">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
                  <div className="section-divider mt-10" />

    </section>
  );
}
