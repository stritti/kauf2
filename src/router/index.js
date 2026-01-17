import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/supporter/:supporterId/poster',
    props: true,
    component: () => import(/* webpackChunkName: "supporter" */ '../views/SupporterPosterView.vue')
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
    path: '/presse',
    component: () => import(/* webpackChunkName: "press" */ '../views/PressView.vue')
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "imprint" */ '../views/About.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
  routes
})

export default router
