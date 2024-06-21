/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', 
        slideInRight: 'slideInRight 0.10s ease-in-out', 
      },
    },
  },
  plugins: [],
}
