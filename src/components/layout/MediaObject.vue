<template>
  <article class="media">
    <div class="media-left">
      <slot name="left"></slot>
    </div>

    <div class="media-content">
      <slot></slot>
    </div>

    <div class="media-right">
      <slot name="right"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VbMediaObject'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/media.sass';
</style>
