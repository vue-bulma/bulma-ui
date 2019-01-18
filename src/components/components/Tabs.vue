<template>
  <div :class="classes">
    <ul :style="ulClass">
      <li
        :class="{'is-active':currentTab===index}"
        v-for="(tab,index) in tabs"
        :key="index"
        @click.stop="handleClick(index)"
      >
        <a
          :style="[currentTab === index ? aActiveClass : aClass]"
          @mouseover="addClass(index)"
          @mouseout="removeClass(index)"
        >
          <span class="icon is-small" v-if="tab.icon&&tab.icon!==''">
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
    fullwidth: Boolean,
    end: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 当前Tab
      currentTab: 0,
      originalBorder: ''
    }
  },
  computed: {
    classes() {
      const { align, size, type, rounded, fullwidth } = this
      const obj = {
        tabs: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        [`is-${type}`]: !!type,
        'is-toggle-rounded': rounded,
        'is-fullwidth': fullwidth
      }
      return obj
    },
    ulClass() {
      const { end, type } = this
      if (!type && end) {
        return {
          borderTop: '1px solid #dbdbdb',
          borderBottom: '0px'
        }
      }
      if (type === 'boxed' && end) {
        return {
          borderTop: '1px solid #dbdbdb',
          borderBottom: '0px'
        }
      }
    },
    aClass() {
      const { end, type } = this
      if (!type && end) {
        return {
          borderTop: '1px solid transparent',
          borderBottom: '0px'
        }
      }
    },
    aActiveClass() {
      const { end, type } = this
      if (!type && end) {
        return {
          borderTop: '1px solid #3273dc',
          color: '#3273dc',
          borderBottom: '0px'
        }
      }
      if (type === 'boxed' && end) {
        return {
          backgroundColor: 'white',
          marginBottom: '0px',
          marginTop: '-1px',
          border: '1px solid #dbdbdb',
          'border-bottom': '1px solid #dbdbdb !important',
          'border-top-color': 'transparent !important',
          'border-radius': '0 0 4px 4px'
        }
      }
    }
  },
  methods: {
    handleClick(index) {
      this.currentTab = index
      this.$emit('click', index)
    },
    addClass(index) {
      if (this.currentTab !== index && this.end && !this.type) {
        this.originalBorder = event.currentTarget.style.borderTop
        event.currentTarget.style.borderTop = '1px solid #363636'
      }
    },
    removeClass(index) {
      if (this.currentTab !== index && this.end && !this.type) {
        event.currentTarget.style.borderTop = this.originalBorder
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/tabs.sass';
</style>
