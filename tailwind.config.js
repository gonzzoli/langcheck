const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'orange': '#FFB763',
        'light-orange': '#FFE49E'
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite'
      }
    },
    screens: {
      xl: {max: '1100px'},
      lg: {max: '1023px'},
      md: {max: '950px'},
      mdsm: {max: '764px'},
      sm: {max: '550px'},
      xs: {max: '400px'}
    }
  },
  plugins: [],
}