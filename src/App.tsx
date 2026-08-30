import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CursorGlow } from '@/components/CursorGlow';
import { Hero } from '@/sections/Hero';
import { ContainerScroll } from '@/sections/ContainerScroll';
import { TechMarquee } from '@/sections/TechMarquee';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { Workflow } from '@/sections/Workflow';
import { WhyWorkWithMe } from '@/sections/WhyWorkWithMe';
import { Contact } from '@/sections/Contact';
import { useTheme } from '@/hooks/useTheme';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
function App() {
  const { theme, toggle } = useTheme();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="relative min-h-screen bg-surface text-fg">
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <ContainerScroll />
        <TechMarquee />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Workflow />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-3 z-50 flex flex-col items-center gap-3">

 <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className={`animate-bounce flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1FFF1F]/30 bg-card text-[#1FFF1F] transition-all duration-500 hover:scale-110 hover:bg-[#1FFF1F] hover:text-black ${
    showTop
      ? 'translate-y-0 opacity-100'
      : 'pointer-events-none translate-y-4 opacity-0'
  }`}
>
  <ArrowUp
    size={25}
    className=""
  />
</button>

  {/* WhatsApp */}
  <a
    href="https://wa.me/923163078238"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1FFF1F] text-black transition-all duration-300 hover:scale-110 hover:border-[#1FFF1F]"
  >
    <FaWhatsapp size={30} />
  </a>

</div>
    </div>
  );
}

export default App;
