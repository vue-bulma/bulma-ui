<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import alignProps from '@/mixins/align'

export default {
  name: 'VbButtonsList',
  mixins: [alignProps],
  props: {
    type: {
      type: String,
      validator(value) {
        return ['addons'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { align, type } = this
      const obj = {
        buttons: true,
        [`is-${align}`]: !!align,
        [`has-${type}`]: !!type
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/button';
</style>
