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
    addons: Boolean
  },
  computed: {
    classes() {
      const { align, addons } = this
      return {
        buttons: true,
        [`is-${align}`]: !!align,
        'has-addons': addons
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/button';
</style>
