/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      fontFamily: {
        jost: ["Carme", "sans-serif"],
      },
    },
  },
  plugins: [],
};
