import Vue from 'vue'
import App from './App.vue'
import Vb from '../src'

// vue-bulma-component
Vue.use(Vb)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
