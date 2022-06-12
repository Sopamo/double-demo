import { createApp } from 'vue'
import App from './App.vue'
import { installDouble } from 'double-vue'

installDouble('http://localhost/double', 'webpack')

createApp(App).mount('#app')
