<template>
  <li :class="{ 'submenu-opened': showSubmenu }">
    <a :class="classes" @click="handleClick">
      <vb-icon v-if="icon" :name="icon" class="vb-menu-item__icon"></vb-icon>

      <slot></slot>
    </a>

    <slot v-if="showSubmenu" name="submenu"></slot>
  </li>
</template>

<script>
import VbIcon from '@/components/elements/Icon'

export default {
  name: 'VbMenuItem',
  components: { VbIcon },
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
      const { rootMenu, index, $slots } = this
      return {
        'vb-menu-item__label': true,
        'has-submenu': !!$slots.submenu,
        'is-active': rootMenu.actived === index
      }
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

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

$menu-collapse-arrow: $link !default;

li {
  .vb-menu-item__icon {
    margin-right: 5px;
  }
  .vb-menu-item__label {
    position: relative;
    align-items: center;
    display: flex;
  }
  .has-submenu:after {
    content: ' ';
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    display: block;
    height: 0.625em;
    width: 0.625em;
    margin-top: -0.375em;
    right: 1.125em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    border-color: $menu-collapse-arrow;
    transform: rotate(-45deg);
    -webkit-transform-origin: 35% 65%;
    transform-origin: 35% 65%;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  }
  &.submenu-opened {
    .has-submenu:after {
      transform: rotate(135deg);
    }
  }
}
</style>
