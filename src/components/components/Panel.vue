<template>
  <nav class="panel">
    <p class="panel-heading" v-if="title">{{ title }}</p>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'VbPanel',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/panel.sass';
</style>
