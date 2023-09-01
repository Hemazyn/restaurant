/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Reference the fadeIn animation from your CSS file
        slideInRight: 'slideInRight 0.10s ease-in-out', // Reference the slideInRight animation from your CSS file
      },
    },
  },
  plugins: [],
}
