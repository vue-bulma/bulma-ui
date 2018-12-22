<template>
  <div :class="classes">
    <ul>
      <li v-for="(tab,index) in tabs" :key="index" :class="itemClass(index)" @click.stop="handleClick(index)">
        <a>
          <span v-if="tab.icon" class="icon is-small">
            <i class="fa" :class="tab.icon" aria-hidden="true"></i>
          </span>
          <span>{{tab.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const ALIGNS = ['centered', 'right']
const SIZE = ['small', 'medium', 'large']
const STYLES = ['boxed', 'toggle', 'fullwidth']

export default {
  name: 'VbTabs',
  props: {
    tabs: {
      type: Array
    },
    align: {
      type: String,
      validator(value) {
        return ALIGNS.includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return SIZE.includes(value)
      }
    },
    type: {
      type: String,
      validator(value) {
        return STYLES.includes(value)
      }
    },
    rounded: Boolean,
    fullwidth: Boolean
  },
  data() {
    return {
      currentTab: 0
    }
  },
  computed: {
    classes() {
      const { align, size, type, rounded, fullwidth } = this
      return {
        tabs: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        [`is-${type}`]: !!type,
        'is-toggle-rounded': rounded,
        'is-fullwidth': fullwidth
      }
    }
  },
  methods: {
    itemClass(index) {
      return {
        'is-active': this.currentTab === index
      }
    },
    handleClick(index) {
      this.currentTab = index
      this.$emit('click', index)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/tabs.sass';
</style>
