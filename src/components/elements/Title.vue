<script>
import Vue from 'vue'
const NUMERICAL =['1', '2', '3', '4', '5', '6']
const VbTitle = Vue.component('VbTitle', {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['title', 'subtitle'].includes(value)
      }
    },
    size: {
      type: String,
      default: '3',
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    spaced: Boolean
  },
  render(h) {
    const { type, size, spaced } = this
    return h(
      `h${size}`,
      {
        class: {
          [`${type}`]: !!type,
          [`is-${size}`]: !!size,
          'is-spaced': spaced
        }
      },
      this.$slots.default
    )
  }
})
export default VbTitle
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>
