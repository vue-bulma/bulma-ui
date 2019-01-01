<template>
  <p :class="classes">
    <slot></slot>
  </p>
</template>

<script>
const TYPES = ['title', 'subtitle']
const SIZES = [1, 2, 3, 4, 5, 6]

export default {
  name: 'VbTitle',
  props: {
    type: {
      type: String,
      default: 'title',
      validator(value) {
        return TYPES.includes(value)
      }
    },
    size: {
      type: [String, Number],
      default() {
        return this.type === 'title' ? 3 : 5
      },
      validator(value) {
        return SIZES.includes(+value)
      }
    },
    spaced: Boolean
  },
  computed: {
    classes() {
      const { type, size, spaced } = this
      return {
        [`${type}`]: !!type,
        [`is-${size}`]: !!size,
        'is-spaced': spaced
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/title.sass';
</style>
