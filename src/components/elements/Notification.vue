<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import colorProps from '../../mixins/color'

export default {
  name: 'VbNotification',
  mixins: [colorProps],
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
