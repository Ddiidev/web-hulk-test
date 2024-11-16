module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'sml': {'min': '300px', 'max': '500px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
