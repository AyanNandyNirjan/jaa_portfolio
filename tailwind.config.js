/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        hud: '0.18em',
      },
      boxShadow: {
        redglow: '0 0 40px rgba(255, 42, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
