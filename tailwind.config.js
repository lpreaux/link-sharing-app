/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#633CFF',
        'purple-hover': '#BEADFF',
        'purple-light': '#EFEBFF',
        'dark-grey': '#333333',
        'grey': '#737373',
        'borders': '#D9D9D9',
        'light-grey': '#FAFAFA',
        'white': '#FFFFFF',
        'red': '#FF3939',
      }
    },
  },
  plugins: [],
}

