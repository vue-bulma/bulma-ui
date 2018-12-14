<script>
import Vue from 'vue'

const LevelItem = Vue.component('VbLevelItem', {
  props: {
    element: {
      type: String,
      default: 'div',
      validator(value) {
        return ['p', 'div'].includes(value)
      }
    },
    align: {
      type: String,
      default: undefined,
      validator(value) {
        return !value || ['left', 'right', 'centered'].includes(value)
      }
    }
  },
  render(createElement) {
    const { element, align } = this
    return createElement(
      element,
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
