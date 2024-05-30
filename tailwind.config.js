/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        comeup:{
          '0%':{opacity:'0.75'},
          '50%':{opactiy:'1'},
          '100%':{opactiy:"0"}
        },
      },
      animation:{
        comeup:'comeup 3s ease-in-out  1'
      }
    },
  },
  plugins: [],
}

