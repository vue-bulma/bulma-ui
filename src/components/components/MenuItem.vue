<template>
  <li v-if="$slots.title">
    <router-link :class="classes" :to="to">
      <slot name="title"></slot>
    </router-link>
    <slot></slot>
  </li>
  <li v-else>
    <router-link :class="classes" :to="to">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'VbMenuItem',
  props: {
    actived: {
      type: Boolean
    },
    to: {
      type: [Object, String],
      default: ''
    }
  },
  computed: {
    classes() {
      return { 'is-active': this.actived }
    }
  }
}
</script>
