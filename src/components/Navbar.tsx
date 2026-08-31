import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { DownloadCV } from '@/components/DownloadCV';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { scrollToSection } from '@/utils/scroll';
import { siteConfig } from '@/data/siteConfig';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export function Navbar({ theme, toggleTheme }: { theme: 'dark' | 'light'; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // const handleNav = (id: string) => {
  //   setOpen(false);
  //   scrollToSection(id);
  // };

  const handleNav = (id: string) => {
  setOpen(false);

  if (id === 'loader') {
    window.location.reload();
    return;
  }

  scrollToSection(id);
};

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container-max mx-2 lg:section-pad md:section-pad lg:mx-0">
          <nav
            className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-6 ${
              scrolled
                ? 'glass border-[#1FFF1F]/30 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]'
                : 'border-transparent bg-transparent'
            }`}
            aria-label="Primary"
          >
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="group flex items-center gap-2.5"
              aria-label="Go to home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1FFF1F] text-black font-display text-sm font-bold transition-transform group-hover:scale-105">
                SH
              </span>
              <span className="font-display text-lg uppercase font-semibold tracking-tight text-fg">
                Shahrukh <span className="text-[#1FFF1F]">Hussain</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive ? 'text-fg' : 'text-muted hover:text-fg'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-card border border-[#1FFF1F]/30"
                          transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} toggle={toggleTheme} />
              <DownloadCV variant="nav" className="hidden lg:inline-flex " />

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center hover:text-[#1FFF1F] justify-center rounded-full border border-[#1FFF1F]/30 bg-card text-fg lg:hidden"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-surface/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={reduced ? undefined : { y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduced ? undefined : { y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-x-3 top-20 rounded-3xl border border-[#1FFF1F]/30 bg-card p-4 shadow-2xl"
              aria-label="Mobile"
            >
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={reduced ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNav(item.id)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium transition-colors ${
                        active === item.id
                          ? 'bg-elevated text-fg'
                          : 'text-muted hover:bg-elevated hover:text-fg'
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <DownloadCV variant="footer" className="mt-3 w-full justify-center" />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
