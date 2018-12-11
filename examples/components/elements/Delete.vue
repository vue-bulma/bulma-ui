<template>
  <div class="container">
    <span
      id="Basic"
      class="title"
    >Basic:</span>
    <vb-box>
      <vb-delete></vb-delete>
    </vb-box>
    <span
      id="size"
      class="title"
    >Size:</span>
    <vb-box>
      <vb-delete size="small"></vb-delete>
      <vb-delete></vb-delete>
      <vb-delete size="medium"></vb-delete>
      <vb-delete size="large"></vb-delete>
    </vb-box>
    <span
      id="Combinations"
      class="title"
    >Combinations:</span>
    <vb-box>

    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'DeleteExamples'
}
</script>
