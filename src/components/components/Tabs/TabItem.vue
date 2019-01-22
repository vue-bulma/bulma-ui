<template>
  <div v-show="actived">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VbTabItem',
  beforeCreate() {
    this.isTabItem = true
  },
  inject: {
    rootTabs: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    icon: String
  },
  computed: {
    actived() {
      return this.rootTabs.label === this.label
    }
  }
}
</script>
