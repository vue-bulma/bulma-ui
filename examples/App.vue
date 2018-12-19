<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 20px;
}
.main {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  .component-title {
    font-size: 1.5rem;
    font-weight: 400;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
