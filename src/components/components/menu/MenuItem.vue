<template>
  <li @click.stop="active">
    <span @click="toggle">
      <router-link :class="classes" :to="to">
        <vb-icon v-if="hasIcon" class="icon-margin" :name="icon"></vb-icon>
        <slot></slot>
        <vb-icon
          v-if="!!$slots.subMenu"
          class="icon-right"
          :class="{'icon-rotate': isOpen}"
          name="fa fa-angle-down"
        ></vb-icon>
      </router-link>
    </span>
    <div v-show="isOpen">
      <slot name="subMenu"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'VbMenuItem',

  props: {
    to: {
      type: [Object, String],
      default: ''
    },
    icon: String,
    index: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      actived: false,
      data: []
    }
  },
  computed: {
    classes() {
      return { 'is-active': this.actived }
    },
    hasIcon() {
      return this.icon
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    findComponentUpward(context, componentName) {
      let parent = context.$parent
      let name = parent.$options.name
      if (name === componentName) {
        parent = parent.$parent
      }
      return parent
    },
    menuList(menus) {
      let menuList = menus.filter(item => {
        return item.$options.name === 'VbMenu'
      })
      return menuList
    },
    filterData(array) {
      array.forEach(item => {
        item.$children.forEach(o => {
          if (o.$options.name === 'VbMenuItem') {
            this.data.push(o)
            if (o.$children.length) {
              this.filterData(o.$children)
            }
          }
        })
      })
    },
    active() {
      this.data.forEach(item => {
        item.actived =
          this.index === item.index
            ? item.$slots.subMenu
              ? false
              : true
            : false
      })
    }
  },
  mounted() {
    let parent = this.findComponentUpward(this, 'VbMenu')
    let menuData = this.menuList(parent.$children)
    this.filterData(menuData)
  }
}
</script>

<style scoped>
.icon-right {
  position: relative;
  float: right;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.icon-rotate {
  transform: rotate(180deg);
}
.icon-margin {
  margin-right: 5px;
}
</style>
