<template>
  <label class="checkbox">
    <input
      v-if="group"
      type="checkbox"
      v-model="model"
      v-bind="$attrs"
      :value="label"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <input
      v-else
      type="checkbox"
      v-bind="$attrs"
      :checked="value"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >

    <span v-if="$slots.default" class="checkbox-label">
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
    label: {},
    value: Boolean
  },
  computed: {
    model: {
      // Never use this while this.group === undefined
      get() {
        return this.group.value
      },
      set(value) {
        this.group.$emit.apply(this.group, ['change', value])
      }
    },
    group() {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'VbCheckboxGroup') {
        parent = parent.$parent
      }
      return parent
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.checked)
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
