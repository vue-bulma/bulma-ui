<template>
  <aside class="menu">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'VbMenu'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/menu';
</style>
