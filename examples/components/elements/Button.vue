<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-button>Button</vb-button>
    </vb-box>

    <span id="colors" class="title">Colors:</span>

    <vb-box>
      <vb-button type="primary">Primary</vb-button>
      <vb-button type="link">Link</vb-button>
      <vb-button type="info">Info</vb-button>
      <vb-button type="success">Success</vb-button>
      <vb-button type="warning">Warning</vb-button>
      <vb-button type="danger">Danger</vb-button>
    </vb-box>

    <vb-box>
      <vb-button type="white">White</vb-button>
      <vb-button type="light">Light</vb-button>
      <vb-button type="dark">Dark</vb-button>
      <vb-button type="black">Black</vb-button>
      <vb-button type="text">Text</vb-button>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <vb-button size="small">Small</vb-button>
      <vb-button>Default</vb-button>
      <vb-button size="normal">Normal</vb-button>
      <vb-button size="medium">Medium</vb-button>
      <vb-button size="large">Large</vb-button>
    </vb-box>

    <span id="displays" class="title">Displays:</span>

    <vb-box>
      <vb-button fullwidth>Fullwidth</vb-button>
    </vb-box>

    <span id="styles" class="title">Styles:</span>

    <vb-box>
      <vb-button outlined>Outlined</vb-button>
      <vb-button type="primary" outlined>primary</vb-button>
      <vb-button type="link" outlined>link</vb-button>
      <vb-button type="info" outlined>Info</vb-button>
      <vb-button type="warning" outlined>Warning</vb-button>
      <vb-button type="success" outlined>Success</vb-button>
      <vb-button type="danger" outlined>Danger</vb-button>
    </vb-box>

    <vb-box class="button-invert">
      <vb-button type="primary" inverted outlined>Invert Outlined</vb-button>
    </vb-box>

    <span id="rounded" class="title">Rounded:</span>

    <vb-box>
      <vb-button rounded>Outlined</vb-button>
      <vb-button type="primary" rounded>Rounded</vb-button>
      <vb-button type="link" rounded>Rounded</vb-button>
      <vb-button type="info" rounded>Rounded</vb-button>
      <vb-button type="success" rounded>Rounded</vb-button>
      <vb-button type="danger" rounded>Rounded</vb-button>
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <vb-button state="hovered">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        Hover
      </vb-button>
      <vb-button state="focused">Focus</vb-button>
      <vb-button state="active">Active</vb-button>
      <vb-button state="loading">Loading</vb-button>
      <vb-button state="static">Static</vb-button>
    </vb-box>

    <span id="disabled" class="title">Disabled:</span>

    <vb-box>
      <vb-button disabled>Disable</vb-button>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'ButtonExamples',
}
</script>

<style lang="scss" scoped>
.button-invert {
  background-color: #00d1b2;
}
</style>
