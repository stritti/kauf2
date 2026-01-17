import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag-next'
import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(createBootstrap())
app.use(VueGtag, {
  property: { id: 'G-YTE0YGYNEG' }
})

app.mount('#app')
