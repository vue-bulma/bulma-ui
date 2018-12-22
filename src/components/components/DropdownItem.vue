<template>
  <li class="dropdown-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'VbDropdownItem',
  props: {
    divided: {
      tyep: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
li:hover {
  background-color: whitesmoke;
  color: #0a0a0a;
}
</style>
