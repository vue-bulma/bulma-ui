let code = {}

code.basic = `\
<vb-tabs>
  <vb-tab-item label="Pictures">Pictures</vb-tab-item>
  <vb-tab-item label="Music">Music</vb-tab-item>
  <vb-tab-item label="Videos">Videos</vb-tab-item>
</vb-tabs>
`

code.alignment = `\
<template>
  <div>
    <vb-tabs>
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs align="centered">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs align="right">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>
  </div>
</template>
`

code.icons = `\
<vb-tabs>
  <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
  <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
  <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
</vb-tabs>
`

code.sizes = `\
<template>
  <div>
    <vb-tabs size="small">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs>
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs size="medium">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs size="large">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>
  </div>
</template>
`

code.styles = `\
<template>
  <div>
    <vb-tabs type="boxed">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs type="toggle">
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs type="toggle" rounded>
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs fullwidth>
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>
  </div>
</template>
`
code.bottom = `\
<template>
  <div>
    <vb-tabs end>
      <vb-tab-item label="Pictures">Pictures</vb-tab-item>
      <vb-tab-item label="Music">Music</vb-tab-item>
      <vb-tab-item label="Videos">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs end>
      <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
      <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
      <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
    </vb-tabs>

    <vb-tabs type="boxed" end>
      <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
      <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
      <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
    </vb-tabs>
  </div>
</template>
`

code.combining = {}

code.combining.boxed = `\
<vb-tabs align="centered" type="boxed">
  <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
  <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
  <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
</vb-tabs>
`

code.combining.toggle = `\
<vb-tabs type="toggle" fullwidth>
  <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
  <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
  <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
</vb-tabs>
`

code.combining.boxedMedium = `\
<vb-tabs align="centered" type="boxed" size="medium">
  <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
  <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
  <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
</vb-tabs>
`

code.combining.boxedLarge = `\
<vb-tabs type="toggle" size="large" fullwidth>
  <vb-tab-item label="Pictures " icon="fa fa-image">Pictures</vb-tab-item>
  <vb-tab-item label="Music" icon="fa fa-music">Music</vb-tab-item>
  <vb-tab-item label="Videos" icon="fa fa-film">Videos</vb-tab-item>
</vb-tabs>
`

export default code
