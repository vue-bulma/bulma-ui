<template>
  <div class="container">
    <span
      id="basic"
      class="title"
    >Basic:</span>

    <vb-box>
      <vb-button>Button</vb-button>
    </vb-box>

    <span
      id="colors"
      class="title"
    >Colors:</span>

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

    <span
      id="sizes"
      class="title"
    >Sizes:</span>

    <vb-box>
      <vb-button size="small">Small</vb-button>
      <vb-button>Default</vb-button>
      <vb-button size="normal">Normal</vb-button>
      <vb-button size="medium">Medium</vb-button>
      <vb-button size="large">Large</vb-button>
    </vb-box>

    <span
      id="displays"
      class="title"
    >Displays:</span>

    <vb-box>
      <vb-button fullwidth>Fullwidth</vb-button>
    </vb-box>

    <span
      id="styles"
      class="title"
    >Styles:</span>

    <vb-box>
      <vb-button outlined>Outlined</vb-button>
      <vb-button
        type="primary"
        outlined
      >primary</vb-button>
      <vb-button
        type="link"
        outlined
      >link</vb-button>
      <vb-button
        type="info"
        outlined
      >Info</vb-button>
      <vb-button
        type="warning"
        outlined
      >Warning</vb-button>
      <vb-button
        type="success"
        outlined
      >Success</vb-button>
      <vb-button
        type="danger"
        outlined
      >Danger</vb-button>
    </vb-box>

    <vb-box class="button-invert">
      <vb-button
        type="primary"
        inverted
        outlined
      >Invert Outlined</vb-button>
      <vb-button
        type="link"
        inverted
        outlined
      >Invert Outlined</vb-button>
      <vb-button
        type="info"
        inverted
        outlined
      >Invert Outlined</vb-button>
      <vb-button
        type="success"
        inverted
        outlined
      >Invert Outlined</vb-button>
      <vb-button
        type="danger"
        inverted
        outlined
      >Invert Outlined</vb-button>
    </vb-box>

    <span
      id="rounded"
      class="title"
    >Rounded:</span>

    <vb-box>
      <vb-button rounded>Outlined</vb-button>
      <vb-button
        type="primary"
        rounded
      >Rounded</vb-button>
      <vb-button
        type="link"
        rounded
      >Rounded</vb-button>
      <vb-button
        type="info"
        rounded
      >Rounded</vb-button>
      <vb-button
        type="success"
        rounded
      >Rounded</vb-button>
      <vb-button
        type="danger"
        rounded
      >Rounded</vb-button>
    </vb-box>

    <span
      id="states"
      class="title"
    >States:</span>

    <vb-box>
      <vb-button state="hovered">Hover</vb-button>
      <vb-button state="focused">Focus</vb-button>
      <vb-button state="active">Active</vb-button>
      <vb-button state="loading">Loading</vb-button>
      <vb-button state="static">Static</vb-button>
    </vb-box>

    <span
      id="disabled"
      class="title"
    >Disabled:</span>
    <vb-box>
      <vb-button disabled>Disable</vb-button>
    </vb-box>
    <span
      id="icons"
      class="title"
    >With Font Awesome icons:</span>
    <vb-box class="button-icon">
      <vb-button>
        <vb-icon name="fa fa-home"></vb-icon>
      </vb-button>
      <vb-button>
        <vb-icon name="fa fa-home"></vb-icon>
        <span>home</span>
      </vb-button>
    </vb-box>
    <span
      id="group"
      class="title"
    >Button group:</span>
    <vb-box>
      <vb-button-group>
        <vb-button type="primary">Save</vb-button>
        <vb-button>Cancel</vb-button>
        <vb-button type="danger">Delete</vb-button>
      </vb-button-group>
    </vb-box>
    <span
      id="addons"
      class="title"
    >Button addons:</span>
    <vb-box class="button-icon">
      <vb-button-addons>
        <vb-button>
          <vb-icon name="fa fa-align-left"></vb-icon>
          <span>left</span>
        </vb-button>
        <vb-button>
          <vb-icon name="fa fa-align-center"></vb-icon>
          <span>center</span>
        </vb-button>
        <vb-button>
          <vb-icon name="fa fa-align-right"></vb-icon>
          <span>right</span>
        </vb-button>
      </vb-button-addons>
    </vb-box>
    <span
      id="ButtonsList"
      class="title"
    >Buttons List:</span>
    <vb-box>
      <vb-buttons-List>
        <vb-button>
          Save changes
        </vb-button>
        <vb-button>
          Save and continue
        </vb-button>
        <vb-button>
          Cancel
        </vb-button>
      </vb-buttons-List>
    </vb-box>
    <span
      id="ButtonsListAddons"
      class="title"
    >Buttons List addons:</span>
    <vb-box>
      <vb-buttons-List type="addons">
        <vb-button type="success">
          Save changes
        </vb-button>
        <vb-button>
          Save and continue
        </vb-button>
        <vb-button>
          Cancel
        </vb-button>
      </vb-buttons-List>
    </vb-box>
    <vb-box>
      <vb-buttons-List
        type="addons"
        align="centered"
      >
        <vb-button>
          Save changes
        </vb-button>
        <vb-button type="info">
          Save and continue
        </vb-button>
        <vb-button>
          Cancel
        </vb-button>
      </vb-buttons-List>
    </vb-box>
    <vb-box>
      <vb-buttons-List
        type="addons"
        align="right"
      >
        <vb-button>
          Save changes
        </vb-button>
        <vb-button>
          Save and continue
        </vb-button>
        <vb-button type="danger">
          Cancel
        </vb-button>
      </vb-buttons-List>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'ButtonExamples'
}
</script>

<style lang="scss" scoped>
.button-invert {
  background-color: #00d1b2;
}
.button-icon :not(:last-child) {
  margin-bottom: 0;
}
</style>
