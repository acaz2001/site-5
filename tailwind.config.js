module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        '2xl': '1536px',       // default
        '3xl': '1980px',       // custom breakpoint za veće ekrane
        '4xl': '2096px',        // još veći ekran
        'xs': '360px'
      },
      extend: {

        fontFamily: {
          sans: ['var(--font-inter)']
        }
      },
    plugins: []
    },
    variants: {
      extend: {},
    }
  }