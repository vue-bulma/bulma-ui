<script>
import Vue from 'vue'
import alignProps from '../../mixins/align'

const ELEMENTS = ['nav', 'div']

const LevelItem = Vue.component('VbLevelItem', {
  inject: {
    vbLevel: {
      default() {
        return {}
      }
    }
  },
  mixins: [alignProps],
  props: {
    element: {
      type: String,
      default: 'div',
      validator(value) {
        return ELEMENTS.includes(value)
      }
    }
  },
  render(createElement) {
    const align = this.align || this.vbLevel.align
    return createElement(
      this.element,
      {
        class: {
          'level-item': true,
          [`has-text-${align}`]: !!align
        }
      },
      this.$slots.default
    )
  }
})
export default LevelItem
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';
</style>
