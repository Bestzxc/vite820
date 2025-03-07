/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: '#0D0D0D',
        primaryContent: '#262626',
        primarySubcontent: '#262626',
        primaryBase: '#737373',
        primaryAccent: '#262626',
        primaryBG: '#BFBFBF',
        
      },
    },
  },
  plugins: [],
}

