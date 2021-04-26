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
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1350px",
          xl: "1400px"
        },
        center: true,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
