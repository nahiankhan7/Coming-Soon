/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/home.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        space: "4px",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
