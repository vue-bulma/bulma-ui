<script>
import Vue from 'vue'

const TYPES = ['title', 'subtitle']
const NUMERICAL = [1, 2, 3, 4, 5, 6]

const VbTitle = Vue.component('VbTitle', {
  props: {
    type: {
      type: String,
      default: 'title',
      validator(value) {
        return TYPES.includes(value)
      }
    },
    size: {
      type: [String, Number],
      default() {
        return this.type === 'title' ? 3 : 5
      },
      validator(value) {
        return NUMERICAL.includes(+value)
      }
    },
    spaced: Boolean
  },
  render(h) {
    const { type, size, spaced } = this
    return h(
      'p',
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
