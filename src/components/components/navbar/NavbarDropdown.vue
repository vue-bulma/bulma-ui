<script>
import Vue from 'vue'

export default Vue.component('VbNavbarDropdown', {
  name: 'VbNavbarDropdown',
  props: {
    title: String,
    dropup: Boolean,
    arrowLess: Boolean
  },
  data() {
    return {
      alignRight: false
    }
  },
  render() {
    const {
      dropup,
      handleTitleOver,
      handleTitleOut,
      arrowLess,
      title,
      classes,
      $slots
    } = this

    const { default: nodes = [] } = $slots
    const content = nodes.map(node => {
      const { attrs = {} } = node.data || {}
      return attrs.divided || attrs.divided === ''
        ? [<hr class="navbar-divider" />, node]
        : node
    })

    return (
      <div
        class={{
          'navbar-item': true,
          'has-dropdown': true,
          'is-hoverable': true,
          'has-dropdown-up': dropup
        }}
        on-mouseenter={handleTitleOver}
        on-mouseleave={handleTitleOut}
      >
        <a class={{ 'navbar-link': true, 'is-arrowless': arrowLess }}>
          {$slots.title || title}
        </a>

        <div class={classes}>{content}</div>
      </div>
    )
  },
  computed: {
    classes() {
      // https://bulma.io/documentation/components/navbar/#dropdown-menu
      // Styles for the dropdown menu
      //   When having a transparent navbar, it is preferable to use the boxed version of the dropdown, by using the is-boxed modifier.
      const { parent, alignRight } = this
      return {
        'navbar-dropdown': true,
        'is-right': alignRight,
        'is-boxed': parent && parent.transparent
      }
    },
    parent() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbNavbar') {
        parent = parent.$parent
      }
      return parent
    }
  },
  mounted() {
    if (this.$el && this.$el.parentNode) {
      const { className = '' } = this.$el.parentNode || {}
      this.alignRight = className.includes('navbar-end')
    }
  },
  methods: {
    handleTitleOver(event) {
      this.$emit('open', event)
    },
    handleTitleOut(event) {
      this.$emit('close', event)
    }
  }
})
</script>
