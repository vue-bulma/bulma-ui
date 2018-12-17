<template>
  <div>
    <span id="basic" class="title">Basic:</span>

    <example-basic></example-basic>

    <span id="horizontal" class="title">Horizontal:</span>

    <example-horizontal></example-horizontal>

    <span id="sizes" class="title">Sizes:</span>

    <example-size></example-size>

    <span id="addons" class="title">Addons:</span>

    <example-addons></example-addons>

    <span id="group" class="title">Group:</span>

    <example-group></example-group>
  </div>
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
