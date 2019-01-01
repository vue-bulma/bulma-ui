<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-button>Button</vb-button>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <vb-buttons-list>
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
        </vb-buttons-list>
        <pre slot="code">{{code.colors}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <vb-title type="subtitle" size="6">The button comes in 4 different sizes:</vb-title>
      <demo>
        <vb-buttons-list>
          <vb-button size="small">Small</vb-button>
          <vb-button>Default</vb-button>
          <vb-button size="medium">Medium</vb-button>
          <vb-button size="large">Large</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Displays">
      <demo>
        <vb-button fullwidth>Fullwidth</vb-button>
        <pre slot="code">{{code.displays}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <vb-title type="subtitle" size="6">Outlined</vb-title>
      <demo>
        <vb-buttons-list>
          <vb-button outlined>Outlined</vb-button>
          <vb-button color="primary" outlined>Outlined</vb-button>
          <vb-button color="link" outlined>Outlined</vb-button>
          <vb-button color="info" outlined>Outlined</vb-button>
          <vb-button color="warning" outlined>Outlined</vb-button>
          <vb-button color="success" outlined>Outlined</vb-button>
          <vb-button color="danger" outlined>Outlined</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.outlined}}</pre>
      </demo>
      <vb-title type="subtitle" size="6">Inverted</vb-title>
      <demo class="button-invert">
        <vb-buttons-list>
          <vb-button color="primary" inverted>Invert</vb-button>
          <vb-button color="link" inverted>Invert</vb-button>
          <vb-button color="info" inverted>Invert</vb-button>
          <vb-button color="success" inverted>Invert</vb-button>
          <vb-button color="danger" inverted>Invert</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.invert}}</pre>
      </demo>
      <vb-title type="subtitle" size="6">Outlined and Inverted</vb-title>
      <demo class="button-invert">
        <vb-buttons-list>
          <vb-button color="primary" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="link" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="info" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="success" inverted outlined>Invert Outlined</vb-button>
          <vb-button color="danger" inverted outlined>Invert Outlined</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.invertedOutlined}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo>
        <vb-buttons-list>
          <vb-button rounded>Outlined</vb-button>
          <vb-button color="primary" rounded>Rounded</vb-button>
          <vb-button color="link" rounded>Rounded</vb-button>
          <vb-button color="info" rounded>Rounded</vb-button>
          <vb-button color="success" rounded>Rounded</vb-button>
          <vb-button color="danger" rounded>Rounded</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.rounded}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo>
        <vb-buttons-list>
          <vb-button state="hovered">Hover</vb-button>
          <vb-button state="focused">Focus</vb-button>
          <vb-button state="active">Active</vb-button>
          <vb-button state="loading">Loading</vb-button>
          <vb-button state="static">Static</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.states}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Disabled">
      <demo>
        <vb-buttons-list>
          <vb-button disabled>Disable</vb-button>
          <vb-button color="primary" disabled>Disable</vb-button>
          <vb-button color="link" disabled>Disable</vb-button>
          <vb-button color="info" disabled>Disable</vb-button>
          <vb-button color="success" disabled>Disable</vb-button>
          <vb-button color="danger" disabled>Disable</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.disabled}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <vb-title type="subtitle" size="6">With Font Awesome icons</vb-title>
      <demo class="button-icon">
        <vb-buttons-list>
          <vb-button>
            <vb-icon name="fa fa-bold"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-italic"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-underline"></vb-icon>
          </vb-button>
          <vb-button color="primary">
            <vb-icon name="fa fa-twitter"></vb-icon>
            <span>Twitter</span>
          </vb-button>
          <vb-button color="success">
            <vb-icon name="fa fa-check"></vb-icon>
            <span>Save</span>
          </vb-button>
          <vb-button color="danger" outlined>
            <span>Delete</span>
            <vb-icon name="fa fa-times"></vb-icon>
          </vb-button>
          <vb-button size="small">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-github"></vb-icon>
            <span>Github</span>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="small">
            <vb-icon name="fa fa-header"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button>
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="medium">
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
          <vb-button size="medium">
            <vb-icon name="fa fa-header fa-2x"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <vb-buttons-list>
          <vb-button size="large">
            <vb-icon name="fa fa-header" size="small"></vb-icon>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-header fa-lg"></vb-icon>
          </vb-button>
          <vb-button size="large">
            <vb-icon name="fa fa-header fa-2x" size="medium"></vb-icon>
          </vb-button>
        </vb-buttons-list>

        <pre slot="code">{{code.icons}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Button Group">
      <vb-title type="subtitle" size="6">If you want to group buttons together on a single line</vb-title>

      <demo>
        <vb-button-group>
          <vb-button color="primary">Save</vb-button>
          <vb-button>Cancel</vb-button>
          <vb-button color="danger">Delete</vb-button>
        </vb-button-group>
        <pre slot="code">{{code.group}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Button Addons">
      <vb-title type="subtitle" size="6">If you want to use buttons as addons</vb-title>
      <demo class="button-icon">
        <vb-button-addons>
          <vb-button>
            <vb-icon name="fa fa-align-left"></vb-icon>
            <span>left</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-align-center"></vb-icon>
            <span>center</span>
          </vb-button>
          <vb-button>
            <vb-icon name="fa fa-align-right"></vb-icon>
            <span>right</span>
          </vb-button>
        </vb-button-addons>
        <pre slot="code">{{code.addons}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Button List">
      <vb-title type="subtitle" size="6">You can now create a list of buttons with the
        <span class="color-red">vb-buttons-list</span> container
      </vb-title>
      <demo>
        <vb-buttons-list>
          <vb-button>Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.list}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Button List addons">
      <vb-title type="subtitle" size="6">You can attach
        <span class="color-red">vb-buttons-list</span> together with the
        <span class="color-red">addons</span> modifier
        <br>Use the
        <span class="color-red">align="centered"</span> or the
        <span class="color-red">align="right"</span> modifiers to alter the alignment.
      </vb-title>
      <demo>
        <vb-buttons-list addons>
          <vb-button color="success">Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>

        <pre slot="code">{{code.listAddonsLeft}}</pre>
      </demo>
      <demo>
        <vb-buttons-list addons align="centered">
          <vb-button>Save changes</vb-button>
          <vb-button color="info">Save and continue</vb-button>
          <vb-button>Cancel</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.listAddonsCentered}}</pre>
      </demo>
      <demo>
        <vb-buttons-list addons align="right">
          <vb-button>Save changes</vb-button>
          <vb-button>Save and continue</vb-button>
          <vb-button color="danger">Cancel</vb-button>
        </vb-buttons-list>
        <pre slot="code">{{code.listAddonsRight}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/button.js'

export default {
  name: 'ButtonExamples',
  data() {
    return {
      code
    }
  }
}
</script>

<style lang="scss" scoped>
.button-invert {
  background-color: #00d1b2;
}
</style>
