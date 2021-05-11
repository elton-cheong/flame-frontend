module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  devServer: {
    //port: 8081,
    proxy: '80http://18.138.248.19:80/'
  },

  //For set or update devtool to debug
  configureWebpack: {
    devtool: 'source-map'
  },

  transpileDependencies: [
    'vuetify'
  ],
}
