import { createApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css"
import "./assets/main.scss"
import router from './router'
import { createPinia } from 'pinia'

import PageTitle from './components/PageTitle.vue'
import vCard from './components/vCard.vue'

const app = createApp(App)
  .use(router)
  .use(createPinia())

app.component('PageTitle', PageTitle)
app.component('vCard', vCard)



app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
