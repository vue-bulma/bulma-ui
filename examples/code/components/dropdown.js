let code = {}

code.basic = `\
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
`

code.content = `\
<vb-dropdown>
  <vb-button>
    <span>Dropdown button</span>
    <vb-icon name="fa fa-angle-down"></vb-icon>
  </vb-button>

  <vb-dropdown-menu>
    <vb-dropdown-item content>
      <p>
        You can insert
        <strong>any type of content</strong> within the dropdown menu.
      </p>
    </vb-dropdown-item>

    <hr class="dropdown-divider">

    <vb-dropdown-item content>
      <p>
        You simply need to use a
        <code>&lt;div&gt;</code> instead.
      </p>
    </vb-dropdown-item>

    <hr class="dropdown-divider">

    <vb-dropdown-item>
      <a href="#" class="dropdown-item">This is a link</a>
    </vb-dropdown-item>
  </vb-dropdown-menu>
</vb-dropdown>
`

code.toggable = `\
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
`

code.aligned = `\
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
</vb-dropdown>
`

code.dropup = `\
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
`

export default code
