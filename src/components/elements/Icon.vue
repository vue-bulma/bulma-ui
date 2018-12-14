<template>
  <span :class="classes">
    <i :class="IconClasses">
      <slot></slot>
    </i>
  </span>
</template>

<script>
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'

export default {
  name: 'VbIcon',
  mixins: [sizeProps, colorProps],
  props: {
    name: String,
    iconSize: {
      type: String,
      validator(value) {
        return ['lg', '2x', '3x'].includes(value)
      }
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
