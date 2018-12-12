<template>
  <div :class="{ control: true, 'has-icons-left': !!prefix }">
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
import { equal } from '../../utils'

export default {
  name: 'VbSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { VbIcon },
  props: {
    multiple: Boolean,
    rounded: Boolean,
    loading: Boolean,
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
        return ['focused', 'hovered', 'loading'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      const { color, size, rounded, multiple, loading } = this
      return {
        select: true,
        'is-multiple': multiple,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        'is-rounded': rounded,
        'is-loading': loading
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
