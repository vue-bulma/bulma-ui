<template>
  <vb-section>
    <example-section-item title="Basic">
      <example-basic></example-basic>
    </example-section-item>

    <example-section-item title="Horizontal">
      <example-horizontal></example-horizontal>
    </example-section-item>

    <example-section-item title="Sizes">
      <example-size></example-size>
    </example-section-item>

    <example-section-item title="Addons">
      <example-addons></example-addons>
    </example-section-item>

    <example-section-item title="Group">
      <example-group></example-group>
    </example-section-item>
  </vb-section>
</template>

<script>
import ExampleBasic from './Basic'
import ExampleHorizontal from './Horizontal'
import ExampleAddons from './Addons'
import ExampleGroup from './Group'
import ExampleSize from './Size'

export default {
  name: 'Form',
  components: {
    ExampleBasic,
    ExampleHorizontal,
    ExampleAddons,
    ExampleGroup,
    ExampleSize
  }
}
</script>

<style lang="scss" scoped>
.help.is-danger {
  color: #ff3860;
}
</style>
