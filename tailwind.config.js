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
        black: '#0C2133',
        purple: {
          900: '#291562',
          800: '#6A27FF'
        },
        blue: {
          900: '#174780',
          400: '#4E709A',
          300: '#6186B1',
          200: '#8EA9D5',
          100: '#F5F8FC'
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'sfpro': ['SF Pro Display'],
        'gilroy': ['Gilroy']
      },
      fontSize: {
        '1-375': '1.375rem',
        '1-75': '1.75rem',
        '2': '2rem',
        '2-5': '2.5rem',
        '2-75': '2.75rem',
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1240px"
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
