<template>
  <div class="card">
    <header class="card-header" v-if="!!title">
      <div class="card-header-title" v-if="!!title">{{ title }}</div>
      <div class="card-header-icon" v-if="!!icon">
        <vb-icon :name="icon"></vb-icon>
      </div>
    </header>
    <div class="card-image" v-if="!!image">
      <vb-image :path="image" :size="size"></vb-image>
    </div>
    <div class="card-content" v-if="!!$slots.content">
      <slot name="content"></slot>
    </div>
    <footer class="card-footer" v-if="!!this.$slots.footer">
       <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'VbCard',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    image: {
      type: String
    },
    size: {
      type: String
    }
  }
}
</script>
<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/card';
</style>
