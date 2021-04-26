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
          lg: "1500px",
          xl: "2140px"
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
