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
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Dropdown content">
      <demo>
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
        <pre slot="code">{{ content }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Hoverable or Toggable">
      <demo>
        <vb-dropdown trigger="click">
          <vb-button>
            <span>Click me</span>
            <vb-icon name="fa fa-angle-down"></vb-icon>
          </vb-button>

          <vb-dropdown-menu>
            <vb-dropdown-item><a href="">Dropdown item</a> </vb-dropdown-item>
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
        <pre slot="code">{{ toggable }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Right aligned">
      <demo>
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
        <pre slot="code">{{ aligned }}</pre>
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
        <pre slot="code">{{ dropup }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/components/dropdown.js'

export default {
  name: 'DropdownExamples',
  data() {
    return {
      basic: code.basic,
      toggable: code.toggable,
      aligned: code.aligned,
      dropup: code.dropup,
      content: code.content
    }
  }
}
</script>

<style scoped>
.dropdown:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
