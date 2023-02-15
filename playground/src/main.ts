import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const router = createRouter({
   history: createWebHashHistory(),
   routes
})
 const pinia = createPinia();
app.use(router)
app.use(pinia)
app.mount('#app')
