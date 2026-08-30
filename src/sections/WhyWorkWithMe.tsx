import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { whyWorkWithMe } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function WhyWorkWithMe() {
  const reduced = useReducedMotion();

  return (
    <section id="why" className="relative  pt-10">
      <div className="container-max section-pad">
        <SectionHeading
          eyebrow="Why work with me"
          title="Built right, end to end"
          description="The principles I bring to every project — not features, guarantees."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={reduced ? undefined : { y: -3 }}
              className="group flex gap-4 rounded-2xl border border-[#1FFF1F]/30 bg-card p-5 transition-colors hover:border-accent/40 hover:bg-card/70"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1FFF1F]/30 bg-elevated text-fg group-hover:text-[#1FFF1F] transition-all">
                <Check size={15} strokeWidth={2.4} />
              </span>
              <div>
                <h3 className="font-display font-bold text-fg text-balance leading-[0.92] tracking-tightest">{item.title}</h3>
                <p className="mt-2 text-xs text-muted font-mono">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
                  <div className="section-divider mt-10" />

    </section>
  );
}
