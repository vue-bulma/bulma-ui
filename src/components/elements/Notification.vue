<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbNotification',
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
    }
  },
  computed: {
    classes() {
      const { color } = this
      const obj = {
        notification: true,
        [`is-${color}`]: !!color
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/notification';
</style>
