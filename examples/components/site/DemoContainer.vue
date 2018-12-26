<template>
  <vb-card class="demo" :title="title">
    <div v-if="$slots.control">
      <slot name="control"></slot>

      <hr>
    </div>

    <slot></slot>
  </vb-card>
</template>

<script>
export default {
  name: 'DemoContainer',
  props: {
    title: String
  }
}
</script>

<style scoped>
.demo:not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
