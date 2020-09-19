module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#2D2640',
        'dark-grayish-violet': '#837d87',
        'very-dark-violet': '#2b272f',
        'grayish-blue': '#95a9c6'
      }
    }
  },
  variants: {},
  plugins: []
};
