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
    deactive() {
      this.isActive = false
    }
  }
}

export default ModalMixin
