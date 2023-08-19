/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      Tilt: ["Tilt Prism", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      width: {
        95: "95%",
      },
    },
  },
  plugins: [],
};
