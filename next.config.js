const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  withOffline,
  withCSS
], {
  target: 'serverless',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst'
      },
      {
        urlPattern: /\.(jpe?g|png|gif|svg)$/i,
        handler: 'cacheFirst'
      }
    ]
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[hash:base64:5]'
  }
})
