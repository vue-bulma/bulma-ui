<template>
  <div class="table-container">
    <table
      class="table"
      :class="classes"
    >
      <slot name="header">
        <thead>
          <slot></slot>
        </thead>
      </slot>
      <tbody>
        <slot></slot>
      </tbody>
      <slot name="footer"></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VbTable',
  props: {
    bordered: Boolean,
    striped: Boolean,
    narrow: Boolean,
    hoverable: Boolean,
    fullwidth: Boolean
  },
  computed: {
    classes() {
      const { bordered, striped, narrow, hoverable, fullwidth } = this
      const obj = []
      if (bordered) obj.push('is-bordered')
      if (striped) obj.push('is-striped')
      if (narrow) obj.push('is-narrow')
      if (hoverable) obj.push('is-hoverable')
      if (fullwidth) obj.push('is-fullwidth')
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/table';
</style>
