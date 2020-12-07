module.exports = {
  pwa: {
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    manifestCrossorigin: 'anonymous',
    workboxOptions: {
      swSrc:'./public/manifest.json'
    }
  }
}
