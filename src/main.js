import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueGtag from 'vue-gtag-next'
import App from './App.vue'
import router from './router'

// Import custom SCSS variables and Bootstrap (this includes custom theme)
import '@/assets/scss/custom-vars.scss'
// Import BootstrapVueNext
import { createBootstrap } from 'bootstrap-vue-next'

// Import only the components we use for better performance
import {
  BAlert,
  BButton,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
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

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(createBootstrap())

// Register all components globally
const components = {
  BAlert,
  BButton,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
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

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.use(VueGtag, {
  property: { id: 'G-YTE0YGYNEG' }
}, router)

app.mount('#app')
