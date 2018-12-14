<template>
  <div :class="classes" aria-label="breadcrumbs">
    <slot></slot>
  </div>
</template>

<script>
import alignProps from '../../mixins/align'
import sizeProps from '../../mixins/size'

export default {
  name: 'VbBreadcrumb',
  mixins: [sizeProps, alignProps],
  props: {
    separator: {
      type: String,
      validator(value) {
        return ['arrow', 'bullet', 'dot', 'succeeds'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { align, separator, size } = this
      const obj = {
        breadcrumb: true,
        [`is-${align}`]: !!align,
        [`has-${separator}-separator`]: !!separator,
        [`is-${size}`]: !!size
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/_all';
</style>
