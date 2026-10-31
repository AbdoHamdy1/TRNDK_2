/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/dev/**/*.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121316',
          card: '#1A1C20',
        },
        primary: {
          DEFAULT: '#D93438',
          hover: '#B8282C',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
