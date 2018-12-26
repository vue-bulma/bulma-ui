<template>
  <article v-if="show" :class="classes">
    <div v-if="title" class="message-header">
      <p>{{title}}</p>
      <button v-if="showClose" class="delete" @click="close"></button>
    </div>

    <div v-if="$slots.default" class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'

export default {
  name: 'VbMessage',
  mixins: [colorProps, sizeProps],
  props: {
    title: String,
    showClose: Boolean
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    classes() {
      const { color, size } = this
      const obj = {
        message: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size
      }
      return obj
    }
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/message';
</style>
