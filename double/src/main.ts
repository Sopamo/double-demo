import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { installDouble } from 'double-vue'

installDouble('http://localhost/double', 'webpack')

createApp(App).use(createPinia()).mount('#app')
