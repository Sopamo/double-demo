const { defineConfig } = require('@vue/cli-service')
const { doubleWebpackPlugin } = require('double-vue/server')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        doubleWebpackPlugin()
    ]
  }
})
