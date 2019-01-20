<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo :code="code.basic">
        <vb-section>
          <vb-hero color="primary">
            <vb-title>Section</vb-title>
          </vb-hero>
        </vb-section>

        <vb-section>
          <vb-hero color="info">
            <vb-title>Section2</vb-title>
          </vb-hero>
        </vb-section>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <vb-content>
        <p>You can use the <code>size</code> to change the spacing.</p>
      </vb-content>

      <demo :code="code.sizes">
        <vb-section>
          <vb-hero color="primary">
            <vb-title>Default</vb-title>
          </vb-hero>
        </vb-section>

        <hr>

        <vb-section size="medium">
          <vb-hero color="info">
            <vb-title>Medium</vb-title>
          </vb-hero>
        </vb-section>

        <hr>

        <vb-section size="large">
          <vb-hero color="warning">
            <vb-title>Large</vb-title>
          </vb-hero>
        </vb-section>
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
