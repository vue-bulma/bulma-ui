<script>
import Vue from 'vue'
import Control from './Control.vue'
const VbButtonAddons = Vue.component('VbButtonAddons', {
  components: {
    Control
  },
  render (h) {
    return h('control', { 'class': 'has-addons' }, this.list.map(item => {
      return item.componentOptions.tag === 'VbButtonAddons'
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
export default VbButtonAddons
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/form.sass';
</style>