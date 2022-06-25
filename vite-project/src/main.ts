import { installDouble } from 'double-vue'
import { createApp } from 'vue'
import App from './App.vue'
installDouble('http://localhost/double', 'vite')
createApp(App).mount('#app')
