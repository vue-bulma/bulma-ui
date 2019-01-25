<template>
  <div :class="classes">
    <div v-if="end">
      <slot></slot>
    </div>

    <ul :class="ulClass">
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{'is-active' : currentTab === index}"
        @click.stop="handleClick(index, tab.label)"
      >
        <a :class="[currentTab === index ? aActiveClass : aNomalClass]">
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
      return {
        'is-end': (!type && end) || (type === 'boxed' && end),
        [`${position}`]: !!position
      }
    },
    aNomalClass() {
      const { end, type, position } = this

      return {
        end: !type && end,
        position: !!position
      }
    },
    aActiveClass() {
      const { end, type, position } = this

      return {
        active: !type && end,
        'boxed-active': type === 'boxed' && end,
        position: !!position
      }
    }
  },
  methods: {
    handleClick(index, label) {
      this.currentTab = index
      this.label = label
      this.$emit('click', index)
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
/* end is truly */

/* ul end is truly */
.is-end {
  border-top: 1px solid #dbdbdb;
  border-bottom: 0px;
}

/* ul position is truly */
.left {
  display: block;
  border-right: 1px solid #dbdbdb;
  border-bottom: 0px;
  float: left;
  margin-bottom: 0px;
  margin-right: 15px;
}
.right {
  display: block;
  float: right;
  margin-bottom: 0px;
  margin-left: 15px;
  border-left: 1px solid #dbdbdb;
  border-bottom: 0px;
}

/* a */
.end {
  border-top: 1px solid transparent;
  border-bottom: 0px;
}
/* <a> position is truly */
.tabs ul li a.position {
  border: 0px;
  justify-content: normal;
}
/* <a> end is truly a:hover */
.tabs ul.is-end li a:hover {
  border-top: 1px solid #363636;
}
/* <a> type is false, end is truly */
.active {
  color: #3273dc;
  border-top: 1px solid #3273dc;
  border-bottom: 0px;
}

/* <a> Both type and end are truly */
.tabs.is-boxed li a.boxed-active {
  background-color: white;
  margin-bottom: 0px !important;
  margin-top: -1px;
  border: 1px solid #dbdbdb;
  border-bottom-color: #dbdbdb !important;
  border-top-color: transparent !important;
  border-radius: 0 0 4px 4px !important;
}
.tabs.is-boxed ul.is-end a:hover {
  border-bottom-color: transparent;
  border-top-color: transparent;
}
</style>
