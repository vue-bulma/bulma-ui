<template>
  <a :class="classes">
    <slot></slot>
  </a>
</template>

<script>
import sizeProps from '../../mixins/size'

export default {
  name: 'VbDelete',
  mixins: [sizeProps],
  computed: {
    classes() {
      const { size } = this
      const obj = {
        delete: true,
        [`is-${size}`]: !!size
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/other.sass';
</style>
