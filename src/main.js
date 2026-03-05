import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag-next'
import App from './App.vue'
import router from './router'

// Import custom SCSS variables and Bootstrap (this includes custom theme)
import '@/assets/scss/custom-vars.scss'
// Import BootstrapVueNext
import { createBootstrap } from 'bootstrap-vue-next'
import * as Components from 'bootstrap-vue-next'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(createBootstrap())

// Register all BootstrapVueNext components globally
for (const componentName in Components) {
  const component = Components[componentName]
  if (component && typeof component === 'object' && component.__name) {
    app.component(componentName, component)
  }
}

app.use(VueGtag, {
  property: { id: 'G-YTE0YGYNEG' }
})

app.mount('#app')
