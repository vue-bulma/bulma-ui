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

    <vb-icon v-if="!!prefix" class="is-left" :name="prefix" :size="size"></vb-icon>
    <vb-icon v-if="!!suffix" class="is-right" :name="suffix" :size="size"></vb-icon>
  </div>
</template>

<script>
import VbIcon from '../elements/Icon'
import baseInput from '../../mixins/baseInput'
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'

const STATES = ['focused', 'hovered', 'static']

export default {
  name: 'VbInput',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  components: { VbIcon },
  mixins: [baseInput, colorProps, sizeProps],
  props: {
    rounded: Boolean,
    expanded: Boolean,
    static: Boolean,
    prefix: String,
    suffix: String,
    state: {
      type: String,
      validator(value) {
        return STATES.includes(value)
      }
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
      const { color, formSize, state, rounded } = this
      return {
        input: true,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        [`is-${state}`]: !!state,
        'is-static': this.static,
        'is-rounded': rounded
      }
    },
    ctrlClass() {
      const { formSize, loading, prefix, suffix, expanded } = this
      return {
        control: true,
        [`is-${formSize}`]: !!formSize,
        'has-icons-left': !!prefix,
        'has-icons-right': !!suffix,
        'is-loading': loading,
        'is-expanded': expanded
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
