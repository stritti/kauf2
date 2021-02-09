import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/produkte',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/supporter',
    name: 'Supporter',
    component: () => import(/* webpackChunkName: "supporter" */ '../views/Supporter.vue')
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/impressum',
    name: 'Imprint',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
