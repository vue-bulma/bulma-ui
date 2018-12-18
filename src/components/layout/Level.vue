<script>
import Vue from 'vue'
import alignProps from '../../mixins/align'

const ELEMENTS = ['nav', 'div']

const Level = Vue.component('VbLevel', {
  mixins: [alignProps],
  provide() {
    return {
      vbLevel: this
    }
  },
  props: {
    element: {
      type: String,
      default: 'nav',
      validator: value => ELEMENTS.includes(value)
    },
    mobile: Boolean
  },
  render(createElement) {
    const { element, mobile } = this
    const { left, right, default: content } = this.$slots
    const items = [content]
    if (left) {
      items.unshift(createElement('div', { class: 'level-left' }, left))
    }
    if (right) {
      items.push(createElement('div', { class: 'level-right' }, right))
    }
    return createElement(
      element,
      { class: { level: true, 'is-mobile': mobile } },
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
