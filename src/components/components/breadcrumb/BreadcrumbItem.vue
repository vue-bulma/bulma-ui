<template>
  <li :class="classes">
    <a @click="handleClick">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'VbBreadcrumbItem',
  props: {
    actived: Boolean,
    to: [Object, String],
    replace: Boolean
  },
  computed: {
    classes() {
      return { 'is-active': this.actived }
    }
  },
  methods: {
    handleClick() {
      if (this.replace) {
        this.$router.replace(this.to)
      } else {
        this.$router.push(this.to)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/breadcrumb';
</style>
