<template>
  <div>
    <span id="basic" class="title">Basic:</span>
    <vb-box>
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
    </vb-box>

    <span id="trigger" class="title">Hoverable or Toggable:</span>
    <vb-box>
      <vb-buttons-List>
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

        <vb-dropdown>
          <vb-button>
            <span>Hover me</span>
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
      </vb-buttons-List>
    </vb-box>

    <span id="aligned" class="title">Right aligned:</span>
    <vb-box>
      <vb-buttons-List>
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

        <vb-dropdown>
          <vb-button>
            <span>Normal</span>
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
      </vb-buttons-List>
    </vb-box>

    <span id="dropup" class="title">Dropup:</span>
    <vb-box>
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
    </vb-box>
  </div>
</template>
