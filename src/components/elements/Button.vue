<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { button as colorProps } from '@/mixins/color'
import sizeProps from '@/mixins/size'

const STATES = ['loading', 'active', 'focused', 'hovered', 'static']

export default {
  name: 'VbButton',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [sizeProps, colorProps],
  props: {
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    rounded: Boolean,
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
    }
  },
  computed: {
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    classes() {
      const {
        color,
        formSize,
        outlined,
        inverted,
        state,
        fullwidth,
        rounded
      } = this
      return {
        button: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'is-fullwidth': fullwidth,
        'is-inverted': inverted,
        'is-rounded': rounded,
        'is-outlined': outlined
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';
@import '~bulma/sass/elements/button';
</style>
