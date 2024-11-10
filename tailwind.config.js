/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],  theme: {
    extend: {
      colors: {
        udemy: {
          'dark': '#1c1d1f',
          'light': '#2d2f31',
          'purple': {
            DEFAULT: '#a435f0',
            'hover': '#8710d8'
          },
          'link': {
            DEFAULT: '#5624d0',
            'hover': '#401b9c'
          }
        },
        'dark-lighter': '#2D2F31',
      }
    },
  },
  plugins: [],
}

