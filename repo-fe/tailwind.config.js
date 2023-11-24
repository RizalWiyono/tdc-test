/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(92deg, rgba(101, 194, 200, 0.50) 30.03%, rgba(37, 44, 179, 0.50) 54.8%, rgba(216, 43, 132, 0.50) 79.06%)',
      },
    },
  },
  plugins: [],
}