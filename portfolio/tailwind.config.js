/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0a', // Deep Obsidian
        indigo: {
          neon: '#6366f1', // Neon Indigo
        },
        charcoal: {
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        electric: {
          indigo: '#4F46E5', // Electric Indigo (from previous design, keep for now if needed)
        },
        lime: {
          'cyber': '#CCFF00', // Cyber Lime (from previous design, keep for now if needed)
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

