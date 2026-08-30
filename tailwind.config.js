/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — Green
        accent: {
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce9a6',
          400: '#32d583',
          500: '#069f53',
          600: '#05b960',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Secondary — Silver
        silver: {
          50: '#f6f7f8',
          100: '#ebedef',
          200: '#d8dadd',
          300: '#c4c7cc',
          400: '#a8acb3',
          500: '#8b9098',
          600: '#6f747c',
          700: '#565a61',
          800: '#3e4146',
          900: '#27292d',
        },
        // Neutral ramp
        ink: {
          50: '#f5f6f2',
          100: '#ebede8',
          200: '#d8dadd',
          300: '#c4c7cc',
          400: '#8b9098',
          500: '#6f747c',
          600: '#565a61',
          700: '#3e4146',
          800: '#27292d',
          900: '#151718',
          950: '#090a0a',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-rev': 'marquee-rev 40s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
