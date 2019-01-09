<script>
import Vue from 'vue'

export default Vue.component('VbDropdownItem', {
  props: {
    content: Boolean
  },
  render(h) {
    const { content, handleClick: click } = this
    return h(
      content ? 'div' : 'a',
      { class: 'dropdown-item', on: { click } },
      this.$slots.default
    )
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
})
</script>
