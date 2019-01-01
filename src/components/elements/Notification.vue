<template>
  <div
    :class="classes"
    @click="handleClick"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <slot></slot>
  </div>
</template>

<script>
import colorProps from '@/mixins/color'

export default {
  name: 'VbNotification',
  mixins: [colorProps],
  computed: {
    classes() {
      const { color } = this
      return {
        notification: true,
        [`is-${color}`]: !!color
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleMouseenter(event) {
      this.$emit('mouseenter', event)
    },
    handleMouseleave(event) {
      this.$emit('mouseleave', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button';
@import '~bulma/sass/elements/notification';
</style>
