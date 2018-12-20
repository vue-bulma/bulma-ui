<template>
  <div class="card">
    <header v-if="hasTitle || hasIcon" class="card-header">
      <slot name="header">
        <div v-if="hasTitle" class="card-header-title">
          <slot name="title">{{title}}</slot>
        </div>

        <div v-if="hasIcon" class="card-header-icon">
          <slot name="icon">
            <vb-icon :name="icon"></vb-icon>
          </slot>
        </div>
      </slot>
    </header>

    <div v-if="hasImage" class="card-image">
      <slot name="image">
        <vb-image :path="image"></vb-image>
      </slot>
    </div>

    <div v-if="!!$slots.default" class="card-content">
      <slot></slot>
    </div>

    <footer v-if="!!$slots.footer" class="card-footer">
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
    }
  },
  computed: {
    hasTitle() {
      return !!this.$slots.title || !!this.title
    },
    hasImage() {
      return !!this.$slots.image || !!this.image
    },
    hasIcon() {
      return !!this.$slots.icon || !!this.icon
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/card';
</style>
