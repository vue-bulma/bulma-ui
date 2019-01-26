<template>
  <div v-show="actived">
    <slot></slot>
    <div v-if="$slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VbTabItem',
  data() {
    return {
      isTabItem: true
    }
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

<style scoped>
.footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
