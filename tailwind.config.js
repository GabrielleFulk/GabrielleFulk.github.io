module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/1': '100%',
        '2/3': '66.666667%',
      },
      height: {
        'headshot': '24 rem',
        '128': '32rem',
      },
      colors: {
        background: '#F9EBDF',
        title: '#331B18',
        water: '#CBE4F9',
        silverPink: '#C9ADA1',
        artichoke: '#A0A083',
        xanadu: '#798478',
        deepSpaceSparkle: '#4D6A6D',
      },
      fontFamily: {
        all: ['Bona Nova'],
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
