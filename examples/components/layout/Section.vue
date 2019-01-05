<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-section>
          <vb-hero title="Section1" color="primary"></vb-hero>
        </vb-section>

        <vb-section>
          <vb-hero title="Section2" color="info"></vb-hero>
        </vb-section>
        <pre slot="code">{{ code }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/layout/section.js'

export default {
  name: 'Section',
  data() {
    return {
      code
    }
  }
}
</script>
