<template>
  <span :class="classes" @click="handleClick">
    <slot>
      <i :class="IconClasses"></i>
    </slot>
  </span>
</template>

<script>
import colorProps from '@/mixins/color'
import sizeProps from '@/mixins/size'

const ICON_SIZES = ['lg', '2x', '3x']

export default {
  name: 'VbIcon',
  mixins: [sizeProps, colorProps],
  props: {
    name: String,
    iconSize: {
      type: String,
      validator(value) {
        return ICON_SIZES.includes(value)
      }
    },
    animated: Boolean
  },
  computed: {
    classes() {
      const { size, color } = this
      return {
        icon: true,
        [`is-${size}`]: !!size,
        [`has-text-${color}`]: !!color
      }
    },
    IconClasses() {
      const { iconSize, name, animated } = this
      return {
        [`${name}`]: !!name,
        [`fa-${iconSize}`]: !!iconSize,
        'fa-pulse': animated
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/icon.sass';
</style>
