<template>
  <footer class="footer">
    <div :class="classes">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
import alignProps from '@/mixins/align'

export default {
  name: 'VbFooter',
  mixins: [alignProps],
  computed: {
    classes() {
      const { align } = this
      return {
        content: true,
        [`has-text-${align}`]: !!align
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/navbar.sass';
@import '~bulma/sass/layout/hero.sass';
</style>
