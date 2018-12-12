
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbContent',
  props: {
    size: {
      type: String,
      validator: value => ['small', 'medium', 'large'].includes(value)
    }
  },
  computed: {
    classes() {
      const { size } = this
      const obj = {
        content: true,
        [`is-${size}`]: !!size
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/content';
</style>
