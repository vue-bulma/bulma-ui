<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbCheckboxGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
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
