import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const reduced = useReducedMotion();
  const center = align === 'center';

  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-[#1FFF1F] font-display tracking-[0.2em] uppercase"
        >
          {/* <span className="h-px w-8 bg-accent/60" /> */}
          {eyebrow}
        </motion.div>
      )}
     <motion.h2
  initial={reduced ? false : { opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, delay: 0.05 }}
  className="font-display text-4xl font-bold text-balance leading-[0.92] tracking-tightest sm:text-5xl lg:text-6xl"
>
  <span className="text-fg">{title.split(" ").slice(0, Math.ceil(title.split(" ").length / 2)).join(" ")}</span>{" "}
  <span className="text-[#1FFF1F]">{title.split(" ").slice(Math.ceil(title.split(" ").length / 2)).join(" ")}</span>
</motion.h2>
      {description && (
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-5 text-base max-w-lg text-muted font-mono sm:text-lg ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
