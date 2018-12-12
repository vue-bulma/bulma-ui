<template>
  <span :class="classes">
    <i :class="IconClasses">
      <slot></slot>
    </i>
  </span>
</template>

<script>
export default {
  name: 'VbIcon',
  props: {
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    color: {
      type: String,
      validator: value =>
        [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'white',
          'light',
          'dark',
          'black',
          'link'
        ].includes(value)
    },
    name: {
      type: String
    },
    iconSize: {
      type: String,
      validator: value => ['lg', '2x', '3x'].includes(value)
    },
    animated: Boolean
  },
  computed: {
    classes() {
      const { size, color } = this
      const obj = {
        icon: true,
        [`is-${size}`]: !!size,
        [`has-text-${color}`]: !!color
      }
      return obj
    },
    IconClasses() {
      const { iconSize, name, animated } = this
      const obj = {
        [`${name}`]: !!name,
        [`fa-${iconSize}`]: !!iconSize,
        'fa-pulse': animated
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/icon.sass';
</style>
