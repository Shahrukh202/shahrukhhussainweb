/**
 * Maps a human-readable technology name to a BrandIcon key.
 * Keeps call sites clean — pass the display name, get the right glyph.
 */
const ALIASES: Record<string, string> = {
  'react.js': 'react',
  'react': 'react',
  // 'next.js': 'nextjs',
  'node.js': 'nodejs',
  'express.js': 'express',
  'tailwind css': 'tailwind',
  'typescript': 'typescript',
  'javascript': 'javascript',
  'wordpress': 'wordpress',
  'woocommerce': 'woocommerce',
  'shopify': 'shopify',
  'wix': 'wix',
  'html': 'html',
  'css': 'css',
  'postgresql': 'postgresql',
  'supabase': 'supabase',
  'firebase': 'firebase',
  'framer motion': 'framer',
  'gsap': 'gsap',
  'three.js': 'threejs',
  'figma': 'figma',
  'git': 'git',
   'php': 'php',
    'mysql': 'mysql',
    'elementor': 'elementor',
};

export function techIconKey(name: string): string {
  const key = name.toLowerCase().trim();
  return ALIASES[key] ?? key.replace(/[^a-z]/g, '');
}
