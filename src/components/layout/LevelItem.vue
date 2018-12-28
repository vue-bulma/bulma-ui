<script>
import Vue from 'vue'
import alignProps from '@/mixins/align'

const LevelItem = Vue.component('VbLevelItem', {
  inject: {
    vbLevel: {
      default() {
        return {}
      }
    }
  },
  mixins: [alignProps],
  render(h) {
    const align = this.align || this.vbLevel.align
    return h(
      'div',
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
