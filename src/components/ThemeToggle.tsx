import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
  theme: 'dark' | 'light';
  toggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, toggle, className = '' }: Props) {
  const reduced = useReducedMotion();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1FFF1F]/30 bg-card text-fg transition-colors  hover:text-[#1FFF1F] ${className}`}
    >
      <motion.span
        key={theme}
        initial={reduced ? false : { rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute"
      >
        {isDark ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
      </motion.span>
    </button>
  );
}
