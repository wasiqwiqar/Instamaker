// ./tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // don't purge text-align
  purge: {
    options: {
      safelist: ['text-left', 'text-center', 'text-right'],
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}