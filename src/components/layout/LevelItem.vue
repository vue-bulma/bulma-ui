<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>


<script>
import alignProps from '@/mixins/align'

export default {
  name: 'VbLevelItem',
  inject: {
    vbLevel: {
      default() {
        return {}
      }
    }
  },
  mixins: [alignProps],
  computed: {
    classes() {
      const align = this.align || this.vbLevel.align
      return {
        'level-item': true,
        [`has-text-${align}`]: !!align
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';
</style>
