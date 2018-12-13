<template>
  <div class="field" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbControl'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/icon.sass';
</style>
