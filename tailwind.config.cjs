/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgDark: "hsl(217, 19%, 24%)",
        fgDark: "hsl(217, 19%, 38%)",
        shadow: "hsl(218, 23%, 16%)",
        accentCyan: "hsl(193, 38%, 86%)",
        accentGreen: "hsl(150, 100%, 66%)",
      },
      screens: {
        xs: "375px",
        md: "768px",
        xl: "1440px",
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
