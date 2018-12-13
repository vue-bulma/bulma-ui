<template>
  <div class="container">
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
      <vb-tag>Tag label</vb-tag>
    </vb-box>
    <vb-title
      id="Colors"
      type="title"
    >Colors:</vb-title>
    <vb-box>
      <vb-tags>
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
      </vb-tags>
    </vb-box>
    <vb-title
      id="Sizes"
      type="title"
    >Sizes:</vb-title>
    <vb-box>
      <vb-tags>
        <vb-tag>Tag label</vb-tag>
        <vb-tag size="medium">Tag label</vb-tag>
        <vb-tag size='large'>Tag label</vb-tag>
      </vb-tags>
    </vb-box>
    <vb-title
      id="Modifiers"
      type="title"
    >Modifiers:</vb-title>
    <vb-box class="box-display">
      <vb-tags>
        <vb-tag rounded>Tag label</vb-tag>
        <vb-tag del></vb-tag>
      </vb-tags>
    </vb-box>
    <vb-title
      id="Combinations"
      type="title"
    >Combinations:</vb-title>
    <vb-box>
      <vb-tags>
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
      </vb-tags>
    </vb-box>
    <vb-title
      id="Tags"
      type="title"
    >Tags:</vb-title>
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
    <vb-title
      id="TagsAddons"
      type="title"
    >Tags Addons:</vb-title>
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
