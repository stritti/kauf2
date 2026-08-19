import { createApp, type App as VueApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag-next'
import { createBootstrap } from 'bootstrap-vue-next'
import type { Router } from 'vue-router'
import App from './App.vue'
import router from './router'

// Import custom SCSS variables and Bootstrap (this includes custom theme)
import '@/assets/scss/custom-vars.scss'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
// createBootstrap registers all BootstrapVueNext components globally
app.use(createBootstrap())

// vue-gtag-next ships a Vue 2-era type that omits the router parameter;
// the runtime plugin accepts (app, options, router) for pageview tracking.
type GtagPlugin = {
  install: (app: VueApp, options: { property: { id: string } }, router: Router) => void
}

app.use(
  VueGtag as unknown as GtagPlugin,
  {
    property: { id: import.meta.env.VITE_GTAG_ID }
  },
  router
)

app.mount('#app')