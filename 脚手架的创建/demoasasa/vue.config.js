module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://oa.wuwei.kooboo.site'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views",
        "utils": "@/utils",
      }
    }
  }
}
