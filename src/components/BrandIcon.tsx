import type { SVGProps } from 'react';
import {
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siBootstrap,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siSupabase,
  siFirebase,
  siWordpress,
  siWoocommerce,
  siShopify,
  siWix,
  siHtml5,
  siCss,
  siFramer,
  siGreensock,
  // siThreedotjs,
  siFigma,
  siGit,
  siPhp,
  siMysql,
  siElementor,
} from 'simple-icons';

type IconProps = SVGProps<SVGSVGElement> & {
  name: string;
};

const icons: Record<string, any> = {
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwind: siTailwindcss,
  bootstrap: siBootstrap,
  nodejs: siNodedotjs,
  express: siExpress,
  postgresql: siPostgresql,
  supabase: siSupabase,
  firebase: siFirebase,
  wordpress: siWordpress,
  woocommerce: siWoocommerce,
  shopify: siShopify,
  wix: siWix,
  html: siHtml5,
  css: siCss,
  framer: siFramer,
  gsap: siGreensock,
  // threejs: siThreedotjs,
  figma: siFigma,
  git: siGit,
  php: siPhp,
  mysql: siMysql,
  elementor: siElementor,
};

export function BrandIcon({ name, ...props }: IconProps) {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
}