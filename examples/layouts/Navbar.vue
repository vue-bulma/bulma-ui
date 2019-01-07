<template>
  <vb-navbar @select="handleSelect" position="top" shadow class="site">
    <vb-navbar-item slot="brand">
      <a @click="toggleSidebar">
        <vb-icon name="fa fa-bars" size="medium" iconSize="lg"></vb-icon>
      </a>
    </vb-navbar-item>

    <template slot="right">
      <vb-navbar-item name="Docs">Docs</vb-navbar-item>
      <vb-navbar-dropdown title="Bulma">
        <vb-navbar-item name="Bulma">Documentation</vb-navbar-item>
        <hr class="navbar-divider">
        <vb-navbar-item>Version 0.7.2</vb-navbar-item>
      </vb-navbar-dropdown>
    </template>
  </vb-navbar>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      if (name === 'Bulma') {
        window.open('https://bulma.io/')
      } else {
        this.$router.push({ name })
      }
    },
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  }
}
</script>
