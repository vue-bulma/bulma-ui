<template>
  <span
    :class="classes"
    @mouseenter="handleMouseenter"
  >
    <slot></slot>
  </span>
</template>

<script>
import colorProps from '@/mixins/color'
import sizeProps from '@/mixins/size'

export default {
  name: 'VbTag',
  mixins: [sizeProps, colorProps],
  props: {
    rounded: Boolean,
    del: Boolean
  },
  computed: {
    classes() {
      const { color, size, rounded, del } = this
      const obj = {
        tag: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        'is-rounded': rounded,
        'is-delete': del
      }
      return obj
    }
  },
  methods: {
    handleMouseenter(event) {
      this.$emit('mouseente', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/tag.sass';
</style>
