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
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#0C2133',
        purple: {
          900: '#291562',
          800: '#6A27FF',
          700: '#745BC3'
        },
        blue: {
          950: '#0B2C53',
          900: '#174780',
          850: '#42627E',
          750: '#93A3BC',
          550: '#4B7090',
          450: '#3A5E7E',
          400: '#4E709A',
          350: '#68819F',
          300: '#6186B1',
          250: '#C8D8E5',
          200: '#8EA9D5',
          150: '#F2F7FC',
          100: '#FCFDFF',
          50:  '#F7F8FA',
        },
        gray: {
          400: '#6B7788',
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
      boxShadow: {
        xl: '0 3px 90px rgba(0, 0, 0, 0.04)'
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
