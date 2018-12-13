<template>
  <progress :class="classes"></progress>
</template>

<script>
export default {
  name: 'VbProgress',
  props: {
    color: {
      type: String,
      validator(value) {
        return [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'white',
          'light',
          'dark',
          'black',
          'link'
        ].includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { color, size } = this
      const obj = {
        progress: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/progress.sass';
</style>
