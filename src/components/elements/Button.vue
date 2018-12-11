<template>
  <a :class="classes" :disabled="disabled">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VbButton',
  props: {
    type: {
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
          'link',
          'text'
        ].includes(value)
    },
    size: {
      type: String,
      validator: value => ['small', 'normal', 'medium', 'large'].includes(value)
    },
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    state: {
      type: String,
      validator: value =>
        ['loading', 'active', 'focused', 'hovered', 'static'].includes(value)
    }
  },
  computed: {
    classes() {
      const { type, size, outlined, inverted, state, fullwidth, rounded } = this
      const obj = {
        button: true,
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${state}`]: !!state,
        'is-fullwidth': fullwidth,
        'is-inverted': inverted,
        'is-rounded': rounded,
        'is-outlined': outlined
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/button';
</style>
