import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useIsTouch } from '@/hooks/useIsTouch';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: 'button' | 'submit';
};

/**
 * Magnetic wrapper — subtly pulls its content toward the cursor on hover.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export function Magnetic({
  children,
  className = '',
  strength = 0.35,
  as = 'div',
  href,
  onClick,
  ariaLabel,
  type = 'button',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const isTouch = useIsTouch();
  const disabled = reduced || isTouch;

  const handleMove = (e: MouseEvent) => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0,0)';
  };

  const commonProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className: `inline-flex transition-transform duration-300 ease-out will-change-transform ${className}`,
    'aria-label': ariaLabel,
  };

  if (as === 'a') {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        {...commonProps}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.a>
    );
  }
  if (as === 'button') {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        {...commonProps}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.button>
    );
  }
  return (
    <motion.div {...commonProps} transition={{ type: 'spring', stiffness: 150, damping: 15 }}>
      {children}
    </motion.div>
  );
}
