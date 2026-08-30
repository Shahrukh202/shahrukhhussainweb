import { Download } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

type Props = {
  variant?: 'nav' | 'footer';
  className?: string;
};

/**
 * Reusable "Download CV" button.
 * Renders a proper download link to the PDF in the public/ folder.
 * Works in both light and dark mode — green background with white text.
 */
export function DownloadCV({ variant = 'nav', className = '' }: Props) {
  const sizeClasses =
    variant === 'footer'
      ? 'px-5 py-2.5 text-sm'
      : 'px-4 py-2 text-sm';

  return (
    <a
      href={siteConfig.cvPath}
      download
      aria-label="Download CV (PDF)"
      className={`group inline-flex font-display tracking-[0.em] items-center gap-2 rounded-lg bg-[#1FFF1F] text-black font-semibold transition-all duration-300 hover:scale-[1.03] shadow-[0_8px_30px_-8px_rgb(var(--accent-glow)/0.5)]  hover:shadow-[0_12px_40px_-6px_rgb(var(--accent-glow)/0.7)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 ${sizeClasses} ${className}`}
    >
      <Download
        size={15}
        strokeWidth={2.2}
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      />
      Download CV
    </a>
  );
}
