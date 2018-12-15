<template>
  <div class="tags has-addons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbTagAddons'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/tag.sass';
</style>
