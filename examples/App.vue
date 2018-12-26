<template>
  <div id="app">
    <navbar></navbar>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/Navbar'

export default {
  name: 'app',
  components: { Navbar }
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
