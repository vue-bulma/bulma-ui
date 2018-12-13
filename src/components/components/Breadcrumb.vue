<template>
  <div
    :class="classes"
    aria-label="breadcrumbs"
  >
    <slot></slot>

  </div>
</template>
<script>
export default {
  name: 'VbBreadcrumb',
  props: {
    separator: {
      type: String,
      validator(value) {
        return ['arrow', 'bullet', 'dot', 'succeeds'].includes(value)
      }
    },
    align: {
      type: String,
      validator(value) {
        return ['centered', 'right'].includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
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
  // mounted() {
  //   this.$nextTick().then(() => console.log(this.classes))

  // }
}
</script>
<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/_all';
</style>
