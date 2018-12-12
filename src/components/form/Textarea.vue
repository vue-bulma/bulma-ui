<template>
  <div :class="ctrlClass">
    <textarea
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
    </textarea>
  </div>
</template>

<script>
import baseInput from './baseInput'

export default {
  name: 'VbTextarea',
  mixins: [baseInput],
  props: {
    color: {
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
        return ['focused', 'hovered'].includes(value)
      }
    },
    resize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOnComposition: false
    }
  },
  computed: {
    classes() {
      const { color, size, state, resize } = this
      return {
        textarea: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`is-${state}`]: !!state,
        'has-fixed-size': !resize
      }
    },
    ctrlClass() {
      const { size, loading } = this
      return {
        control: true,
        [`is-${size}`]: !!size,
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
