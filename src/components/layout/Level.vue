<script>
import Vue from 'vue'
import alignProps from '@/mixins/align'

const Level = Vue.component('VbLevel', {
  mixins: [alignProps],
  provide() {
    return {
      vbLevel: this
    }
  },
  props: {
    mobile: Boolean
  },
  render(h) {
    const { left, right, default: content } = this.$slots
    const items = [content]
    if (left) {
      items.unshift(h('div', { class: 'level-left' }, left))
    }
    if (right) {
      items.push(h('div', { class: 'level-right' }, right))
    }
    return h('div', { class: { level: true, 'is-mobile': this.mobile } }, items)
  }
})
export default Level
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';
</style>
