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
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightblue: '#add8e6',
        anotherGreen: '#384448',
      },
      fontFamily:{
        Days_One:['Days One', 'sans-serif']
      },
    },
  },
  plugins: [],
}
