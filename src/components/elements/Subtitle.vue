<script>
import Vue from 'vue'
const SIZES = [1, 2, 3, 4, 5, 6]
const VbSubtitle = Vue.component('VbSubtitle', {
  props: {
    size: {
      type: String,
      default: '5',
      validator(value) {
        return SIZES.includes(+value)
      }
    }
  },
  render(h) {
    const { size } = this
    return h(
      `h${size}`,
      {
        class: {
          subtitle: true,
          [`is-${size}`]: !!size
        }
      },
      this.$slots.default
    )
  }
})

export default VbSubtitle
</script>
<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>
