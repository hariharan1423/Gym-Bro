/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        moonDance : ["Moon Dance", 'cursive'],
        sans:[ 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
        work:["Work Sans", 'sans-serif'],
        cursive:['Dancing Script', 'cursive'],
        rampart:['Rampart One', 'cursive'],
        serif:['Cormorant Garamond', 'serif'],
      }
      ,
      colors:{
        plum:'#2c0a3f',
        PinkFlamingo : '#d2b0d7'
      },
      aspectRatio:{
        '3/4':'3/4'
      },
      width:{
        '500':'500px',
        '540':'540px',
        '900':'900px',
        '400':'400px',
        '300':'300px',
        '100':'100%',
        '80':'80%',
        '95':'95%',
        '20':'20%'
      },
      height:{
        '800':'800px',
        '700':'700px',
        '600':'600px',
        '500':'500px',
        '250':'250px',
        '330':'330px',
        '300':'300px',
        '200':'200px',      }

    },
  },
  plugins: [],
}
