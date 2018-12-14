<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbContainer',
  props: {
    view: {
      type: String,
      validator(value) {
        return ['desktop', 'fullhd', 'widescreen', 'fluid'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { view } = this
      return {
        container: true,
        [`is-${view}`]: !!view
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/container';
</style>
