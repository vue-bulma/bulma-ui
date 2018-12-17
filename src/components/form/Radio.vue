<template>
  <label class="radio">
    <input
      type="radio"
      v-bind="$attrs"
      v-model="model"
      :value="label"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >

    <span class="radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VbRadio',
  props: {
    value: {},
    label: {}
  },
  computed: {
    model: {
      get() {
        return this.group ? this.group.value : this.value
      },
      set(value) {
        if (this.group) {
          this.group.$emit.apply(this.group, ['input', value])
        } else {
          this.$emit('input', value)
        }
      }
    },
    group() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbRadioGroup') {
        parent = parent.$parent
      }
      return parent
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.model)
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

.radio {
  .radio-label {
    padding-left: 0.25rem;
  }
}
</style>
