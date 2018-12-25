<template>
  <li>
    <span @click="toggle">
      <router-link :class="classes" :to="to">
        <vb-icon class="icon-margin" v-if="hasIcon" :name="icon"></vb-icon>
        <slot></slot>
        <vb-icon
          v-if="$slots.sub"
          class="icon-right"
          :class="{'icon-rotate': isOpen}"
          name="fa fa-angle-down"
        ></vb-icon>
      </router-link>
    </span>
    <div v-show="isOpen">
      <slot name="sub"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'VbMenuItem',
  props: {
    actived: {
      type: Boolean
    },
    to: {
      type: [Object, String],
      default: ''
    },
    icon: String
  },
  data() {
    return {
      isOpen: false
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
    }
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
