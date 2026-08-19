import { createApp, type App as VueApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag-next'
import { createBootstrap } from 'bootstrap-vue-next'
import type { Router } from 'vue-router'
import App from './App.vue'
import router from './router'

// Import only the BootstrapVueNext components we use for better performance
import {
  BAlert,
  BButton,
  BCard,
  BCardGroup,
  BCardImg,
  BCardText,
  BCol,
  BCollapse,
  BContainer,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BImg,
  BNavItem,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BRow,
  BSpinner
} from 'bootstrap-vue-next'

// Import custom SCSS variables and Bootstrap (this includes custom theme)
import '@/assets/scss/custom-vars.scss'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

// createBootstrap sets up internal registries (modals, dropdowns, etc.) but
// does NOT register the B* components, so register the ones we use explicitly.
app.use(createBootstrap())

const components = {
  BAlert,
  BButton,
  BCard,
  BCardGroup,
  BCardImg,
  BCardText,
  BCol,
  BCollapse,
  BContainer,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BImg,
  BNavItem,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BRow,
  BSpinner
}

for (const [name, component] of Object.entries(components)) {
  app.component(name, component)
}

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