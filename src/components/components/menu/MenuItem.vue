<template>
  <li>
    <a :class="classes" @click="handleClick">
      <vb-icon v-if="icon" :name="icon" class="vb-menu-item__icon"></vb-icon>

      <slot></slot>

      <vb-icon v-if="$slots.submenu" name="fa fa-angle-down" :class="submenuIconClass" ></vb-icon>
    </a>

    <slot v-if="showSubmenu" name="submenu"></slot>
  </li>
</template>

<script>
import VbIcon from '@/components/elements/Icon'

export default {
  name: 'VbMenuItem',
  coponents: { VbIcon },
  inject: {
    rootMenu: {
      default: ''
    }
  },
  props: {
    route: {
      type: [Object, String],
      default: ''
    },
    index: {
      type: [String, Number],
      required: true
    },
    icon: String
  },
  data() {
    return {
      showSubmenu: false
    }
  },
  computed: {
    classes() {
      return { 'is-active': this.rootMenu.actived === this.index }
    },
    submenuIconClass() {
      return {
        'submenu-icon': true,
        'is-opened': this.showSubmenu
      }
    },
    defaultOpen() {
      const { defaultOpen = [] } = this.rootMenu
      return defaultOpen
    }
  },
  created() {
    const { defaultOpen = [] } = this.rootMenu
    this.showSubmenu = defaultOpen.includes(this.index)
  },
  methods: {
    handleClick() {
      if (this.$slots.submenu) {
        this.toggleSubmenu()
      } else {
        if (this.$router && this.route) {
          this.$router.push(this.route)
        }

        this.rootMenu.handleItemClick(this.index)
      }
    },
    toggleSubmenu(defaultOpen) {
      this.showSubmenu =
        defaultOpen === undefined
          ? !this.showSubmenu
          : defaultOpen.includes(this.index)
      const action = this.showSubmenu ? 'open' : 'close'
      this.rootMenu.handleToggerSubmenu(action, this.index)
    }
  },
  watch: {
    defaultOpen(data) {
      this.toggleSubmenu(data)
    }
  }
}
</script>

<style scoped>
.vb-menu-item__icon {
  margin-right: 5px;
}
.submenu-icon {
  position: relative;
  float: right;
  color: #b5b5b5;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.is-opened {
  transform: rotate(180deg);
}
</style>
