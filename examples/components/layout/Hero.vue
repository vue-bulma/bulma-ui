<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-hero>
          Hero title
          <span slot="subtitle">Hero subtitle</span>
        </vb-hero>
      </demo>

      <demo>
        <vb-hero title="Hero title" subtitle="Hero subtitle"></vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <vb-hero color="primary" title="Primary title" subtitle="Primary subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="info" title="Info title" subtitle="Info subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="success" title="Success title" subtitle="Success subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="warning" title="Warning title" subtitle="Warning subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="danger" title="Danger title" subtitle="Danger subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="light" title="Light title" subtitle="Light subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="dark" title="Dark title" subtitle="Dark subtitle"></vb-hero>
      </demo>
      <demo>
        <vb-hero color="link" title="Link title" subtitle="Link subtitle"></vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Gradients">
      <demo>
        <vb-hero color="primary" bold>
          Primary bold title
          <span slot="subtitle">Primary bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="info" bold>
          Info bold title
          <span slot="subtitle">Info bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="success" bold>
          Success bold title
          <span slot="subtitle">Success bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="warning" bold>
          Warning bold title
          <span slot="subtitle">Warning bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="danger" bold>
          Danger bold title
          <span slot="subtitle">Danger bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="light" bold>
          Light bold title
          <span slot="subtitle">Light bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="dark" bold>
          Dark bold title
          <span slot="subtitle">Dark bold subtitle</span>
        </vb-hero>
      </demo>
      <demo>
        <vb-hero color="link" bold>
          Link bold title
          <span slot="subtitle">Link bold subtitle</span>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-hero color="primary" size="medium">
          Medium bold title
          <span slot="subtitle">Medium bold subtitle</span>
        </vb-hero>
      </demo>

      <demo>
        <vb-hero color="info" size="large">
          Large bold title
          <span slot="subtitle">Large bold subtitle</span>
        </vb-hero>
      </demo>

      <demo>
        <vb-hero color="success" size="fullheight">
          Fullheight bold title
          <span slot="subtitle">Fullheight bold subtitle</span>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight with navbar">
      <demo>
        <vb-hero color="info" size="fullheight-with-navbar">
          Fullheight hero with navbar
          <span slot="subtitle">Fullheight hero with navbar</span>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight hero in 3 parts">
      <demo>
        <vb-hero color="primary" size="medium" align="centered">
          Title
          <span slot="subtitle">Subtitle</span>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation">Documentation</vb-navbar-item>
              <vb-navbar-item>
                <vb-button color="primary" inverted>
                  <span class="icon"><i class="fa fa-github"></i></span>
                  <span>Download</span>
                </vb-button>
              </vb-navbar-item>
            </template>
          </vb-navbar>

          <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
        </vb-hero>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight with navbar">
      <demo>
        <vb-hero color="info" size="large" align="centered">
          Title
          <span slot="subtitle">Subtitle</span>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation">Documentation</vb-navbar-item>
              <vb-navbar-item>
                <vb-button color="info" inverted>
                  <vb-icon name="fa fa-github"></vb-icon>
                  <span>Download</span>
                </vb-button>
              </vb-navbar-item>
            </template>
          </vb-navbar>

          <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
        </vb-hero>
      </demo>

      <demo>
        <vb-hero color="success" size="fullheight" align="centered">
          Title
          <span slot="subtitle">Subtitle</span>

          <vb-navbar slot="head">
            <vb-navbar-item slot="brand" name="logo">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
            </vb-navbar-item>

            <template slot="right">
              <vb-navbar-item name="Home">Home</vb-navbar-item>
              <vb-navbar-item name="Examples">Examples</vb-navbar-item>
              <vb-navbar-item name="Documentation">Documentation</vb-navbar-item>
              <vb-navbar-item>
                <vb-button color="success" inverted>
                  <span class="icon"><i class="fa fa-github"></i></span>
                  <span>Download</span>
                </vb-button>
              </vb-navbar-item>
            </template>
          </vb-navbar>

          <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
        </vb-hero>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'HeroExamples',
  data() {
    return {
      tabs: [
        { name: 'Overview' },
        { name: 'Modifiers' },
        { name: 'Grid' },
        { name: 'Elements' },
        { name: 'Components' },
        { name: 'Layout' }
      ]
    }
  }
}
</script>
