<template>
  <col />
</template>

<script>
import alignProps from '@/mixins/align'

const TYPES = ['selection', 'expand']

export default {
  name: 'VbTableColumn',
  mixins: [alignProps],
  props: {
    align: {
      type: String,
      validator(value) {
        return ['left', 'centered', 'right'].includes(value)
      }
    },
    headerAlign: {
      type: String,
      validator(value) {
        return ['left', 'centered', 'right'].includes(value)
      }
    },
    type: {
      type: String,
      validator(value) {
        return TYPES.includes(value)
      }
    },
    label: String,
    prop: String
  },
  computed: {
    table() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbTable') {
        parent = parent.$parent
      }
      return parent
    }
  },
  mounted() {
    this.table._updateColumns()
  },
  beforeDestroy() {
    this.table._updateColumns()
  }
}
</script>
