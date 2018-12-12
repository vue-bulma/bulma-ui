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
    },
    {
      path: '/elements/image',
      name: 'Image',
      component: () => import('./components/elements/Image')
    },
    {
      path: '/elements/notification',
      name: 'Notification',
      component: () => import('./components/elements/Notification')
    },
    {
      path: '/elements/Progress',
      name: 'ProgressBar',
      component: () => import('./components/elements/Progress')
    },
    {
      path: '/form/input',
      name: 'Input',
      component: () => import('./components/form/Input')
    },
    {
      path: '/form/textarea',
      name: 'Textarea',
      component: () => import('./components/form/Textarea')
    },
    {
      path: '/form/select',
      name: 'Select',
      component: () => import('./components/form/Select')
    }
  ]
})
