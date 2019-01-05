<template>
  <article class="media">
    <div v-if="$slots.left" class="media-left">
      <slot name="left"></slot>
    </div>

    <div class="media-content">
      <slot></slot>
    </div>

    <div v-if="$slots.right" class="media-right">
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
