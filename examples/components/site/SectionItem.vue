<template>
  <vb-content>
    <vb-title :id="id" type="title" size="3" class="anchor-title">
      {{title}}:
      <a :href="`#${id}`" class="anchor-link">#</a>
    </vb-title>
    <slot></slot>
  </vb-content>
</template>

<script>
export default {
  name: 'ExampleSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: Boolean
    }
  },
  computed: {
    id() {
      return this.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>

<style scoped>
.anchor-title {
  position: relative;
}
.anchor-link {
  position: absolute;
  right: calc(100% + 0.5rem);
}
</style>
