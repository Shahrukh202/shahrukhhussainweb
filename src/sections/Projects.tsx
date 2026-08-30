import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BrandIcon } from '@/components/BrandIcon';
import { projects, projectCategories } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { techIconKey } from '@/utils/techIcon';
import { Magnetic } from '@/components/Magnetic';

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All');
  const reduced = useReducedMotion();

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative pt-10">
      <div className="container-max section-pad">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="A collection of websites, e-commerce stores and digital experiences built across different technologies and platforms."
          />

          {/* Filter */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {projectCategories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(cat)}
                  className={`relative font-display  rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'text-black' : 'text-muted hover:text-fg'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-full bg-[#1FFF1F]"
                      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-3xl border border-[#1FFF1F]/30 bg-card"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                  {/* <div className="absolute inset-0 bg-grid opacity-20 transition-opacity duration-500 group-hover:opacity-40" /> */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center transition-transform duration-500 ">
                      {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-card transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_-6px_rgb(var(--accent-glow)/0.5)]">
                        <BrandIcon
                          name={techIconKey(project.tags[0])}
                          className="h-8 w-8 text-accent"
                        />
                      </div>
                      <div className="font-display text-xl font-bold text-fg">{project.title}</div> */}
                    <img
    src={project.imageQuery}
    alt={`${project.title} website preview`}
    className="
      absolute
      left-0
      top-0
      w-full
      h-auto
      transition-transform
      duration-[8000ms]
      ease-in-out
      group-hover:-translate-y-[55%]
    "
  />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 rounded-full border border-[#1FFF1F]/30 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#1FFF1F] backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-fg text-balance leading-[0.92] tracking-tightest">{project.title}</h3>
                  {/* <p className="mt-2 text-xs text-muted font-mono">{project.description}</p> */}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center font-mono gap-1.5 rounded-full border border-[#1FFF1F]/30 bg-elevated px-2.5 py-1 text-[11px] font-medium text-muted"
                      >
                        <BrandIcon
                          name={techIconKey(tag)}
                          className="h-3 w-3 text-[#1FFF1F]"
                        />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                      {project.liveUrl && (
                                 <Magnetic>
                      <a
                        href={
                          project.liveUrl && project.liveUrl !== '#'
                            ? project.liveUrl
                            : project.imageQuery
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-display rounded-full bg-[#1FFF1F] px-4 py-2 text-xs font-semibold text-black shadow-[0_8px_30px_-8px_rgb(var(--accent-glow)/0.5)] transition-shadow hover:shadow-[0_12px_40px_-6px_rgb(var(--accent-glow)/0.7)]"
                      >
                        <ExternalLink size={13} strokeWidth={2.2} />
                        Live Demo
                      </a>
                    </Magnetic>
                                )}
                    {/* {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2 text-xs font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        <ArrowUpRight size={13} strokeWidth={2.2} />
                        GitHub
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="section-divider mt-10" />
    </section>
  );
}
