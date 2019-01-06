let code = {}
code.basic = `\
<template>
  <vb-breadcrumb>
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.alignment = {}
code.alignment.centered = `\
<template>
  <vb-breadcrumb align="centered">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.alignment.right = `\
<template>
  <vb-breadcrumb align="right">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.icons = `\
<template>
  <vb-breadcrumb>
    <vb-breadcrumb-item to="/docs">
      <vb-icon name="fa fa-home" size="small"></vb-icon>
      <span>Examples</span>
    </vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">
      <vb-icon name="fa fa-puzzle-piece" size="small"></vb-icon>Components
    </vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>
      <vb-icon name="fa fa-thumbs-up" size="small"></vb-icon>Breadcrumb
    </vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.separators = {}
code.separators.arrow = `\
<template>
  <vb-breadcrumb separator="arrow">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.separators.bullet = `\
<template>
  <vb-breadcrumb separator="bullet">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.separators.dot = `\
<template>
  <vb-breadcrumb separator="dot">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.separators.succeeds = `\
<template>
  <vb-breadcrumb separator="succeeds">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.siezs = {}
code.siezs.small = `\
<template>
  <vb-breadcrumb size="small">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.siezs.medium = `\
<template>
  <vb-breadcrumb size="medium">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
code.siezs.large = `\
<template>
  <vb-breadcrumb size="large">
    <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
    <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
  </vb-breadcrumb>
</template>
`
export default code
