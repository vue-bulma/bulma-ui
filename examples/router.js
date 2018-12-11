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
    },
    {
      path: '/elements/content',
      name: 'Content',
      component: () => import('./components/elements/Content')
    },
    {
      path: '/elements/delete',
      name: 'Delete',
      component: () => import('./components/elements/Delete')
    },
    {
      path: '/elements/icon',
      name: 'Icon',
      component: () => import('./components/elements/Icon')
    }
  ]
})
