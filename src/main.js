import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueGtag from 'vue-gtag'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: { id: 'G-YTE0YGYNEG' }
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
