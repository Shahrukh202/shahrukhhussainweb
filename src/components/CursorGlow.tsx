import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * A subtle cursor-following glow dot. Disabled on touch devices and when the
 * user prefers reduced motion.
 */
export function CursorGlow() {
  const reduced = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 400,
    mass: 0.5,
  };

  const ringSpringConfig = {
    damping: 30,
    stiffness: 200,
    mass: 0.8,
  };

  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const ringSpringX = useSpring(ringX, ringSpringConfig);
  const ringSpringY = useSpring(ringY, ringSpringConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      ringX.set(e.clientX);
      ringY.set(e.clientY);

      setIsVisible(true);

      const target = e.target as HTMLElement;

      const interactive =
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]'
        ) !== null;

      setIsPointer(interactive);
    };

    const down = () => {
      setIsClicking(true);
    };

    const up = () => {
      setIsClicking(false);
    };

    const leave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
    };
  }, [reduced, cursorX, cursorY, ringX, ringY]);

  if (reduced) return null;

  return (
    <>
      {/* Outer Cursor Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: ringSpringX,
          y: ringSpringY,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 48 : 32,
            height: isPointer ? 48 : 32,
            opacity: isVisible
              ? isPointer
                ? 0.7
                : 0.35
              : 0,
           borderColor: 'rgb(var(--fg))',
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          className="flex items-center justify-center rounded-full border-2"
          style={{
            marginLeft: -24,
            marginTop: -24,
          }}
        >
          {isPointer && (
            <motion.div
              animate={{
                scale: isClicking ? 0.5 : 1,
              }}
              transition={{
                duration: 0.15,
              }}
              className="h-1 w-1 rounded-full bg-[#1FFF1F]"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Inner Green Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer
              ? 0
              : isClicking
                ? 0.5
                : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          className="rounded-full bg-[#1FFF1F]"
          style={{
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            boxShadow: '0 0 12px rgba(31,255,31,0.6)',
          }}
        />
      </motion.div>
    </>
  );
}
