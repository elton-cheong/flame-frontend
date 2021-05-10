module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  devServer: {
    //port: 8081,
    proxy: 'http://18.138.248.19:8080/'
  },

  //For set or update devtool to debug
  configureWebpack: {
    devtool: 'source-map'
  },

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: true,
      endpoint: 'vpc-0136cd67',
      region: 'ap-southeast-1.s3',
      bucket: 'flame-frontend',
      createBucket: false,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
}
