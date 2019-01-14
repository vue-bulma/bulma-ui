<script>
import Vue from 'vue'

export default Vue.component('VbDropdownMenu', {
  render() {
    const content = this.renderContent()
    return (
      <div class="dropdown-menu">
        <div class="dropdown-content dropdown-menu">{content}</div>
      </div>
    )
  },
  methods: {
    renderContent() {
      const { default: vNodes = [] } = this.$slots

      return vNodes.map(vNode => {
        const { componentOptions: options = {} } = vNode
        const divided = options.propsData && options.propsData.divided

        return divided !== undefined && divided !== false
          ? [<hr class="dropdown-divider" />, vNode]
          : vNode
      })
    }
  }
})
</script>
