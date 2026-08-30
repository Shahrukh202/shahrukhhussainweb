import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { BrandIcon } from '@/components/BrandIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { projects } from '@/data/content';
import { techIconKey } from '@/utils/techIcon';
import { Magnetic } from '@/components/Magnetic';


const FEATURED = projects.filter((p) => p.featured).slice(0, 4);

export function ContainerScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // The browser container scales up and rotates subtly as it enters view,
  // then settles — inspired by the 21st.dev container scroll concept.
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.78, 1, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [18, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4]);

  return (
    <section
      ref={ref}
      id="showcase"
      className="relative flex min-h-[140vh] items-center justify-center overflow-hidden pt-10"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      </div>

      <div className="container-max section-pad w-full">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 font-bold inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] text-[#1FFF1F]">
            {/* <span className="h-px w-8 bg-accent/60" /> */}
            Featured Work
            {/* <span className="h-px w-8 bg-accent/60" /> */}
          </div>
          <h2 className="text-fg text-balance text-4xl font-bold font-display leading-[0.92] tracking-tightest sm:text-5xl lg:text-6xl">
            Selected projects, <span className="text-[#1FFF1F]">in motion</span>
          </h2>
          <p className="mt-5 font-mono text-base text-subtle sm:text-lg">
            A selection of recent work — explore the projects, technologies, and experiences behind each build.
          </p>
        </div>

        {/* Browser container */}
        <motion.div
          style={reduced ? undefined : { scale, rotateX, y: translateY, opacity, perspective: 1200 }}
          className="mx-auto max-w-5xl mb-10"
        >
          <div className="overflow-hidden rounded-2xl border border-[#1FFF1F]/30 bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-[#1FFF1F]/30 bg-elevated px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-silver-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-md border border-[#1FFF1F]/30 bg-surface px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-accent/60" />
                <span className="font-mono text-[11px] text-subtle">shahrukhhussain.vercel.app/work</span>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex items-center gap-1 overflow-x-auto border-b border-[#1FFF1F]/30 bg-elevated px-3 py-2">
              {FEATURED.map((p, i) => (
                <span
                  key={p.id}
                  className={`whitespace-nowrap rounded-md px-3 py-1 font-mono text-[11px] ${
                    i === 0 ? 'bg-card text-fg' : 'text-subtle'
                  }`}
                >
                  {p.title}
                </span>
              ))}
            </div>

            {/* Project slides */}
            <div className="relative">
              {FEATURED.map((project, i) => (
                <ProjectSlide key={project.id} project={project} index={i} total={FEATURED.length} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectSlide({
  project,
  index,
  total,
}: {
  project: (typeof FEATURED)[number];
  index: number;
  total: number;
}) {
  const slideRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ['start end', 'end start'],
  });

  // Each slide fades and lifts based on its own scroll position.
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const slideOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={slideRef}
      style={reduced ? undefined : { y, opacity: slideOpacity }}
      className="border-b border-[#1FFF1F]/30 last:border-b-0"
    >
      <div className="grid gap-0 md:grid-cols-[1.4fr_1fr]">
        {/* Visual */}
        <div className="relative aspect-[16/10] overflow-hidden bg-elevated md:aspect-auto">
<div className="group relative h-96 w-full overflow-hidden bg-elevated">
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
{/* <div className="absolute inset-0 bg-grid opacity-30" /> */}
          {/* <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-card">
                <BrandIcon name={techIconKey(project.tags[0])} className="h-8 w-8 text-accent" />
              </div>
              <div className="font-display text-2xl font-bold text-fg">{project.title}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-subtle">
                {project.category}
              </div>
            </div>
          </div> */}
          <div className="absolute right-4 top-4 rounded-full border border-[#1FFF1F] bg-surface/80 px-3 py-1 font-mono text-[10px] text-[#1FFF1F] backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col  p-6 sm:p-8">
          <div>
            <div className="font-display uppercase tracking-[0.2em] text-[#1FFF1F] text-xs">
              {project.category}
            </div>
            <h3 className="mt-3 font-display text-2xl  font-bold text-fg">{project.title}</h3>
            {/* <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p> */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex font-mono items-center gap-1.5 rounded-full border border-[#1FFF1F]/30 bg-elevated px-2.5 py-1 text-[11px] font-medium text-muted"
                >
                  <BrandIcon
                    name={techIconKey(tag)}
                    className="h-3 w-3 text-[#1FFF1F]"
                  />
                  {tag}
                </span>
              ))}
            </div>
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
    Live Preview
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
      </div>
    </motion.div>
  );
}
