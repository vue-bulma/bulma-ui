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
import baseInput from '../../mixins/baseInput'
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'

const STATES = ['focused', 'hovered']

export default {
  name: 'VbTextarea',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [baseInput, colorProps, sizeProps],
  props: {
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
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
    formSize() {
      return this.size || this.vbFormItem._formSize
    },
    classes() {
      const { color, formSize, state, resize } = this
      return {
        textarea: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'has-fixed-size': !resize
      }
    },
    ctrlClass() {
      const { formSize, loading } = this
      return {
        control: true,
        [`is-${formSize}`]: !!formSize,
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
