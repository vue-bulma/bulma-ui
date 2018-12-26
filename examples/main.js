import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'font-awesome/css/font-awesome.css'

// vue-bulma-component
import VueBulma from '../src'
Vue.use(VueBulma)

import SiteComponents from './components/site'
Vue.use(SiteComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
