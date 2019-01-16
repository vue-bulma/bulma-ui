<script>
import Vue from 'vue'

export default Vue.component('VbMenuList', {
  props: {
    label: String
  },
  render() {
    return <ul class={this.classes}>{this.$slots.default}</ul>
  },
  computed: {
    parentName() {
      return this.$parent && this.$parent.$options && this.$parent.$options.name
    },
    classes() {
      return {
        'menu-list': this.parentName === 'VbMenu'
      }
    }
  }
})
</script>
