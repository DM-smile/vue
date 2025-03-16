import '@/assets/styles/reset.scss'
import '@/assets/styles/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainLayout from './layouts/MainLayout.vue'

const app = createApp(App)
app.component('MainLayout', MainLayout)
app.use(store)
app.use(router)
app.mount('#app')
