module.exports = {
  purge:["./src/**/*.html","./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./index.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        veryLightBlue: '#c9e5ee',
        lightblue: '#bcd4e6',
        anotherGreen: '#384448',
        lightBrown: '#e3ccb0',
      },
      fontFamily:{
        Days_One:['Days One', 'sans-serif']
      },
    },
  },
  plugins: [],
}
