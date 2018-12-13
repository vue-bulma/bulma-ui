<template>
  <div class="container">
    <span
      id="Basic"
      class="title"
    >Basic:</span>
    <vb-box class="box-bottom">
      <vb-title type='title'>Title</vb-title>
      <vb-title type='subtitle'>Subtitle</vb-title>
    </vb-box>
    <span
      id="Sizes"
      class="title"
    >Sizes:</span>
    <vb-box>
      <vb-title
        type='title'
        size='1'
      >Title</vb-title>
      <vb-title
        type='title'
        size='2'
      >Title</vb-title>
      <vb-title
        type='title'
        size='3'
      >Title</vb-title>
      <vb-title
        type='title'
        size='4'
      >Title</vb-title>
      <vb-title
        type='title'
        size='5'
      >Title</vb-title>
      <vb-title
        type='title'
        size='6'
      >Title</vb-title>
      <br />
      <vb-title
        type='subtitle'
        size='1'
      >Subtitle</vb-title>
      <vb-title
        type='subtitle'
        size='2'
      >Subtitle</vb-title>
      <vb-title
        type='subtitle'
        size='3'
      >Subtitle</vb-title>
      <vb-title
        type='subtitle'
        size='4'
      >Subtitle</vb-title>
      <vb-title
        type='subtitle'
        size='5'
      >Subtitle</vb-title>
      <vb-title
        type='subtitle'
        size='6'
      >Subtitle</vb-title>
    </vb-box>
    <span
      id="Combinations"
      class="title"
    >Combinations:</span>
    <vb-box class="box-bottom">
      <vb-title
        type='title'
        spaced
      >Title</vb-title>
      <vb-title type='subtitle'>Subtitle</vb-title>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'TitleExamples'
}
</script>
<style>
.box-bottom :not(:last-child) {
  margin-bottom: 1em !important;
}
</style>

