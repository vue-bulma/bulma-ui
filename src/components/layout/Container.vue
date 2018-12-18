<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const VIEWS = ['desktop', 'fullhd', 'widescreen', 'fluid']

export default {
  name: 'VbContainer',
  props: {
    view: {
      type: String,
      validator(value) {
        return VIEWS.includes(value)
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
