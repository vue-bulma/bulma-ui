let code = {}
code.basic = `
<template>
  <vb-dropdown>
    <vb-button>
      <span>Dropdown button</span>
      <vb-icon name="fa fa-angle-down"></vb-icon>
    </vb-button>
    <vb-dropdown-menu>
      <vb-dropdown-item>Dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <hr class="dropdown-divider">
      <vb-dropdown-item>With a divider</vb-dropdown-item>
    </vb-dropdown-menu>
  </vb-dropdown>
</template>
`
code.toggable = `
<template>
  <vb-dropdown trigger="click">
    <vb-button>
      <span>Click me</span>
      <vb-icon name="fa fa-angle-down"></vb-icon>
    </vb-button>
    <vb-dropdown-menu>
      <vb-dropdown-item>Dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <hr class="dropdown-divider">
      <vb-dropdown-item>With a divider</vb-dropdown-item>
    </vb-dropdown-menu>
  </vb-dropdown>
</template>
`
code.aligned = `
<template>
  <vb-dropdown right-aligned>
    <vb-button>
      <span>Right aligned</span>
      <vb-icon name="fa fa-angle-down"></vb-icon>
    </vb-button>
    <vb-dropdown-menu>
      <vb-dropdown-item>Dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <hr class="dropdown-divider">
      <vb-dropdown-item>With a divider</vb-dropdown-item>
    </vb-dropdown-menu>
</template>
`
code.dropup = `
<template>
  <vb-dropdown dropup>
    <vb-button>
      <span>Dropup</span>
      <vb-icon name="fa fa-angle-down"></vb-icon>
    </vb-button>
    <vb-dropdown-menu>
      <vb-dropdown-item>Dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <vb-dropdown-item>Other dropdown item</vb-dropdown-item>
      <hr class="dropdown-divider">
      <vb-dropdown-item>With a divider</vb-dropdown-item>
    </vb-dropdown-menu>
  </vb-dropdown>
</template>
`

export default code
