/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:     '#1a1a1a',
        paper:   '#f7f5f0',
        accent:  '#b5451b',
        'accent-light': '#e8c4b3',
        muted:   '#4a4a4a',
        faint:   '#888',
      },
      fontFamily: {
        serif:  ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans:   ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono:   ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp .7s ease forwards',
        'fade-in':    'fadeIn .5s ease forwards',
        'slide-left': 'slideLeft .8s ease forwards',
        'pulse-dot':  'pulseDot 2s ease infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity:0, transform:'translateY(24px)' }, to: { opacity:1, transform:'translateY(0)' } },
        fadeIn:    { from: { opacity:0 }, to: { opacity:1 } },
        slideLeft: { from: { opacity:0, transform:'translateX(-30px)' }, to: { opacity:1, transform:'translateX(0)' } },
        pulseDot:  { '0%,100%': { opacity:.4, transform:'scale(1)' }, '50%': { opacity:1, transform:'scale(1.3)' } },
      },
    },
  },
  plugins: [],
};
