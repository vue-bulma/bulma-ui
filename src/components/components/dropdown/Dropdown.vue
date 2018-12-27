<template>
  <div :class="classes">
    <div class="dropdown-trigger" @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const TRIGGER = ['click', 'hover']

export default {
  name: 'VbDropdown',
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        return TRIGGER.includes(value)
      }
    },
    rightAligned: Boolean,
    dropup: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    isHover() {
      return this.trigger === 'hover'
    },
    classes() {
      const { rightAligned, isActive, dropup, isHover } = this
      return {
        dropdown: true,
        'is-hoverable': isHover,
        'is-active': !isHover && isActive,
        'is-right': rightAligned,
        'is-up': dropup
      }
    }
  },
  watch: {
    isActive() {
      if (this.isActive) document.addEventListener('click', this.handleClick)
    }
  },
  methods: {
    handleClick() {
      if (!this.isHover) {
        document.removeEventListener('click', this.handleClick)
        this.isActive = !this.isActive
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/dropdown';
</style>
