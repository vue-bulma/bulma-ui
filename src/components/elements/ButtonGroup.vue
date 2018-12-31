<script>
import Vue from 'vue'

export default Vue.component('VbButtonGroup', {
  render(h) {
    const { default: nodes = [] } = this.$slots
    return h(
      'div',
      { class: 'field is-grouped' },
      nodes.map(item => h('p', { class: 'control' }, [item]))
    )
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/button.sass';
@import '~bulma/sass/elements/form.sass';
</style>
