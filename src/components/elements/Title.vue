<template>
  <h1 :class="classes">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'VbTitle',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['title', 'subtitle'].includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return ['1', '2', '3', '4', '5', '6'].includes(value)
      }
    },
    spaced: Boolean
  },
  computed: {
    classes() {
      const { type, size, spaced } = this
      const obj = {
        [`${type}`]: !!type,
        [`is-${size}`]: !!size,
        'is-spaced': spaced
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>
