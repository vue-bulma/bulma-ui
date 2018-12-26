<script>
import Vue from 'vue'

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
  mounted() {
    if (this.$slots.default) {
      this.$slots.default.forEach(vnode => {
        const { elm } = vnode
        if (this.isContent(vnode) && elm && elm.classList) {
          elm.classList.add('tile')
          elm.classList.add('is-child')
        }
      })
    }
  },
  render(createElement) {
    const { vertical, isAncestor, size } = this
    const { default: nodes } = this.$slots
    const allContent = nodes && nodes.every(vnode => this.isContent(vnode))
    const isParent = !isAncestor && vertical && allContent

    const classes = {
      class: {
        tile: true,
        'is-ancestor': isAncestor,
        'is-parent': isParent,
        'is-vertical': vertical,
        [`is-${size}`]: !!size
      }
    }

    const children =
      isParent || !nodes
        ? nodes
        : nodes.map(vnode => {
            if (!this.isContent(vnode)) return vnode
            return createElement('div', { class: 'tile is-parent' }, [vnode])
          })

    return createElement('div', classes, children)
  },
  methods: {
    isContent({ componentOptions = {} }) {
      const { tag } = componentOptions
      return !tag || tag !== 'vb-tile'
    }
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/grid/tiles.sass';
</style>
