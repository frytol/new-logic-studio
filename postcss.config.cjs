module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nesting'),
      require('postcss-custom-media'),
      require('@tailwindcss/postcss'),
      require('autoprefixer')
    ]
}