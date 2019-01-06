<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-progress value="15"></vb-progress>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors and value">
      <demo>
        <vb-progress value="10" max="200"></vb-progress>
        <vb-progress value="10" max="100"></vb-progress>
        <vb-progress color="primary" value="10"></vb-progress>
        <vb-progress color="info" value="20"></vb-progress>
        <vb-progress color="success" value="30"></vb-progress>
        <vb-progress color="warning" value="40"></vb-progress>
        <vb-progress color="danger" value="50"></vb-progress>
        <vb-progress color="white" value="60"></vb-progress>
        <vb-progress color="light" value="70"></vb-progress>
        <vb-progress color="dark" value="80"></vb-progress>
        <vb-progress color="black" value="90"></vb-progress>
        <vb-progress color="link" value="100"></vb-progress>
        <pre slot="code">{{code.colors}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-progress value="10" size="small"></vb-progress>
        <vb-progress value="20"></vb-progress>
        <vb-progress value="40" size="medium"></vb-progress>
        <vb-progress value="80" size="large"></vb-progress>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/elements/progress.js'

export default {
  name: 'ProgressExamples',
  data() {
    return {
      code: code
    }
  }
}
</script>
