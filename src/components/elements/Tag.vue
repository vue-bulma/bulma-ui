<script>
import Vue from 'vue'

import colorProps from '@/mixins/color'
import { tag as sizeProps } from '@/mixins/size'

export default Vue.component('VbTag', {
  mixins: [sizeProps, colorProps],
  props: {
    rounded: Boolean,
    del: Boolean,
    static: Boolean
  },
  computed: {
    classes() {
      const { color, size, rounded, del } = this
      return {
        tag: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        'is-rounded': rounded,
        'is-delete': del
      }
    }
  },
  methods: {
    handleMouseenter(event) {
      this.$emit('mouseente', event)
    },
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  render(h) {
    const { classes, handleMouseenter, handleClick } = this
    return h(
      this.static ? 'span' : 'a',
      {
        class: classes,
        on: { mouseenter: handleMouseenter, click: handleClick }
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/tag.sass';
</style>
