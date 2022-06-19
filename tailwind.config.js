module.exports = {
  mode: 'jit',
  purge: [
    './pages/*.{js,vue}',
  ],
  content: [
    './pages/*.{js,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
