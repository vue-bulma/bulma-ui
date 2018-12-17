<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbRadioGroup',
  props: {
    value: {}
  }
}
</script>
