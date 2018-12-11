<script>
import Vue from 'vue'
import Control from './Control.vue'
const VbButtonGroup = Vue.component('VbButtonGroup', {
  components: {
    Control
  },
  render (h) {
    return h('control', { 'class': 'is-grouped' }, this.list.map(item => {
      return item.componentOptions.tag === 'VbButtonGroup'
        ? item
        : h('p', { 'class': 'control' },[item])
    }))
  },
  computed: {
    list () {
      return this.$slots.default || []
    }
  }
})
export default VbButtonGroup
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/form.sass';
</style>