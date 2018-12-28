let code = {}
code.basic = `\
<template>
  <vb-button>Button</vb-button>
</template>
`
code.colors = `\
<template>
  <vb-button color="primary">Primary</vb-button>
  <vb-button color="link">Link</vb-button>
  <vb-button color="info">Info</vb-button>
  <vb-button color="success">Success</vb-button>
  <vb-button color="warning">Warning</vb-button>
  <vb-button color="danger">Danger</vb-button>
  <vb-button color="white">White</vb-button>
  <vb-button color="light">Light</vb-button>
  <vb-button color="dark">Dark</vb-button>
  <vb-button color="black">Black</vb-button>
  <vb-button color="text">Text</vb-button>
</template>
`

code.size = `\
<template>
  <vb-button size="small">Small</vb-button>
  <vb-button>Default</vb-button>
  <vb-button size="medium">Medium</vb-button>
  <vb-button size="large">Large</vb-button>
</template>
`

code.displays = `\
<template>
  <vb-button fullwidth>Fullwidth</vb-button>
</template>
`

code.outlined = `\
<template>
  <vb-button outlined>Outlined</vb-button>
  <vb-button color="primary" outlined>Outlined</vb-button>
  <vb-button color="link" outlined>Outlined</vb-button>
  <vb-button color="info" outlined>Outlined</vb-button>
  <vb-button color="warning" outlined>Outlined</vb-button>
  <vb-button color="success" outlined>Outlined</vb-button>
  <vb-button color="danger" outlined>Outlined</vb-button>
</template>
`
code.invert = `\
<template>
  <vb-button color="primary" inverted>Invert</vb-button>
  <vb-button color="link" inverted>Invert</vb-button>
  <vb-button color="info" inverted>Invert</vb-button>
  <vb-button color="success" inverted>Invert</vb-button>
  <vb-button color="danger" inverted>Invert</vb-button>
</template>
`

code.invertedOutlined = `\
<template>
  <vb-button color="primary" inverted outlined>Invert Outlined</vb-button>
  <vb-button color="link" inverted outlined>Invert Outlined</vb-button>
  <vb-button color="info" inverted outlined>Invert Outlined</vb-button>
  <vb-button color="success" inverted outlined>Invert Outlined</vb-button>
  <vb-button color="danger" inverted outlined>Invert Outlined</vb-button>
</template>
`

code.rounded = `\
<template>
  <vb-button rounded>Outlined</vb-button>
  <vb-button color="primary" rounded>Invert Outlined</vb-button>
  <vb-button color="link" rounded>Invert Outlined</vb-button>
  <vb-button color="info" rounded>Invert Outlined</vb-button>
  <vb-button color="success" rounded>Invert Outlined</vb-button>
  <vb-button color="danger" rounded>Invert Outlined</vb-button>
</template>
`

code.states = `\
<template>
  <vb-button state="hovered">Hover</vb-button>
  <vb-button state="focused">Focus</vb-button>
  <vb-button state="active">Active</vb-button>
  <vb-button state="loading">Loading</vb-button>
  <vb-button state="static">Static</vb-button>
</template>
`

code.disabled = `\
<template>
  <vb-button disabled>Disable</vb-button>
</template>
`

code.icons = `\
<template>
  <vb-button>
    <vb-icon name="fa fa-home"></vb-icon>
  </vb-button>
  <vb-button>
    <vb-icon name="fa fa-home"></vb-icon>
    <vb-title size="6">home</vb-title>
  </vb-button>
</template>
`

code.group = `\
<template>
  <vb-button-group>
    <vb-button color="primary">Save</vb-button>
    <vb-button>Cancel</vb-button>
    <vb-button color="danger">Delete</vb-button>
  </vb-button-group>
</template>
`

code.addons = `\
<template>
  <vb-button-addons>
    <vb-button>
      <vb-icon name="fa fa-align-left"></vb-icon>
      <vb-title size="6">left</vb-title>
    </vb-button>
    <vb-button>
      <vb-icon name="fa fa-align-center"></vb-icon>
      <vb-title size="6">center</vb-title>
    </vb-button>
    <vb-button>
      <vb-icon name="fa fa-align-right"></vb-icon>
      <vb-title size="6">right</vb-title>
    </vb-button>
  </vb-button-addons>
</template>
`

code.list = `\
<template>
  <vb-buttons-List>
    <vb-button>Save changes</vb-button>
    <vb-button>Save and continue</vb-button>
    <vb-button>Cancel</vb-button>
  </vb-buttons-List>
</template>
`

code.listAddonsLeft = `\
<template>
  <vb-buttons-List type="addons">
    <vb-button color="success">Save changes</vb-button>
    <vb-button>Save and continue</vb-button>
    <vb-button>Cancel</vb-button>
  </vb-buttons-List>
</template>
`

code.listAddonsCentered = `\
<template>
  <vb-buttons-List type="addons" align="centered">
    <vb-button>Save changes</vb-button>
    <vb-button color="info">Save and continue</vb-button>
    <vb-button>Cancel</vb-button>
  </vb-buttons-List>
</template>
`

code.listAddonsRight = `\
<template>
  <vb-buttons-List type="addons" align="right">
    <vb-button>Save changes</vb-button>
    <vb-button>Save and continue</vb-button>
    <vb-button color="danger">Cancel</vb-button>
  </vb-buttons-List>
</template>
`
export default code
