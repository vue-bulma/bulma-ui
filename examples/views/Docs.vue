<template>
  <div class="docs">
    <div class="sidebar">
      <sidebar></sidebar>
    </div>

    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '../layouts/Sidebar'

export default {
  name: 'Docs',
  components: { Sidebar }
}
</script>

<style lang="scss" scoped>
$sidebar-width: 220px;

.sidebar {
  height: 100%;
  position: absolute;
  width: $sidebar-width;
  left: -$sidebar-width;
  padding: 1.5rem;
  overflow: hidden scroll;
  background-color: #fff;
  box-shadow: 1px 1px 5px #888888;
  z-index: 50;
  transition: left 0.5s;
}
.doc-content {
  padding-left: 1rem;
  box-sizing: border-box;
  transition: padding-left 0.5s;
}
.has-sidebar {
  .sidebar {
    left: 0;
  }
  .doc-content {
    padding-left: $sidebar-width + 15px;
  }
}
.has-sidebar.has-fullwidth-content {
  .doc-content {
    padding-left: 1rem;
  }
}
</style>
