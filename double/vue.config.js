const { defineConfig } = require('@vue/cli-service')
const { doubleWebpackPlugin } = require('double-vue/server')
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': path.resolve(__dirname, 'node_modules/vue'), // This resolve alias is not necessary for normal usage. You only need it if you are actively developing double itself.
        'pinia$': path.resolve(__dirname, 'node_modules/pinia'), // This resolve alias is not necessary for normal usage. You only need it if you are actively developing double itself.
      },
    },
    plugins: [
        doubleWebpackPlugin()
    ]
  }
})
