<template>
  <section :class="classes">
    <div v-if="$slots.head" class="hero-head">
      <slot name="head"></slot>
    </div>

    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <slot>{{title}}</slot>
        </h1>
        <h2 class="subtitle">
          <slot name="subtitle">{{subtitle}}</slot>
        </h2>
      </div>
    </div>

    <div v-if="$slots.foot" class="hero-foot">
      <slot name="foot"></slot>
    </div>
  </section>
</template>

<script>
import alignProps from '../../mixins/align'
import { hero as colorProps } from '../../mixins/color'
import { hero as sizeProps } from '../../mixins/size'

export default {
  name: 'VbHero',
  mixins: [colorProps, sizeProps, alignProps],
  props: {
    title: String,
    subtitle: String,
    bold: Boolean
  },
  computed: {
    classes() {
      const { color, bold, size, align } = this
      return {
        hero: true,
        [`is-${color}`]: !!color,
        [`is-${size}`]: !!size,
        [`has-text-${align}`]: !!align,
        'is-bold': bold
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/navbar.sass';
@import '~bulma/sass/layout/hero.sass';
</style>
