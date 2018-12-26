<template>
  <figure :class="classes">
    <img :src="src" :class="imgClasses">
  </figure>
</template>

<script>
const NUMERICAL = [
  '16x16',
  '24x24',
  '32x32',
  '48x48',
  '64x64',
  '96x96',
  '128x128',
  'square',
  '1by1',
  '5by4',
  '4by3',
  '3by2',
  '5by3',
  '16by9',
  '2by1',
  '3by1',
  '4by5',
  '3by4',
  '2by3',
  '3by5',
  '9by16',
  '1by2',
  '1by3'
]
export default {
  name: 'VbImage',
  props: {
    size: {
      type: String,
      validator(value) {
        return NUMERICAL.includes(value)
      }
    },
    src: String,
    rounded: Boolean
  },
  computed: {
    classes() {
      const { size } = this
      return {
        image: true,
        [`is-${size}`]: !!size
      }
    },
    imgClasses() {
      return {
        'is-rounded': this.rounded
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/image';
</style>
