/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        'nunito-light': 300,
        'nunito-normal': 400,
        'nunito-medium': 500,
        'nunito-semibold': 600,
        'nunito-bold': 700,
        'nunito-extrabold': 800,
      },
    },
    },
  plugins: [],
}

