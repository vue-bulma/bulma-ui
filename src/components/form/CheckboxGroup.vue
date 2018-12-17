<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbCheckboxGroup',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.checkbox + .checkbox {
  margin-left: 1rem;
}
</style>
