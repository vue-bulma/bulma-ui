<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'VbSection'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/layout/section.sass';
</style>
