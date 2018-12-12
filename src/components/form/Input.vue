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

    <vb-icon v-if="!!prefix" class="is-left" :type="prefix" :size="size"></vb-icon>
    <vb-icon v-if="!!suffix" class="is-right" :type="suffix" :size="size"></vb-icon>
  </div>
</template>

<script>
import baseInput from '../../lib/baseInput'
import VbIcon from '../elements/Icon'

export default {
  name: 'VbInput',
  components: { VbIcon },
  mixins: [baseInput],
  props: {
    rounded: Boolean,
    static: Boolean,
    prefix: String,
    suffix: String,
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
      const { color, size, state, rounded } = this
      return {
        input: true,
        [`is-${color}`]: !!color,
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
