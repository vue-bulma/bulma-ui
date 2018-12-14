<template>
  <div :class="classes">
    <label class="file-label">
      <input class="file-input" type="file" name="resume" @change="handleChange">

      <span class="file-cta">
        <span class="file-icon">
          <slot name="icon">
            <vb-icon :name="icon"></vb-icon>
          </slot>
        </span>

        <span class="file-label">
          <slot name="label">{{label}}</slot>
        </span>
      </span>

      <span v-if="hasName" class="file-name">
        <slot name="file-name">{{name}}</slot>
      </span>
    </label>
  </div>
</template>

<script>
import VbIcon from '../elements/Icon'
import colorProps from '../../mixins/color'
import sizeProps from '../../mixins/size'
import alignProps from '../../mixins/align'

export default {
  name: 'VbUploader',
  mixins: [colorProps, sizeProps, alignProps],
  components: { VbIcon },
  props: {
    label: String,
    name: String,
    icon: String,
    fullwidth: Boolean,
    boxed: Boolean
  },
  computed: {
    hasName() {
      return !!this.$slots['file-name'] || !!this.name
    },
    classes() {
      const { color, boxed, size, fullwidth, align } = this
      return {
        file: true,
        'has-name': this.hasName,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`is-${align}`]: !!align,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
