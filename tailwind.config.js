const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        ...defaultTheme.screens,
      },
      colors: {
        "primary": "#8B07A6",
        "secondary": "#B9FF2E",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        title: ["Inter", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
        condensed: ["Barlow Semi Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}
