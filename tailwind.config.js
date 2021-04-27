module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  purge: [],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#291562',
          800: '#6A27FF'
        },
        blue: {
          900: '#174780',
          300: '#6186B1',
          200: '#8EA9D5',
          100: '#F5F8FC'
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'sfpro': ['SF Pro Display']
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "2100px",
          xl: "2140px"
        },
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2rem'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
