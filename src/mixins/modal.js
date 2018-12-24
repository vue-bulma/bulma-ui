const ModalMixin = {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      tyep: Boolean,
      default: true
    },
    showMask: {
      tyep: Boolean,
      default: true
    }
  },
  data() {
    return {
      isActive: this.isShow
    }
  },
  computed: {
    classes() {
      return ['modal', 'is-active']
    }
  },
  watch: {
    isShow(val) {
      this.isActive = val
    },
    isActive(val) {
      this.$emit('update:isShow', val)
    }
  },
  methods: {
    handleMask() {
      if (this.maskClosable && this.showMask) {
        this.deactive()
      }
    },
    deactive() {
      this.isActive = false
    }
  }
}

export default ModalMixin
