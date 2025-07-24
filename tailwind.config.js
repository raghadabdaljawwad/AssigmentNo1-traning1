/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-slide': "url('./images/slide1.jpg')",
      },
    },
  },
  plugins: [],
}

