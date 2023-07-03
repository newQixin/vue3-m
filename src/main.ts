import { createApp } from 'vue'
import './style.css'
import '@/assets/variable.less'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
