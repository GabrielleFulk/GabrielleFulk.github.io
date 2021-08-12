module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '500-px': '500px'
    },
    extend: {
      spacing: {
        '1/1': '100%',
        '2/3': '66.666667%',
      },
      colors: {
        background: '#F9EBDF',
        textColor: '#331B18',
        water: '#CBE4F9',
        silverPink: '#C9ADA1',
        artichoke: '#A0A083',
        xanadu: '#798478',
        deepSpaceSparkle: '#4D6A6D',
      },
      fontFamily: {
        spectral: ['Spectral'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
