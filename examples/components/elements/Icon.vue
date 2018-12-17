<template>
  <div>
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
      ></vb-icon>
    </vb-box>
    <vb-title
      id="Colors"
      type="title"
    >Colors:</vb-title>
    <vb-box class="box-background">
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="primary"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="info"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="success"
      ></vb-icon>
      <vb-icon
        class="icon-background-dark"
        name="fa fa-home"
        color="warning"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="danger"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="white"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="light"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="dark"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="black"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        color="link"
      ></vb-icon>
    </vb-box>
    <vb-title
      id="Sizes"
      type="title"
    >Container Sizes:</vb-title>
    <vb-box>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="small"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="medium"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="large"
      ></vb-icon>
    </vb-box>
    <vb-title
      id="iconSize"
      type="title"
    >Icon Sizes:</vb-title>
    <vb-box class="iconSize-block">
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="large"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="large"
        iconSize="lg"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="large"
        iconSize="2x"
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-home"
        size="large"
        iconSize="3x"
      ></vb-icon>
    </vb-box>
    <vb-title
      id="Animated"
      type="title"
    >Animated:</vb-title>
    <vb-box class="iconSize-block">
      <vb-icon
        class="icon-background"
        name="fa fa-spinner"
        size="large"
        animated
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-refresh"
        size="large"
        animated
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-circle-o-notch"
        size="large"
        animated
      ></vb-icon>
      <vb-icon
        class="icon-background"
        name="fa fa-repeat"
        size="large"
        animated
      ></vb-icon>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'IconExamples'
}
</script>
<style lang="scss" scoped>
.icon-background {
  background-color: #ffdd57;
  margin-right: 1em;
}
.icon-background-dark {
  background-color: #363636;
  margin-right: 1em;
}
.iconSize-block {
  display: flex;
}
</style>
