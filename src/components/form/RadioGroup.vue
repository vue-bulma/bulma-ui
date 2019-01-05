<template>
  <div class="control">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbRadioGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {}
  }
}
</script>
