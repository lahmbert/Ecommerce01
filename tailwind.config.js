/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        webPrimary: {
          DEFAULT: '#FF8000',
          dark: '#CC6600',
        },
        webSecondary: {
          DEFAULT: '#4C1F7A',
        },
        webAccent: {
          light: '#FCFFC1',
          DEFAULT: '#219B9D',
        },
      },
    },
  },
  plugins: [],
};
