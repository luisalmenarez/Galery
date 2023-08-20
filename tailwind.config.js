/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      Tilt: ["Tilt Prism", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      screens: {
        lt: "300px",
      },
      width: {
        95: "95%",
      },
      boxShadow: {
        custom: "0 10px 15px -3px rgba(255, 255, 255, 0.2), 0 4px 6px -4px rgba(255, 255, 255, 0.2);",
      },
    },
  },
  plugins: [],
};
