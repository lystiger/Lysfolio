/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0a0a0a', // Deep Obsidian
          light: '#1a1a1a',
          dark: '#050505',
          'extra-light': '#2a2a2a',
          'extra-dark': '#000000',
        },
        indigo: {
          neon: '#6366f1', // Neon Indigo
        },
        charcoal: { // Keep existing charcoal shades for potential use
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        electric: { // Keep existing electric indigo for potential use
          indigo: '#4F46E5',
        },
        lime: { // Keep existing cyber lime for potential use
          'cyber': '#CCFF00',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Bold Sans-Serif for headers
        mono: ['Roboto Mono', 'monospace'], // Mono font for technical details
      },
    },
  },
  plugins: [],
}

