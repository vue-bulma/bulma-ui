<template>
  <a
    :class="classes"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
import sizeProps from '../../mixins/size'

export default {
  name: 'VbDelete',
  mixins: [sizeProps],
  computed: {
    classes() {
      const { size } = this
      const obj = {
        delete: true,
        [`is-${size}`]: !!size
      }
      return obj
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/other.sass';
</style>
