const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Space Mono', ...fontFamily.mono]
      },
      colors: {
        'primary': "#0B2447",
        'secondary': "#0b2757"
      }
    },
  },
  plugins: [],
}