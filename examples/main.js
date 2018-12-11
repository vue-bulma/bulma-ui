import Vue from 'vue'
import App from './App.vue'
import VueBulma from '../src'
import router from './router'

// vue-bulma-component
Vue.use(VueBulma)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
