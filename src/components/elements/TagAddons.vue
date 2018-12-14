<template>
  <div class="tags has-addons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbTagAddons'
  // props: {
  //   color: {
  //     type: String,
  //     validator: value =>
  //       [
  //         'primary',
  //         'info',
  //         'success',
  //         'warning',
  //         'danger',
  //         'white',
  //         'light',
  //         'dark',
  //         'black',
  //         'link'
  //       ].includes(value)
  //   },
  //   size: {
  //     type: String,
  //     validator: value => ['normal', 'medium', 'large'].includes(value)
  //   },
  //   rounded: Boolean,
  //   del: Boolean
  // },
  // computed: {
  //   classes() {
  //     const { color, size, rounded, del } = this
  //     const obj = {
  //       tag: true,
  //       [`is-${color}`]: !!color,
  //       [`is-${size}`]: !!size,
  //       'is-rounded': rounded,
  //       'is-delete': del
  //     }
  //     return obj
  //   }
  // }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/tag.sass';
</style>
