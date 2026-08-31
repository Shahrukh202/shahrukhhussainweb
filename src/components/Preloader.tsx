import { useEffect, useState } from 'react';
import { AnimatePresence, motion} from 'framer-motion';


export function Preloader() {
 
    
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setComplete(true);
            document.body.style.overflow = '';
          }, 500);

          return 100;
        }

        return Math.min(prev + 2, 100);
      });
    }, 35);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
            },
          }}
          
         className="bg-grid fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-surface"
        >
          {/* Green background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1FFF1F] opacity-[0.04] blur-[140px]" />
  
          {/* Content */}
          <div className="relative z-10 w-full max-w-md px-8">

            {/* Logo + Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* SH Logo */}
                  <motion.div
  animate={{
    scale: [1, 1.08, 1],
    boxShadow: [
      '0 0 0px rgba(31, 255, 31, 0)',
      '0 0 25px rgba(31, 255, 31, 0.45)',
      '0 0 0px rgba(31, 255, 31, 0)',
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
}}
className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1FFF1F] shadow-[0_0_40px_rgba(31,255,31,0.15)] text-black font-display text-lg font-bold transition-transform group-hover:scale-105"
              >
                SH
              </motion.div>

              {/* Name */}
              <h1 className="mt-5 font-display text-3xl uppercase font-semibold tracking-tight text-fg">
                Shahrukh{' '}
                <span className="text-[#1FFF1F]">
                  Hussain
                </span>
              </h1>

              {/* Profession */}
              <p className="mt-2 font-mono text-md uppercase font-bold tracking-[0.3em] text-subtle sm:text-lg">
                Web Developer
              </p>
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-16"
            >
              {/* Percentage */}
              <div className="mb-3 flex items-end justify-between">
                <span className=" text-subtle font-mono text-base text-subtle">
                  Loading Experience
                </span>

                <span className="font-mono text-sm font-medium text-[#1FFF1F]">
                  {progress}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-[#1FFF1F]"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.15,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Status */}
              <div className="mt-3 flex justify-between text-subtle font-mono text-base text-subtle">
                <span>
                  {progress < 100
                    ? 'Initializing'
                    : 'Complete'}
                </span>

                <span>
                  Ready to ship
                </span>
              </div>
            </motion.div>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 text-center"
            >
              <span className="font-mono  text-subtle text-sm text-subtle">
                © {new Date().getFullYear()} SHAHRUKH <span className='text-[#1FFF1F]'>HUSSAIN</span>
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}