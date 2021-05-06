module.exports = {
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
  ]
}
