/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors:{
      "body":"#17171f",
      "selected-text":"#A3A3ff",
      "theme":"3F3fff",
      "nav":"#404053",
      "secondary":"9191a4",
      "badge":"3f3f51",
      "input-border":"#565666",
      "input":"#2a2a35",
    },
    fontFamily:{
      'poppins':["'Poppins'",'sans-serif']
    }
    },
  },
  variants:{
    extend: {
    display: ['group-focus'],
    opacity: ['group-focus'],
    inset: ['group-focus']
  },},
  plugins: [],
}

