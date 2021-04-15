const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      prompt: ['Prompt', 'sans-serif'],
    },
    colors: {
      ...defaultTheme.colors,
      background: 'rgb(31, 31, 71)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = Object.keys(defaultTheme.spacing)
        .filter((key) => key === 'px' || (key >= 1 && key % 1 === 0))
        .reduce(
          (temp, key) => ({
            ...temp,
            [`.square-${key}`]: {
              width: defaultTheme.spacing[key],
              height: defaultTheme.spacing[key],
            },
          }),
          {},
        )

      addUtilities(utilities)
    }),
  ],
}
