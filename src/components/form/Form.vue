<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
import sizeProps from '@/mixins/size'

export default {
  name: 'VbForm',
  provide() {
    return {
      vbForm: this
    }
  },
  mixins: [sizeProps],
  props: {
    horizontal: Boolean
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
