<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
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
      </demo>
    </example-section-item>

    <example-section-item title="Hoverable or Toggable">
      <demo>
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
      </demo>
    </example-section-item>

    <example-section-item title="Right aligned">
      <demo>
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
      </demo>
    </example-section-item>

    <example-section-item title="Dropup">
      <demo>
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
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'DropdownExamples'
}
</script>
