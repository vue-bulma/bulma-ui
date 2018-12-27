<template>
  <aside class="menu">
    <p v-if="label" class="menu-label">{{ label }}</p>
    <ul class="menu-list">
      <slot></slot>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'VbMenu',
  props: {
    label: String
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/menu';
</style>

<style scoped>
.menu-label:not(:first-child) {
  margin-bottom: 1em;
}
</style>
