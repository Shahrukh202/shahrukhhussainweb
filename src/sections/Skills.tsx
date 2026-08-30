import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { BrandIcon } from '@/components/BrandIcon';
import { skillGroups } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Skills() {
  const reduced = useReducedMotion();
const proficiency = [
  { name: 'React.js & Modern JS', level: 95 },
  { name: 'WordPress / Elementor', level: 92 },
  { name: 'Node.js & APIs', level: 88 },
  { name: 'Shopify & E-Commerce', level: 90 },
  { name: 'Tailwind & UI Design', level: 94 },
];
  return (
    <section id="skills" className="relative pt-10">
      <div className="container-max section-pad">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-">
        <SectionHeading
          eyebrow="Skills"
          title="Tools of the trade"
          description="Grouped by discipline — the technologies I reach for, day to day."
          
        />
        <div className=" space-y-6">
            {proficiency.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono font-bold text-fg text-balance leading-[0.92] tracking-tightest">{skill.name}</span>
                  <span className="text-base text-muted font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + 0.1 * i, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-[#1FFF1F] relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer bg-[length:200%_100%]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>

        <div className="mt-14 space-y-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="overflow-hidden rounded-3xl border border-[#1FFF1F]/30 bg-card"
            >
              <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                {/* Label */}
                <div className="flex shrink-0 items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1FFF1F]/30 bg-elevated text-[#1FFF1F]">
                    <group.icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
                      0{gi + 1}
                    </div>
                    <div className="mt-2 font-display text-lg font-bold text-fg text-balance leading-[0.92] tracking-tightest">{group.label}</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-px w-full bg-subtle/60 sm:h-16 sm:w-px" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      whileHover={reduced ? undefined : { y: -3 }}
                      className="group flex items-center gap-2.5 rounded-full border border-[#1FFF1F]/30 bg-elevated/60 px-4 py-2.5 transition-colors hover:border-accent/50"
                    >
                      <BrandIcon
                        name={skill.icon}
                        className="h-4 w-4 text-[#1FFF1F] transition-colors group-hover:text-accent"
                      />
                      <span className="text-sm font-mono font-medium text-muted">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
                  <div className="section-divider mt-10" />

    </section>
  );
}
