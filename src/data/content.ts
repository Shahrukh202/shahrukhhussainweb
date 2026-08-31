import {
  Code2,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  Server,
  Palette,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import business from "../assets/wordpress web.webp";
import Academic from "../assets/academics website.webp";
import shopify1 from "../assets/shopify e-commerce website.webp";
import shopify2 from "../assets/shopify 4.webp";
import schoolweb from "../assets/school webiste.webp";
import wix from "../assets/finance website.webp";
import auto from '../assets/auto trader website.webp';
import shopify3 from '../assets/shopify 3.webp';
import businessword from '../assets/m365 wordpress website.webp';
import businessword1 from '../assets/keystone website.webp';
import security from '../assets/Security website.webp';
import devcoder from '../assets/devcoderweb.webp';
import businessword2 from '../assets/business wordpress website.webp';
export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'react-frontend',
    icon: Code2,
    title: 'React / Frontend Development',
    description: 'Fast, component-driven interfaces built with React.js, JavaScript, TypeScript Bootstarp and Tailwind.',
  },
  {
    id: 'custom-website',
    icon: Globe,
    title: 'Custom Website Development',
    description: 'Tailor-made websites engineered for performance, SEO and scale.',
  },
  {
    id: 'wordpress',
    icon: LayoutTemplate,
    title: 'WordPress Development',
    description: 'Custom themes, plugins and editable WordPress builds.',
  },
  {
    id: 'woocommerce',
    icon: ShoppingCart,
    title: 'WooCommerce Development',
    description: 'Full WooCommerce stores with payments, shipping and inventory.',
  },
  {
    id: 'shopify',
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'Custom Shopify themes and conversion-focused storefronts.',
  },
  {
    id: 'wix',
    icon: LayoutTemplate,
    title: 'Wix Development',
    description: 'Polished Wix sites with custom code and Velo where needed.',
  },
  {
    id: 'ecommerce',
    icon: Server,
    title: 'E-commerce Development',
    description: 'End-to-end online stores that convert and scale reliably.',
  },
  {
    id: 'ui-implementation',
    icon: Palette,
    title: 'Website UI Implementation',
    description: 'Pixel-perfect, responsive builds from your Figma or design files.',
  },
];

export type SkillGroup = {
  id: string;
  label: string;
  icon: LucideIcon;
  skills: { name: string; icon: string }[];
};

// Icon glyphs rendered as inline SVG paths — keeps the bundle light and avoids
// shipping dozens of brand-icon dependencies.
const icon = (path: string) => path;

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', icon: icon('react') },
      { name: 'TypeScript', icon: icon('typescript') },
      { name: 'JavaScript', icon: icon('javascript') },
      { name: 'Tailwind CSS', icon: icon('tailwind') },
      { name: 'Bootstrap CSS', icon: icon('bootstrap') },
      { name: 'HTML', icon: icon('html') },
      { name: 'CSS', icon: icon('css') },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'Express.js', icon: icon('express') },
      { name: 'PostgreSQL', icon: icon('postgresql') },
      { name: 'Supabase', icon: icon('supabase') },
      { name: 'Firebase', icon: icon('firebase') },
    ],
  },
  {
    id: 'cms',
    label: 'CMS',
    icon: LayoutTemplate,
    skills: [
      { name: 'WordPress', icon: icon('wordpress') },
      { name: 'Wix', icon: icon('wix') },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: ShoppingCart,
    skills: [
      { name: 'WooCommerce', icon: icon('woocommerce') },
      { name: 'Shopify', icon: icon('shopify') },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Framer Motion', icon: icon('framer') },
      { name: 'GSAP', icon: icon('gsap') },
      { name: 'Figma', icon: icon('figma') },
      { name: 'Git', icon: icon('git') },
    ],
  },
];

export type TechBadge = { name: string; icon: string };

