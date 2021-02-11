import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'UA-327996-15' }
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
