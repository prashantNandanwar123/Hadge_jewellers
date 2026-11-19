/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — maroon + champagne gold, matched to the black/gold logo badge
        maroon: { 950: '#240610', 900: '#310A12', 800: '#4A101C', 700: '#6A1626', 600: '#85202F' },
        gold: { 200: '#F0E3BE', 300: '#E5D2A3', 400: '#D8B97A', 500: '#C9A45C', 600: '#9E7B2E', 700: '#7A5D20' },
        ivory: '#FAF7F0',
        cream: '#F2EBDD',
        beige: '#E9DCC3',
        ink: '#282322',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        brand: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: { luxe: '0.04em' },
    },
  },
  plugins: [],
};
