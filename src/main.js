import './sass/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import cors from 'cors';

const app = createApp(App)

app.use(cors);
app.use(createPinia())
app.use(router)

app.mount('#app')




