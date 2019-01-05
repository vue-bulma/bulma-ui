<template>
  <div :class="classes">
    <div v-if="$slots.left" class="level-left">
      <slot name="left"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots.right" class="level-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import alignProps from '@/mixins/align'

export default {
  name: 'VbLevel',
  mixins: [alignProps],
  provide() {
    return {
      vbLevel: this
    }
  },
  props: {
    mobile: Boolean
  },
  computed: {
    classes() {
      return {
        level: true,
        'is-mobile': this.mobile
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/level.sass';
</style>
