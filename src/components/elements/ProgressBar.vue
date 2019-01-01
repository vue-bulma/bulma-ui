<template>
  <progress :class="classes" :max="max">
    <slot></slot>
  </progress>
</template>

<script>
import colorProps from '@/mixins/color'
import sizeProps from '@/mixins/size'

export default {
  name: 'VbProgress',
  mixins: [sizeProps, colorProps],
  props: {
    max: {
      type: [Number, String],
      default: 100,
      validator(value) {
        return +value
      }
    }
  },
  computed: {
    classes() {
      const { color, size } = this
      return {
        progress: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/progress.sass';
</style>
