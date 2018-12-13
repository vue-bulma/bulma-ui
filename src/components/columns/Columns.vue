<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const NUMERICAL = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
]
export default {
  name: 'VbCols',
  props: {
    view: {
      type: String,
      validator(value) {
        return ['mobile', 'desktop'].includes(value)
      }
    },
    gap: {
      type: String,
      validator(value) {
        return ['gapless', 'variable'].includes(value)
      }
    },
    mobileGap: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    tabletGap: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    desktopGap: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    widescreenGap: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    fullhdGap: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    align: {
      type: String,
      validator(value) {
        return ['vcentered', 'centered'].includes(value)
      }
    },
    multiline: Boolean
  },
  computed: {
    classes() {
      const {
        view,
        gap,
        mobileGap,
        tabletGap,
        desktopGap,
        widescreenGap,
        fullhdGap,
        align,
        multiline
      } = this
      const obj = {
        columns: true,
        [`is-${view}`]: !!view,
        [`is-${gap}`]: !!gap,
        [`is-${mobileGap}-mobile`]: !!mobileGap,
        [`is-${tabletGap}-tablet`]: !!tabletGap,
        [`is-${desktopGap}-desktop`]: !!desktopGap,
        [`is-${widescreenGap}-widescreen`]: !!widescreenGap,
        [`is-${fullhdGap}-fullhd`]: !!fullhdGap,
        [`is-${align}`]: !!align,
        'is-multiline': multiline
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/grid/columns.sass';
</style>
