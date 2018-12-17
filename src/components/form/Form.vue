<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import sizeProps from '../../mixins/size'

export default {
  name: 'VbForm',
  provide() {
    return {
      vbForm: this
    }
  },
  mixins: [sizeProps],
  props: {
    horizontal: Boolean
  }
}
</script>
