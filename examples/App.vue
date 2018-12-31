<template>
  <div id="app" :class="classes">
    <navbar @toggleSidebar="toggleSidebar"></navbar>

    <sidebar></sidebar>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/Navbar'
import Sidebar from './layouts/Sidebar'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      visible: true,
      fullwidth: false
    }
  },
  computed: {
    classes() {
      return {
        'has-sidebar': this.visible,
        'has-fullwidth-content': this.fullwidth
      }
    }
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

$sidebar-width: 220px;

#app,
body,
html {
  height: 100%;
  overflow: hidden !important;
}
.sidebar {
  height: calc(100% - 3.25rem);
  position: fixed;
  width: $sidebar-width;
  left: -$sidebar-width - 5px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 1px 1px 5px #888888;
  transition: left 0.5s;
  z-index: 31;
}
.site.navbar {
  z-index: 32 !important;
}
.has-sidebar {
  .sidebar {
    left: 0;
  }
  .docs {
    padding-left: $sidebar-width + 15px;
  }
}
.has-sidebar.has-fullwidth-content {
  .docs {
    padding-left: 1rem;
  }
}
.main {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.color-red {
  color: red;
}
</style>
