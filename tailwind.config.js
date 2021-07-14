module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/1': '100%',
        '2/3': '66.666667%'
      },
      colors: {
        background: '#F9EBDF',
        title: '#331B18',
        water: '#CBE4F9'
      },
      fontFamily: {
        all: ['Bona Nova']
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
