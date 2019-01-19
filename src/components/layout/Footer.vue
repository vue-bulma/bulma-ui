<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'VbFooter'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/layout/footer.sass';
</style>
