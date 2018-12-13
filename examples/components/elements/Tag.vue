<template>
  <div class="container">
    <span
      id="Basic"
      class="title"
    >Basic:</span>
    <vb-box>
      <vb-tag>Tag label</vb-tag>
    </vb-box>
    <span
      id="Colors"
      class="title"
    >Colors:</span>
    <vb-box>
      <vb-tag color="black">Tag label</vb-tag>
      <vb-tag color="dark">Tag label</vb-tag>
      <vb-tag color="light">Tag label</vb-tag>
      <vb-tag color="white">Tag label</vb-tag>
      <vb-tag color="primary">Tag label</vb-tag>
      <vb-tag color="link">Tag label</vb-tag>
      <vb-tag color="info">Tag label</vb-tag>
      <vb-tag color="success">Tag label</vb-tag>
      <vb-tag color="warning">Tag label</vb-tag>
      <vb-tag color="danger">Tag label</vb-tag>
    </vb-box>
    <span
      id="Sizes"
      class="title"
    >Sizes:</span>
    <vb-box>
      <vb-tag>Tag label</vb-tag>
      <vb-tag size="medium">Tag label</vb-tag>
      <vb-tag size='large'>Tag label</vb-tag>
    </vb-box>
    <span
      id="Modifiers"
      class="title"
    >Modifiers:</span>
    <vb-box class="box-display">
      <vb-tag rounded>Tag label</vb-tag>
      <vb-tag del></vb-tag>
    </vb-box>
    <span
      id="Combinations"
      class="title"
    >Combinations:</span>
    <vb-box>
      <vb-tag color="success">
        Bar
        <vb-delete size="small"></vb-delete>
      </vb-tag>
      <vb-tag
        color="warning"
        size='medium'
      >
        Bar
        <vb-delete size="small"></vb-delete>
      </vb-tag>
      <vb-tag
        color="danger"
        size='large'
      >
        Bar
        <vb-delete></vb-delete>
      </vb-tag>
    </vb-box>
    <span
      id="Tags"
      class="title"
    >Tags:</span>
    <vb-box>
      <vb-tags>
        <vb-tag color="primary">Vue</vb-tag>
        <vb-tag color="dark">Bulma</vb-tag>
      </vb-tags>
      <vb-tags>
        <vb-tag color="danger">Vue</vb-tag>
        <vb-tag del></vb-tag>
      </vb-tags>
    </vb-box>
    <span
      id="TagsAddons"
      class="title"
    >Tags Addons:</span>
    <vb-box>
      <vb-tags addons>
        <vb-tag color="primary">Vue</vb-tag>
        <vb-tag color="dark">Bulma</vb-tag>
      </vb-tags>
      <vb-tags addons>
        <vb-tag color="danger">Vue</vb-tag>
        <vb-tag del></vb-tag>
      </vb-tags>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'TagExamples'
}
</script>
<style>
.box-display {
  display: flex !important;
}
</style>
