/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sant-serif'],
      },
      maxWidth: {
        maxWidth: '868px',
      },
      colors: {
        primaryActive: '#00A5FF',
        primary: '#89D1F8',
        secondary: '#DDF3FF',
        oldPrice: '#B8B8B8',
      },
    },
  },
  plugins: [],
}
