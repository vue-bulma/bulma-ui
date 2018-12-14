
<script>
import Vue from 'vue'

const Level = Vue.component('VbLevel', {
  props: {
    element: {
      type: String,
      default: 'nav',
      validator: value => ['nav', 'div'].includes(value)
    },
    mobile: Boolean
  },
  render(createElement) {
    const { element, mobile } = this
    const items = []
    const lItems = []
    const rItems = []
    if (this.$slots.left) {
      this.$slots.left.map(function(node) {
        lItems.push(node.children)
      })
      items.push(createElement('div', { class: 'level-left' }, lItems))
    }
    items.push(this.$slots.default)
    if (this.$slots.right) {
      this.$slots.right.map(function(node) {
        rItems.push(node.children)
      })
      items.push(createElement('div', { class: 'level-right' }, rItems))
    }
    return createElement(
      element,
      { class: 'level', 'is-mobile': mobile },
      items
    )
  }
})
export default Level
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';
</style>
