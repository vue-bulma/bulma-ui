<template>
  <vb-container id="docs">
    <div class="sidebar">
      <sidebar></sidebar>
    </div>

    <div class="doc-content">
      <router-view></router-view>
    </div>
  </vb-container>
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
  overflow: hidden scroll;
  position: fixed;
  width: $sidebar-width;
  padding: 1.5rem;
}
.doc-content {
  padding-left: $sidebar-width + 15px;
  box-sizing: border-box;
}
</style>
