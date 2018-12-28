<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <example-basic></example-basic>
      </demo>
    </example-section-item>

    <example-section-item title="Nesting requirements">
      <demo>
        <example-nest></example-nest>
      </demo>
    </example-section-item>

    <example-section-item title="3 columns">
      <demo>
        <example-columns3></example-columns3>
      </demo>
    </example-section-item>

    <example-section-item title="4 columns">
      <demo>
        <example-columns4></example-columns4>
      </demo>
    </example-section-item>
  </vb-section>
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
