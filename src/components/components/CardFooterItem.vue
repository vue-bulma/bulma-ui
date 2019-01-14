<script>
import Vue from 'vue'

export default Vue.component('VbCardFooterItem', {
  props: {
    static: Boolean
  },
  render() {
    if (this.static) {
      return <p class="card-footer-item">{this.$slots.default}</p>
    } else {
      return (
        <a class="card-footer-item" on-click={this.handleClick}>
          {this.$slots.default}
        </a>
      )
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
})
</script>
