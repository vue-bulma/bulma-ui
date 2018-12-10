<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbBox',
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/box';
</style>
