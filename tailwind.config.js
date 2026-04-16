/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C4A46B', light: '#D8C4A8', dark: '#9A7A48' },
        dark: { DEFAULT: '#1A1A1A', 800: '#222222', 700: '#2C2C2C', 600: '#3A3A3A' },
        ivory: '#F5F3F0',
        stone: '#E0DDD8',
        muted: '#8A8886',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
