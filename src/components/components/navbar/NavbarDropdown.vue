<template>
  <div class="navbar-item has-dropdown is-hoverable" :class="{ 'has-dropdown-up': dropup }" @mouseenter="handleTitleOver" @mouseleave="handleTitleOut">
    <a class="navbar-link" :class="{ 'is-arrowless': arrowLess }">
      <slot name="title">{{title}}</slot>
    </a>

    <div :class="classes">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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
    const { className = '' } = this.$el.parentNode
    this.alignRight = className.includes('navbar-end')
  },
  methods: {
    handleTitleOver(event) {
      this.$emit('open', event)
    },
    handleTitleOut(event) {
      this.$emit('close', event)
    }
  }
}
</script>
