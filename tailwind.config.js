/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "defaultBlack": "#000000",
        "DefaultGray": "#4b5563",
        "DefaultHoverGray": "#1F1F1F"
      }
    },
  },
  plugins: [],
}