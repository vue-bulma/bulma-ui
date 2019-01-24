<template>
  <div :class="classes">
    <div v-if="end">
      <slot></slot>
    </div>

    <ul :style="ulClass">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{'is-active' : currentTab === index}"
        @click.stop="handleClick(index, tab.label)"
      >
        <a
          :style="[currentTab === index ? aActiveClass : aNomalClass]"
          @mouseover="addClass(index)"
          @mouseout="removeClass(index)"
        >
          <span v-if="tab.icon && tab.icon !== ''" class="icon is-small">
            <i :class="tab.icon" aria-hidden="true"></i>
          </span>
          <span>{{tab.label}}</span>
        </a>
      </li>
    </ul>

    <div v-if="!end">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import alignProps from '@/mixins/align'
import sizeProps from '@/mixins/size'

const STYLES = ['boxed', 'toggle', 'fullwidth']
const POSITION = ['left', 'right']

export default {
  name: 'VbTabs',
  mixins: [alignProps, sizeProps],
  provide() {
    return {
      rootTabs: this
    }
  },
  props: {
    tabs: {
      type: Array
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
    },
    position: {
      type: String,
      validator(value) {
        return POSITION.includes(value)
      }
    }
  },
  data() {
    return {
      // 当前Tab
      currentTab: 0,
      originalBorder: '',
      tabList: [],
      label: ''
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
    },
    ulClass() {
      const { end, type, position } = this
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
      if (position) {
        let contrary
        if (position === 'left') {
          contrary = 'right'
        } else {
          contrary = 'left'
        }
        return {
          display: 'block',
          [`border-${contrary}`]: '1px solid #dbdbdb',
          borderBottom: '0px',
          float: `${position}`,
          marginBottom: '0px',
          [`margin-${contrary}`]: '15px'
        }
      }
    },
    aNomalClass() {
      const { end, type, position } = this
      if (!type && end) {
        return {
          borderTop: '1px solid transparent',
          borderBottom: '0px'
        }
      }
      if (position) {
        return {
          border: '0px',
          justifyContent: 'normal'
        }
      }
    },
    aActiveClass() {
      const { end, type, position } = this
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
      if (position) {
        return {
          border: '0px',
          justifyContent: 'normal'
        }
      }
    }
  },
  methods: {
    handleClick(index, label) {
      this.currentTab = index
      this.label = label
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
  },
  mounted() {
    this.$nextTick(() => {
      this.tabList = this.$children.filter(child => child.isTabItem)
      this.label = this.tabList[0].label
    })
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/tabs.sass';
</style>

<style scoped>
.tabs {
  display: block;
}
.tabs ul {
  margin-bottom: 15px;
}
</style>
