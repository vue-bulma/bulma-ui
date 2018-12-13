<template>
  <div class="container">
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
      <vb-delete></vb-delete>
    </vb-box>
    <vb-title
      id="size"
      type="title"
    >Size:</vb-title>
    <vb-box>
      <span class="margin">
        <vb-delete size="small"></vb-delete>
      </span>
      <span class="margin">
        <vb-delete></vb-delete>
      </span>
      <span class="margin">
        <vb-delete size="medium"></vb-delete>
      </span>
      <span class="margin">
        <vb-delete size="large"></vb-delete>
      </span>
    </vb-box>
    <vb-title
      id="Combinations"
      type="title"
    >Combinations:</vb-title>
    <vb-box>

      <vb-tag color="danger"> Hello World <vb-delete size="small"></vb-delete>
      </vb-tag>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'DeleteExamples'
}
</script>
<style>
.margin {
  margin-right: 1em;
}
</style>
