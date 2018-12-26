<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-progress></vb-progress>
      </demo>
    </example-section-item>

    <example-section-item title="Colors and value">
      <demo>
        <vb-progress color="primary" value="10" max="100"></vb-progress>
        <vb-progress color="info" value="20" max="100"></vb-progress>
        <vb-progress color="success" value="30" max="100"></vb-progress>
        <vb-progress color="warning" value="40" max="100"></vb-progress>
        <vb-progress color="danger" value="50" max="100"></vb-progress>
        <vb-progress color="white" value="60" max="100"></vb-progress>
        <vb-progress color="light" value="70" max="100"></vb-progress>
        <vb-progress color="dark" value="80" max="100"></vb-progress>
        <vb-progress color="black" value="90" max="100"></vb-progress>
        <vb-progress color="link" value="100" max="100"></vb-progress>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-progress color="primary" size="small" value="10" max="100"></vb-progress>
        <vb-progress color="primary" value="20" max="100"></vb-progress>
        <vb-progress color="primary" value="40" max="100" size="medium"></vb-progress>
        <vb-progress color="primary" value="80" max="100" size="large"></vb-progress>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'ProgressExamples'
}
</script>
