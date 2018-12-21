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
      path: '/elements/progress',
      name: 'ProgressBar',
      component: () => import('./components/elements/Progress')
    },
    {
      path: '/elements/table',
      name: 'Table',
      component: () => import('./components/elements/Table')
    },
    {
      path: '/elements/tag',
      name: 'Tag',
      component: () => import('./components/elements/Tag')
    },
    {
      path: '/elements/title',
      name: 'Title',
      component: () => import('./components/elements/Title')
    },
    {
      path: '/columns/column',
      name: 'Column',
      component: () => import('./components/columns/Column')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('./components/form/form/index')
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
    },
    {
      path: '/form/checkbox',
      name: 'Checkbox',
      component: () => import('./components/form/Checkbox')
    },
    {
      path: '/form/radio',
      name: 'Radio',
      component: () => import('./components/form/Radio')
    },
    {
      path: '/form/file',
      name: 'File',
      component: () => import('./components/form/File')
    },
    {
      path: '/components/breadcrumb',
      name: 'Breadcrumb',
      component: () => import('./components/components/Breadcrumb')
    },
    {
      path: '/layout/container',
      name: 'Container',
      component: () => import('./components/layout/Container')
    },
    {
      path: '/layout/level',
      name: 'Level',
      component: () => import('./components/layout/Level')
    },
    {
      path: '/layout/media',
      name: 'Media',
      component: () => import('./components/layout/Media')
    },
    {
      path: '/layout/hero',
      name: 'Hero',
      component: () => import('./components/layout/Hero')
    },
    {
      path: '/layout/section',
      name: 'Section',
      component: () => import('./components/layout/Section')
    },
    {
      path: '/layout/footer',
      name: 'Footer',
      component: () => import('./components/layout/Footer')
    },
    {
      path: '/layout/tile',
      name: 'Tile',
      component: () => import('./components/layout/tile/index')
    },
    {
      path: '/components/card',
      name: 'Card',
      component: () => import('./components/components/Card')
    },
    {
      path: '/components/menu',
      name: 'Menu',
      component: () => import('./components/components/Menu')
    },
    {
      path: '/components/message',
      name: 'Message',
      component: () => import('./components/components/Message')
    },
    {
      path: '/components/pagination',
      name: 'Pagination',
      component: () => import('./components/components/Pagination')
    },
    {
      path: '/components/tabs',
      name: 'Tabs',
      component: () => import('./components/components/Tabs')
    },
    {
      path: '/components/modal',
      name: 'Modal',
      component: () => import('./components/components/Modal')
    }
  ]
})
