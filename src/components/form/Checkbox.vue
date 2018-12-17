<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="value || checked"
      v-bind="$attrs"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >

    <span class="checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VbCheckbox',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: Boolean,
    checked: Boolean
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.checked, event)
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

.checkbox {
  .checkbox-label {
    padding-left: 0.5rem;
  }
}
</style>
