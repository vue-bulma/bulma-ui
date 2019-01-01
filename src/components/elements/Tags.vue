<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbTags',
  props: {
    addons: Boolean
  },
  computed: {
    classes() {
      const { addons } = this
      return {
        tags: true,
        'has-addons': addons
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/tag.sass';
</style>
