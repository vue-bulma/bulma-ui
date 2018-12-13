<template>
  <label class="radio">
    <input
      type="radio"
      v-bind="$attrs"
      :checked="value === model"
      :value="value"
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
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    value: {},
    model: {}
  },
  methods: {
    handleChange() {
      this.$emit('change', this.value)
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
    padding-left: 0.5rem;
  }
}
</style>
