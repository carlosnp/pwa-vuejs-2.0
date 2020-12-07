module.exports = {
  pwa: {
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    manifestCrossorigin: 'anonymous',
    manifestPath:'./public/manifest.json',
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/dist/'
  : '/'
}
