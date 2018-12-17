<template>
  <div :class="ctrlClass">
    <div :class="classes">
      <select
        v-model="currentValue"
        v-bind="$attrs"
        :multiple="multiple"
        :size="lines"
        :class="selectClass"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
        <slot></slot>
      </select>

      <vb-icon v-if="!!prefix" class="is-left" :name="prefix" :size="size"></vb-icon>
    </div>
  </div>
</template>

<script>
import VbIcon from '../elements/Icon'
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'
import { equal } from '../../utils'

const STATES = ['focused', 'hovered', 'loading']

export default {
  name: 'VbSelect',
  inject: {
    vbFormItem: {
      default: ''
    }
  },
  mixins: [colorProps, sizeProps],
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { VbIcon },
  props: {
    multiple: Boolean,
    rounded: Boolean,
    loading: Boolean,
    fullWidth: Boolean,
    prefix: String,
    placeholder: String,
    value: {
      required: true
    },
    lines: {
      type: [String, Number],
      validator(value) {
        return +value
      }
    },
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
      const { color, rounded, multiple, loading, fullWidth, formSize } = this
      return {
        select: true,
        'is-multiple': multiple,
        [`is-${color}`]: !!color,
        [`is-${formSize}`]: !!formSize,
        'is-rounded': rounded,
        'is-loading': loading,
        'is-fullwidth': fullWidth
      }
    },
    ctrlClass() {
      const { prefix, fullWidth } = this
      return {
        control: true,
        'has-icons-left': !!prefix,
        'is-expanded': fullWidth
      }
    },
    selectClass() {
      const { state } = this
      return {
        [`is-${state}`]: !!state
      }
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(data) {
      if (!equal(this.currentValue, data)) {
        this.currentValue = data
      }
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.currentValue)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
