import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { doubleVitePlugin } from 'double-vue/bundler'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        extensions: ['.php', '.js', '.ts'],
    },
  plugins: [vue(), doubleVitePlugin()]
})
