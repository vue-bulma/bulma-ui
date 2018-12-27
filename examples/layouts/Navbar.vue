<template>
  <vb-navbar @select="handleSelect" position="top" shadow>
    <vb-navbar-item slot="brand">
      <a  @click="toggleSidebar">
        <vb-icon name="fa fa-bars" size="medium" iconSize="lg"></vb-icon>
      </a>
    </vb-navbar-item>

    <vb-navbar-item name="Docs">Docs</vb-navbar-item>
  </vb-navbar>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      this.$router.push({ name })
    },
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  }
}
</script>
