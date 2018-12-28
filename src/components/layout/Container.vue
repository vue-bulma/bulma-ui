<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import alignProps from '@/mixins/align'

const VIEWS = ['desktop', 'fullhd', 'widescreen', 'fluid']

export default {
  name: 'VbContainer',
  mixins: [alignProps],
  props: {
    view: {
      type: String,
      validator(value) {
        return VIEWS.includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { view, align } = this
      return {
        container: true,
        [`is-${view}`]: !!view,
        [`has-text-${align}`]: !!align
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/container';
</style>
