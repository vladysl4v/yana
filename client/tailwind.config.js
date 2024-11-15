/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#111316',
        'dark-light': '#181b1f'
      },
    },
  },
  plugins: [],
}
