<template>
  <div id="app">
    <navbar @toggleSidebar="toggleSidebar"></navbar>

    <div :class="classes">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/Navbar'

export default {
  name: 'app',
  components: { Navbar },
  data() {
    return {
      visible: true,
      fullwidth: false
    }
  },
  computed: {
    classes() {
      return {
        main: true,
        'has-sidebar': this.visible,
        'has-fullwidth-content': this.fullwidth
      }
    }
  },
  mounted() {
    this.setVisible(this.$route)
  },
  methods: {
    setVisible(route) {
      const { meta = {} } = route
      const fullwidth = Boolean(meta.fullwidth)
      this.fullwidth = fullwidth
      this.visible = !fullwidth
    },
    toggleSidebar() {
      this.visible = !this.visible
    }
  },
  watch: {
    $route(route) {
      this.setVisible(route)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/navbar';
html,
body,
#app {
  height: 100%;
  overflow: hidden !important;
}
.main {
  height: 100%;
  overflow: hidden scroll;
}
</style>
