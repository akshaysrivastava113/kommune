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
          dark: '#0369a1',
          DEFAULT: '#9B87F5',
          primary: '#9B87F5',
          light: '#C3B8FA',
          gray: '#F1F5F9'
        },
      },
    },
  },
  plugins: [],
}

