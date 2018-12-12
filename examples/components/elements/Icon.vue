<template>
  <div class="container">
    <span
      id="Basic"
      class="title"
    >Basic:</span>
    <vb-box>
      <vb-icon class="icon-background" name="fa fa-home"></vb-icon>
    </vb-box>
     <span
      id="Colors"
      class="title"
    >Colors:</span>
    <vb-box class="box-background">
      <vb-icon class="icon-background" name="fa fa-home" color="primary"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="info"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="success"></vb-icon>
      <vb-icon class="icon-background-dark" name="fa fa-home" color="warning"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="danger"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="white"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="light"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="dark"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="black"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" color="link"></vb-icon>
    </vb-box>
       <span
      id="Sizes"
      class="title"
    >Container Sizes:</span>
    <vb-box>
      <vb-icon class="icon-background" name="fa fa-home" size="small" ></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" ></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" size="medium" ></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" size="large" ></vb-icon>
    </vb-box>
           <span
      id="iconSize"
      class="title"
    >Icon Sizes:</span>
    <vb-box class="iconSize-block">
      <vb-icon class="icon-background" name="fa fa-home" size="large"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="lg"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="2x"></vb-icon>
      <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="3x"></vb-icon>
    </vb-box>
     <span
      id="Animated"
      class="title"
    >Animated:</span>
    <vb-box class="iconSize-block">
      <vb-icon class="icon-background" name="fa fa-spinner" size="large" animated></vb-icon>
      <vb-icon class="icon-background" name="fa fa-refresh" size="large" animated></vb-icon>
      <vb-icon class="icon-background" name="fa fa-circle-o-notch" size="large" animated></vb-icon>
      <vb-icon class="icon-background" name="fa fa-repeat" size="large" animated></vb-icon>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'IconExamples'
}
</script>
<style lang="scss" scoped>
.icon-background{
background-color: #ffdd57
}
.icon-background-dark{
background-color: #363636
}
.iconSize-block{
display: flex
}
</style>