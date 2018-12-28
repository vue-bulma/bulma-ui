<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-breadcrumb>
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-breadcrumb align="centered">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ alignment.centered }}</pre>
      </demo>

      <demo>
        <vb-breadcrumb align="right">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ alignment.right }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <demo>
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
        <pre slot="code">{{ icons }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Alternative separators">
      <demo>
        <vb-breadcrumb separator="arrow">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ separators.arrow }}</pre>
      </demo>
      <demo>
        <vb-breadcrumb separator="bullet">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ separators.bullet }}</pre>
      </demo>
      <demo>
        <vb-breadcrumb separator="dot">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ separators.dot }}</pre>
      </demo>
      <demo>
        <vb-breadcrumb separator="succeeds">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ separators.succeeds }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-breadcrumb size="small">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ sizes.small }}</pre>
      </demo>
      <demo>
        <vb-breadcrumb size="medium">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ sizes.medium }}</pre>
      </demo>
      <demo>
        <vb-breadcrumb size="large">
          <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components">Components</vb-breadcrumb-item>
          <vb-breadcrumb-item to="/docs/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
        </vb-breadcrumb>
        <pre slot="code">{{ sizes.large }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/components/breadcrumb.js'

export default {
  name: 'BreadcrumbExamples',
  data() {
    return {
      basic: code.basic,
      alignment: code.alignment,
      icons: code.icons,
      separators: code.separators,
      sizes: code.siezs
    }
  }
}
</script>
