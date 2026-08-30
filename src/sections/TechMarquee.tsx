import { BrandIcon } from '@/components/BrandIcon';
import { techMarquee } from '@/data/content';

export function TechMarquee() {
  // Duplicate the list so the marquee loops seamlessly.
  const items = [...techMarquee, ...techMarquee];

  return (
    <section
      id="tech-marquee"
      className="relative overflow-hidden border-y border-[#1FFF1F]/30 bg-elevated/40 py-10 mt-5"
      aria-label="Technologies I work with"
    >
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden>
          {items.map((tech, i) => (
            <TechItem key={`${tech.name}-dup-${i}`} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 transition-transform hover:scale-105">
      <BrandIcon
        name={icon}
        className="h-7 w-7 text-[#1FFF1F] transition-colors duration-300 group-hover:text-accent"
      />
      <span className="font-display text-lg font-medium text-fg transition-colors duration-300 group-hover:text-fg">
        {name}
      </span>
      <span className="ml-2 text-subtle">-</span>
    </div>
  );
}
