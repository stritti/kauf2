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

const scrollBehavior = function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})

export default router
