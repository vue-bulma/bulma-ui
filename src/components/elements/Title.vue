<script>
import Vue from 'vue'
const SIZES = [1, 2, 3, 4, 5, 6]
const VbTitle = Vue.component('VbTitle', {
  props: {
    size: {
      type: String,
      default: '3',
      validator(value) {
        return SIZES.includes(+value)
      }
    },
    spaced: Boolean
  },
  render(h) {
    const { size, spaced } = this
    return h(
      `h${size}`,
      {
        class: {
          title: true,
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
