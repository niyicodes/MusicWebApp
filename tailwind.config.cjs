/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  screens: {
   sm: "280px",
   md: "576px",
   lg: "1024px",
  },
  colors: {
   bgColor: "#1E1E1E",
   iconFill: "#B6B6B4",
   activeColor: "#FACD66",
   lcColor: "#1A1E1F",
   border: "#FACD66",
   circleColor: "#FFFFFF",
   bigCard: "#609EAF",
   textFill: "white",
   altFill: "#A4C7C6",
   alt2Fill: "#E5524A",
  },
  fontFamily: {
   quickSand: ["Quicksand"],
  },
  extend: {},
 },
 plugins: [],
};