export const techMarquee: TechBadge[] = [
  { name: 'React', icon: 'react' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Bootstrap CSS', icon: 'bootstrap' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'WooCommerce', icon: 'woocommerce' },
  { name: 'Shopify', icon: 'shopify' },
  { name: 'Wix', icon: 'wix' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'PHP', icon: 'php' },
{ name: 'MySQL', icon: 'mysql' },
{ name: 'Elementor', icon: 'elementor' },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'React' | 'WordPress' | 'Shopify' | 'Wix' | 'E-commerce';
  tags: string[];
  imageQuery: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'business-webiste',
    title: 'Business Website',
    description:
      'A content discovery platform with real-time feeds, search and a slick, app-like interface built in React.',
    category: 'WordPress',
tags: ['WordPress', 'Elementor', 'WooCommerce', 'PHP', 'MySQL'],    
imageQuery: business,
    liveUrl: business,
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'academic-support',
    title: 'Academic Support',
    description:
      'A full-featured e-commerce storefront with cart, checkout and product catalog, optimized for conversion.',
    category: 'React',
        tags: ['React', 'JavaScript', 'Tailwind', 'Framer Motion'],

    imageQuery: Academic,
    liveUrl: Academic,
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'shopify-e-commerce',
    title: 'E-Commerce',
    description:
      'A business finance website with calculators, dashboards and a clean, trust-building corporate design.',
    category: 'Shopify',
    tags: ['Shopify'],
    imageQuery: shopify1,
    liveUrl: 'https://thisisthegreat.com/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'wp-woocommerce',
    title: 'Modern School Webiste',
    description:
      'A WooCommerce-powered store with custom theme, payment gateways and inventory management.',
    category: 'WordPress',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    imageQuery: schoolweb,
    liveUrl: 'https://www.drkishoresratnamschools.com/ ',
    featured: true,
  },
  {
    id: 'shopify-store',
    title: 'Shopify Store',
    description:
      'A custom Shopify theme for a premium fashion brand with editorial layout and fast checkout.',
    category: 'Shopify',
    tags: ['Shopify', 'Liquid'],
    imageQuery: shopify2,
    liveUrl: shopify2,
    featured: true,
  },
  {
    id: 'wix-agency',
    title: 'Finance Business',
    description:
      'A Wix-built agency site with custom Vlo code, animated sections and a portfolio gallery.',
    category: 'Wix',
    tags: ['Wix', 'Velo'],
    imageQuery: wix,
    liveUrl: 'https://www.equipmentfinance-australiawide.com/',
  },
    {
    id: 'auto',
    title: 'Auto Trader',
    description:
      'A full-featured e-commerce storefront with cart, checkout and product catalog, optimized for conversion.',
    category: 'React',
        tags: ['React', 'JavaScript', 'Tailwind', 'Framer Motion', 'Node.js'],

    imageQuery: auto,
    liveUrl: 'https://www.autotrader.co.uk/',
    githubUrl: '#',
    featured: true,
  },

   {
    id: 'm365',
    title: 'M365 Campus',
    description:
      'A WooCommerce-powered store with custom theme, payment gateways and inventory management.',
    category: 'WordPress',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor'],
    imageQuery: businessword,
    liveUrl: businessword,
    featured: true,
  },
  {
    id: 'shopify-e-commerce1',
    title: 'Shopify E-Commerce',
    description:
      'A business finance website with calculators, dashboards and a clean, trust-building corporate design.',
    category: 'Shopify',
    tags: ['Shopify'],
    imageQuery: shopify3,
    liveUrl: 'https://swasabers.com/',
    githubUrl: '#',
    featured: true,
  },
     {
    id: 'dev',
    title: 'Dev Coder Solution',
    description:
      'A full-featured e-commerce storefront with cart, checkout and product catalog, optimized for conversion.',
    category: 'React',
        tags: ['React', 'JavaScript', 'Tailwind', 'Framer Motion', 'Node.js'],

    imageQuery: devcoder,
    liveUrl: 'https://www.devcodersolution.com/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'agency',
    title: 'Agency Website',
    description:
      'A WooCommerce-powered store with custom theme, payment gateways and inventory management.',
    category: 'WordPress',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor'],
    imageQuery: businessword2,
    liveUrl: businessword2,
    featured: true,
  },
   {
    id: 'security',
    title: 'Security Solutions',
    description:
      'A full-featured e-commerce storefront with cart, checkout and product catalog, optimized for conversion.',
    category: 'React',
        tags: ['React', 'JavaScript', 'Bootstrap', 'Framer Motion'],

    imageQuery: security,
    liveUrl: security ,
    githubUrl: '#',
    featured: true,
  },
    {
    id: 'contractor',
    title: 'Contractor Business',
    description:
      'A WooCommerce-powered store with custom theme, payment gateways and inventory management.',
    category: 'WordPress',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Elementor'],
    imageQuery: businessword1,
    liveUrl: 'https://keystoneconcretecontractor.com/',
    featured: true,
  },
];

export const projectCategories = [
  'All',
  'React',
  'WordPress',
  'Shopify',
  'Wix',
] as const;

export type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

export const workflowSteps: WorkflowStep[] = [
  { number: '01', title: 'Discover', description: 'Understand goals, audience and scope before a single line of code.' },
  { number: '02', title: 'Plan', description: 'Map architecture, features and milestones into a clear roadmap.' },
  { number: '03', title: 'Design', description: 'Craft a visual system and UX that feels premium and on-brand.' },
  { number: '04', title: 'Develop', description: 'Build with clean, typed, component-driven code and modern tooling.' },
  { number: '05', title: 'Test', description: 'Cross-device QA, performance and accessibility checks across the board.' },
  { number: '06', title: 'Launch', description: 'Deploy, monitor and hand off with documentation and support.' },
];

export type WhyItem = { title: string; description: string };

export const whyWorkWithMe: WhyItem[] = [
  { title: 'Modern Development', description: 'React, TypeScript and the latest web standards — no legacy bloat.' },
  { title: 'Responsive Design', description: 'Looks and works flawlessly from mobile to ultra-wide desktop.' },
  { title: 'Clean Code', description: 'Typed, documented and maintainable so it grows with your business.' },
  { title: 'Performance-Focused', description: 'Fast load times, optimized assets and smooth 60fps interactions.' },
  { title: 'E-commerce Expertise', description: 'Stores that convert — from cart to checkout to scaling traffic.' },
  { title: 'CMS Flexibility', description: 'WordPress, Shopify or Wix so you can edit content without a developer.' },
  { title: 'Client-Focused Communication', description: 'Clear updates, honest timelines and no surprises.' },
];

export const heroStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: 'Multiple', label: 'Platforms Mastered' },
  { value: '100%', label: 'Responsive Builds' },
  { value: 'Full-Stack', label: 'End-to-End' },
];
