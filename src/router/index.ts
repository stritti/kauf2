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
    component: () => import('../views/Products.vue')
  },
  {
    path: '/supporter',
    component: () => import('../views/Supporter.vue')
  },
  {
    path: '/supporter/request',
    component: () => import('../views/SupporterRequest.vue')
  },
  {
    path: '/supporter/:supporterId/poster',
    props: true,
    component: () => import('../views/SupporterPosterView.vue')
  },
  {
    path: '/kontakt',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/impressum',
    component: () => import('../views/Imprint.vue')
  },
  {
    path: '/privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/presse',
    component: () => import('../views/PressView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ?? { left: 0, top: 0 }
  },
  routes
})

export default router