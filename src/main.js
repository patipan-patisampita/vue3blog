import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

//Tailwind css
import './styles/tailwind.css'

const app = createApp(App).use(router)
app.mount('#app')
