<template>
  <section :class="classes">
    <slot></slot>
  </section>
</template>

<script>
const SIZES = ['medium', 'large']

export default {
  name: 'VbSection',
  props: {
    size: {
      type: String,
      validator(value) {
        return SIZES.includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { size } = this
      return {
        section: true,
        [`is-${size}`]: !!size
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/layout/section.sass';
</style>
