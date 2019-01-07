<template>
  <vb-section>
    <example-basic></example-basic>

    <example-border></example-border>

    <example-stripes></example-stripes>

    <example-narrower></example-narrower>

    <example-hover></example-hover>

    <example-fullwidth></example-fullwidth>

    <example-style></example-style>

    <example-group-head></example-group-head>

    <example-selection></example-selection>

    <example-custom></example-custom>

    <example-expanded></example-expanded>

    <example-span></example-span>

    <!-- <example-combine></example-combine> -->
  </vb-section>
</template>

<script>
import ExampleBasic from './Basic'
import ExampleBorder from './Border'
import ExampleStripes from './Stripes'
import ExampleNarrower from './Narrower'
import ExampleHover from './Hover'
import ExampleFullwidth from './Fullwidth'
import ExampleStyle from './Style'
import ExampleCustom from './CustomTemplate'
import ExampleExpanded from './Expanded'
import ExampleSpan from './Span'
import ExampleGroupHead from './GroupHead'
import ExampleSelection from './Selection'
// import ExampleCombine from './Combine'

export default {
  name: 'TableExamples',
  components: {
    ExampleBasic,
    ExampleBorder,
    ExampleStripes,
    ExampleNarrower,
    ExampleHover,
    ExampleFullwidth,
    ExampleStyle,
    ExampleCustom,
    ExampleExpanded,
    ExampleSpan,
    // ExampleCombine,
    ExampleSelection,
    ExampleGroupHead
  }
}
</script>
