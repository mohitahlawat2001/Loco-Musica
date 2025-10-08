/** @type {import('tailwindcss').Config} */
module.exports = {
  // THIS IS THE LINE THAT WAS MISSING
  darkMode: 'class',

  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}