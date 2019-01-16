<script>
import Vue from 'vue'

export default Vue.component('VbMenu', {
  provide() {
    return {
      rootMenu: this
    }
  },
  props: {
    actived: [String, Number],
    defaultOpen: Array
  },
  render() {
    const content = this.renderContent()
    return <aside class="menu">{content}</aside>
  },
  methods: {
    renderContent() {
      const { default: vNodes } = this.$slots
      return vNodes.map(vNode => {
        const { componentOptions: options = {} } = vNode
        const { propsData = {} } = options

        if (propsData.label) {
          return [<p class="menu-label">{propsData.label}</p>, vNode]
        } else {
          return vNode
        }
      })
    },
    // Call on MenuItem
    handleToggerSubmenu(action, index) {
      this.$emit(action, index)
    },
    // Call on MenuItem
    handleItemClick(index) {
      this.$emit('selected', index)
    }
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/menu';
</style>
