<template>
  <div :class="classes">
    <div class="dropdown-trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const TRIGGER = ['click', 'hover', 'custom']
const PLACEMENTS = ['left', 'right', 'up']

export default {
  name: 'VbDropdown',
  provide() {
    return {
      vbDropdown: this
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        return TRIGGER.includes(value)
      }
    },
    placement: {
      type: [String, Array],
      validdator(value) {
        if (Array.isArray(value)) {
          return value.every(v => PLACEMENTS.includes(v))
        } else if (typeof value) {
          return PLACEMENTS.includes(value)
        }
      }
    },
    visible: Boolean
  },
  data() {
    return {
      localActived: false
    }
  },
  computed: {
    placementArr() {
      const { placement } = this
      return Array.isArray(placement) ? placement : [placement]
    },
    classes() {
      const { placementArr, localActived, dropup, trigger, visible } = this
      const isHover = trigger === 'hover'
      const actived = trigger === 'click' ? localActived : visible

      return {
        dropdown: true,
        'is-hoverable': isHover,
        'is-active': !isHover && actived,
        'is-right': placementArr.includes('right'),
        'is-up': placementArr.includes('up')
      }
    }
  },
  mounted() {
    if (this.trigger === 'click') {
      document.addEventListener('click', this.handleDocumnetClick)
    }
  },
  beforeDestroy() {
    if (this.trigger === 'click') {
      document.removeEventListener('click', this.handleDocumnetClick)
    }
  },
  methods: {
    handleDocumnetClick(event) {
      if (!this.$el.contains(event.target)) {
        this.localActived = false
      } else {
        this.localActived = !this.localActived
      }
    },
    // Item click can not trigger document click.
    handleItemClick(name) {
      if (name) {
        this.$emit('selected', name)
      }

      if (this.trigger === 'click') {
        this.localActived = !this.localActived
      }
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/dropdown';
</style>
