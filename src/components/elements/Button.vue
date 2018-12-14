<template>
  <a
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
import { button as colorProps } from '../../mixins/color'
import sizeProps from '../../mixins/size'

export default {
  name: 'VbButton',
  mixins: [sizeProps, colorProps],
  props: {
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    state: {
      type: String,
      validator(value) {
        return ['loading', 'active', 'focused', 'hovered', 'static'].includes(
          value
        )
      }
    }
  },
  computed: {
    classes() {
      const {
        color,
        size,
        outlined,
        inverted,
        state,
        fullwidth,
        rounded
      } = this
      const obj = {
        button: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`is-${state}`]: !!state,
        'is-fullwidth': fullwidth,
        'is-inverted': inverted,
        'is-rounded': rounded,
        'is-outlined': outlined
      }
      return obj
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
@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/button';
</style>
