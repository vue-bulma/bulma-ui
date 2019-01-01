<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import sizeProps from '@/mixins/size'

export default {
  name: 'VbContent',
  mixins: [sizeProps],
  computed: {
    classes() {
      const { size } = this
      return {
        content: true,
        [`is-${size}`]: !!size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/content';
</style>
