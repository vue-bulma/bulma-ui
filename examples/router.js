import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/elements/box',
      name: 'Box',
      component: () => import('./components/elements/Box')
    },
    {
      path: '/elements/button',
      name: 'Button',
      component: () => import('./components/elements/Button')
    }
  ]
})
