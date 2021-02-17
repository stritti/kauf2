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
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/supporter',
    component: () => import(/* webpackChunkName: "supporter" */ '../views/Supporter.vue')
  },
  {
    path: '/supporter/request',
    component: () => import(/* webpackChunkName: "supporter" */ '../views/SupporterRequest.vue')
  },
  {
    path: '/kontakt',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/impessum',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
  },
  {
    path: '/privacy',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/Privacy.vue')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
