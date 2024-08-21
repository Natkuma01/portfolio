module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#F4DADA',
        secondary : '#BEEBE9',
        accents : '#FFB6B9',
        neutral : '#F6EEC7',
        header : '#e3b836',
      },
      fontFamily: {
        sans: ['Mukta', 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
}