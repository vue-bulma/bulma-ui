let code = {}
code.basic = `\
<template>
  <vb-icon class="icon-background" name="fa fa-home"></vb-icon>      
</template>
`
code.colors = `\
<template>
  <vb-icon name="fa fa-home" color="primary"></vb-icon>
  <vb-icon name="fa fa-info-circle" color="info"></vb-icon>
  <vb-icon name="fa fa-check-square" color="success"></vb-icon>
  <vb-icon name="fa fa-exclamation-triangle" color="warning"></vb-icon>
  <vb-icon name="fa fa-ban" color="danger"></vb-icon>
  <vb-icon class="icon-background-dark" name="fa fa-circle" color="white"></vb-icon>
  <vb-icon class="icon-background-dark" name="fa fa-flag" color="light"></vb-icon>
  <vb-icon name="fa fa-shield" color="dark"></vb-icon>
  <vb-icon name="fa fa-camera" color="black"></vb-icon>
  <vb-icon name="fa fa-user-circle" color="link"></vb-icon>
</template>
`
code.containerSize = `\
<template>
  <vb-icon class="icon-background" name="fa fa-home" size="small"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home" size="medium"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home" size="large"></vb-icon>      
</template>
`

code.iconSize = `\
<template>
  <vb-icon class="icon-background" name="fa fa-home" size="large"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="lg"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="2x"></vb-icon>
  <vb-icon class="icon-background" name="fa fa-home" size="large" iconSize="3x"></vb-icon>      
</template>
`
code.animated = `\
<template>
  <vb-icon class="icon-background" name="fa fa-spinner" size="large" animated></vb-icon>
  <vb-icon class="icon-background" name="fa fa-refresh" size="large" animated></vb-icon>
  <vb-icon class="icon-background" name="fa fa-circle-o-notch" size="large" animated></vb-icon>
  <vb-icon class="icon-background" name="fa fa-repeat" size="large" animated></vb-icon>    
</template>
`
export default code
