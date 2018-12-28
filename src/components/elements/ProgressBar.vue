<template>
  <progress :class="classes"></progress>
</template>

<script>
import colorProps from '@/mixins/color'
import sizeProps from '@/mixins/size'

export default {
  name: 'VbProgress',
  mixins: [sizeProps, colorProps],
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
