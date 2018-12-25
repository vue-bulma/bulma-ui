<template>
  <div>
    <p class="menu-label" v-if="label">{{ label }}</p>
    <ul class="menu-list">
      <slot></slot>
    </ul>
  </div>
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
