/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9333ea',    // purple-600
          light: '#a855f7',      // purple-500
          dark: '#7e22ce',       // purple-700
          bg: '#faf5ff',         // purple-50
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem',
      }
    },
  },
  plugins: [],
}