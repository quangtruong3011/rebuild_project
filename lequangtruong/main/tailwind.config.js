/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
    plugin(function({ addBase, config }) {
      addBase({
        'body': {
          fontFamily: ['Jost', 'sans-serif'],
        },
      })
    }),
  ],
}


