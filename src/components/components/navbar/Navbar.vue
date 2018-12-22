<template>
  <nav role="navigation" aria-label="main navigation" :class="classes">
    <div class="navbar-brand">
      <slot name="brand"></slot>

      <a role="button" aria-label="menu" aria-expanded="false" :class="burgerClass" @click="handleToggle">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="menuClass">
      <div class="navbar-start">
        <slot></slot>
      </div>

      <div class="navbar-end">
        <slot name="right"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
import colorProps from '../../../mixins/color'

const POSITIONS = ['top', 'bottom']

export default {
  name: 'VbNavbar',
  mixins: [colorProps],
  props: {
    transparent: Boolean,
    position: {
      type: String,
      validator(value) {
        return POSITIONS.includes(value)
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    burgerClass() {
      return {
        burger: true,
        'navbar-burger': true,
        'is-active': this.visible
      }
    },
    menuClass() {
      return {
        'navbar-menu': true,
        'is-active': this.visible
      }
    },
    classes() {
      const { color, position, transparent } = this
      return {
        navbar: true,
        [`is-${color}`]: !!color,
        [`is-fixed-${position}`]: !!position,
        'is-transparent': transparent
      }
    }
  },
  mounted() {
    this.toggleBodyClass(this.position)
  },
  beforeDestroy() {
    this.toggleBodyClass(this.position)
  },
  watch: {
    position(newVal, oldVal) {
      this.toggleBodyClass(oldVal)
      this.toggleBodyClass(newVal)
    }
  },
  methods: {
    toggleBodyClass(position) {
      if (!position) return
      document.body.classList.toggle(`has-navbar-fixed-${position}`)
    },
    handleToggle() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/navbar.sass';
</style>
