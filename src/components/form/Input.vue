<template>
  <div :class="ctrlClass">
    <input
      type="text"
      :class="classes"
      :value="value"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    >
  </div>
</template>

<script>
import baseInput from './baseInput'

export default {
  name: 'VbInput',
  mixins: [baseInput],
  props: {
    rounded: Boolean,
    static: Boolean,
    prefix: String,
    suffix: String,
    type: {
      type: String,
      validator(value) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(
          value
        )
      }
    },
    size: {
      type: String,
      validator(value) {
        return ['small', 'normal', 'medium', 'large'].includes(value)
      }
    },
    state: {
      type: String,
      validator(value) {
        return ['focused', 'hovered', 'static'].includes(value)
      }
    }
  },
  data() {
    return {
      isOnComposition: false
    }
  },
  computed: {
    classes() {
      const { type, size, state, rounded } = this
      return {
        input: true,
        [`is-${type}`]: !!type,
        [`is-${size}`]: !!size,
        [`is-${state}`]: !!state,
        'is-static': this.static,
        'is-rounded': rounded
      }
    },
    ctrlClass() {
      const { size, loading, prefix, suffix } = this
      return {
        control: true,
        [`is-${size}`]: !!size,
        'has-icons-left': !!prefix,
        'has-icons-right': !!suffix,
        'is-loading': loading
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
