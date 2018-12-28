<script>
import Vue from 'vue'

import { addClass } from '@/utils'

export default Vue.component('VbTile', {
  props: {
    vertical: Boolean,
    size: {
      type: [Number, String],
      validator(value) {
        return +value >= 1 && +value <= 12
      }
    }
  },
  computed: {
    isAncestor() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbTile') {
        parent = parent.$parent
      }
      return !parent
    }
  },
  render(createElement) {
    const { vertical, isAncestor, size } = this
    const { default: nodes = [] } = this.$slots
    const children = nodes.map(vnode => {
      if (!this.isChild(vnode)) return vnode

      addClass(vnode, 'tile is-child')
      return createElement('div', { class: 'tile is-parent' }, [vnode])
    })

    const classes = {
      class: {
        tile: true,
        'is-ancestor': isAncestor,
        'is-vertical': vertical,
        [`is-${size}`]: !!size
      }
    }

    return createElement('div', classes, children)
  },
  methods: {
    isChild(vnode) {
      if (!vnode || !vnode.componentOptions) return

      const { tag } = vnode.componentOptions
      return !tag || tag !== 'vb-tile'
    }
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/grid/tiles.sass';
</style>
