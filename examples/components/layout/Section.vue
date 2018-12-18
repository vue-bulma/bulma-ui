<template>
  <vb-container id="section" view="fullhd">
    <div id="basic" class="component-title">Basic:</div>

    <vb-section>
      <vb-hero title="Section1" color="primary"></vb-hero>
    </vb-section>

    <vb-section>
      <vb-hero title="Section2" color="info"></vb-hero>
    </vb-section>
  </vb-container>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style lang="scss" scoped>
#section {
  padding: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
}
</style>
