/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '280px',
      'md': '576px',
      'lg': '1024px',

    },
    extend: {},
  },
  plugins: [],
}
