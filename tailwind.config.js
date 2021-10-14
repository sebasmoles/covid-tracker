module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
       center: true,
       padding: '4rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
