<template>
  <vb-navbar @select="handleSelect" position="top" shadow>
    <vb-navbar-item slot="brand">
      <router-link :to="{ path: '/' }">
        <vb-image path="https://bulma.io/images/placeholders/48x48.png"></vb-image>
      </router-link>
    </vb-navbar-item>

    <vb-navbar-item name="Docs">Docs</vb-navbar-item>
  </vb-navbar>
</template>

<script>
export default {
  methods: {
    handleSelect(name) {
      this.$router.push({ name })
    }
  }
}
</script>
