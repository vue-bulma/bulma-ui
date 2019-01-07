<script>
import Vue from 'vue'

export default Vue.component('VbDropdownItem', {
  props: {
    content: Boolean
  },
  render(h) {
    return h(
      this.content ? 'div' : 'a',
      { class: 'dropdown-item' },
      this.$slots.default
    )
  }
})
</script>
