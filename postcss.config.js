module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-apply'),
    require('postcss-nested'),
    require('postcss-responsive-type'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': false
      }
    })
  ]
}
