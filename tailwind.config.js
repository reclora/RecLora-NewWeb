/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'reclora-dark': '#0a0a0a',
        'reclora-blue': '#4a90e2',
        'reclora-pink': '#e62c7e',
        'reclora-purple': '#9b59b6',
      },
    },
  },
  plugins: [],
}
