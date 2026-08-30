/**
 * Centralized site configuration.
 * Replace these values with your own contact details and links.
 */
export const siteConfig = {
  name: 'Shahrukh Hussain',
  role: 'Web Developer',
  fullName: 'Shahrukh Hussain',
  // Replace with your real email address.
  email: 'sharukhjayker@gmail.com',
  location: 'WORLDWIDE',
  availability: 'AVAILABLE FOR NEW PROJECTS',
  // Replace with your real social/profile URLs.
 socials: {
  github: 'https://github.com/Shahrukh202',
  linkedin: 'https://www.linkedin.com/in/shahrukhhussaindev',
  twitter: 'https://x.com/sharukhjayker',
  facebook: 'https://www.facebook.com/shahrukhhussaindev/',
  instagram: 'https://www.instagram.com/shahrukhhussaindev',
},
  // Canonical site URL (used for SEO tags).
  url: 'https://shahrukhhussain.vercel.app/',
  // Path to the downloadable CV PDF (served from the public/ folder).
  cvPath: '/Shahrukh-Hussain-CV.pdf',
} as const;

export type SiteConfig = typeof siteConfig;
