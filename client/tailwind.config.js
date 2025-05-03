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
          purple: '#9b87f5',
          blue: '#87b5f5',
          teal: '#87f5e9',
          gray: '#F1F5F9'
        },
      },
    },
  },
  plugins: [],
}

