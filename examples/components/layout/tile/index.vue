<template>
  <vb-container id="tile">
    <div id="basic" class="component-title">Basic:</div>

    <vb-title type="subtitle">Size in 1 ... 12</vb-title>

    <example-basic></example-basic>

    <div id="nesting" class="component-title">Nesting requirements:</div>

    <example-nest></example-nest>

    <div id="3-columns" class="component-title">3 columns:</div>

    <example-columns3></example-columns3>

    <div id="4-columns" class="component-title">4 columns:</div>

    <example-columns4></example-columns4>
  </vb-container>
</template>

<script>
import ExampleBasic from './Basic'
import ExampleNest from './Nest'
import ExampleColumns3 from './Columns3'
import ExampleColumns4 from './Columns4'

export default {
  name: 'Tile',
  components: { ExampleBasic, ExampleNest, ExampleColumns3, ExampleColumns4 }
}
</script>

<style lang="scss" scoped>
#tile {
  padding: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
}
</style>
