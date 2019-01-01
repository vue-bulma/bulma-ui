<template>
  <div class="docs">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Docs',
  mounted() {
    const elm = document.getElementById(this.$route.hash.slice(1))
    if (!elm) return

    const [main] = document.getElementsByClassName('main')
    main.scrollTop = elm.offsetTop - 52
  }
}
</script>

<style lang="scss">
.docs {
  padding-left: 1rem;
  box-sizing: border-box;
  transition: padding-left 0.5s;
}
</style>
