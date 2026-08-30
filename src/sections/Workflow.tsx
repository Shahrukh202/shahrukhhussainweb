import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { workflowSteps } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // A vertical progress line that fills as the user scrolls through the steps.
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="workflow" className="relative pt-10">
      <div className="container-max section-pad">
        <SectionHeading
          eyebrow="Workflow"
          title="How I work"
          description="A clear, repeatable process from first conversation to launch day."
        />

        <div ref={ref} className="relative mt-10 pl-7 sm:pl-9">
          {/* Track */}
          <div className="absolute left-3 top-0 h-full mt-1 w-px bg-subtle/60 sm:left-4 " aria-hidden>
            <motion.div
              style={reduced ? undefined : { scaleY }}
              className="h-full w-full origin-top bg-[#1FFF1F]"
            />
          </div>

          <ol className="space-y-10">
            {workflowSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={reduced ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                {/* Node */}
                <span className="absolute -left-[1.45rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-surface sm:-left-[1.7rem]">
                  <span className="h-2.5 w-2.5 rounded-full accent-gradient shadow-[0_0_12px_-2px_rgb(var(--accent-glow)/0.8)]" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="font-mono text-sm font-medium text-muted">{step.number}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-fg text-balance leading-[0.92] tracking-tightest sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm text-muted font-mono">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
                  <div className="section-divider mt-10" />

    </section>
  );
}
