import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MdiSvg from '@yeliulee/vue-mdi-svg/v3'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MdiSvg)
app.use(createPinia())
app.use(router)

app.mount('#app')