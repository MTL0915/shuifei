const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // proxy: 'https://iot.joinken.cn/'
    proxy: "http://iot.e-jiankun.com/",
  }
});
