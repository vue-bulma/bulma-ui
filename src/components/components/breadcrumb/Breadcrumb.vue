<template>
  <nav :class="classes" aria-label="breadcrumbs">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
import alignProps from '@/mixins/align'
import sizeProps from '@/mixins/size'

const SEPARATOR = ['arrow', 'bullet', 'dot', 'succeeds']

export default {
  name: 'VbBreadcrumb',
  mixins: [sizeProps, alignProps],
  props: {
    separator: {
      type: String,
      validator(value) {
        return SEPARATOR.includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { align, separator, size } = this
      return {
        breadcrumb: true,
        [`is-${align}`]: !!align,
        [`has-${separator}-separator`]: !!separator,
        [`is-${size}`]: !!size
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/breadcrumb';
</style>
