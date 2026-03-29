/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0c2340",
          800: "#132c4a",
          700: "#1a3654",
          600: "#1f3f5e",
        },
        pinstripe: "#e4e4e4",
      },
      fontFamily: {
        display: ['"Oswald"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
