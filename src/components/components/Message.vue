<template>
  <article :class="classes" v-if="show">
    <div class="message-header" v-if="title">
      <p>{{title}}</p>
      <button class="delete" v-if="showCloseButton" @click="close"></button>
    </div>
    <div class="message-body" v-if="$slots.content">
      <slot name="content"></slot>
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
    showCloseButton: Boolean
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
