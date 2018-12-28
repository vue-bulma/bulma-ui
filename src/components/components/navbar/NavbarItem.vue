<script>
import Vue from 'vue'

export default Vue.component('VbNavbarItem', {
  props: {
    name: String
  },
  computed: {
    navbar() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbNavbar') {
        parent = parent.$parent
      }
      return parent
    }
  },
  render(h) {
    const { name, handleClick: click } = this
    return h(
      name ? 'a' : 'div',
      { class: 'navbar-item', on: { click } },
      this.$slots.default
    )
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      const { navbar, name } = this
      if (navbar && name) {
        navbar.$emit.apply(navbar, ['select', name])
      }
    }
  }
})
</script>
