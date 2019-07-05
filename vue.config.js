module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.huanle800.com',
        changeOrigin: true
      }
    }
  }
}