let code = { basic: {}, sizes: {}, fullheightHero: {} }

code.basic.firstUsage = `\
<vb-hero>
  Hero title
  <span slot="subtitle">Hero subtitle</span>
</vb-hero>
`

code.basic.secondUsage = `\
<vb-hero title="Hero title" subtitle="Hero subtitle"></vb-hero>
`

code.colors = `\
<vb-hero color="primary" title="Primary title" subtitle="Primary subtitle"></vb-hero>
`

code.gradients = `\
<vb-hero color="primary" bold>
  Primary bold title
  <span slot="subtitle">Primary bold subtitle</span>
</vb-hero>
`

code.sizes.medium = `\
<vb-hero color="primary" size="medium">
  Medium bold title
  <span slot="subtitle">Medium bold subtitle</span>
</vb-hero>
`

code.sizes.large = `\
<vb-hero color="info" size="large">
  Large bold title
  <span slot="subtitle">Large bold subtitle</span>
</vb-hero>
`

code.sizes.fullheight = `\
<vb-hero color="success" size="fullheight">
  Fullheight bold title
  <span slot="subtitle">Fullheight bold subtitle</span>
</vb-hero>
`

code.fullheightNavbar = `\
<vb-hero color="info" size="fullheight-with-navbar">
  Fullheight hero with navbar
  <span slot="subtitle">Fullheight hero with navbar</span>
</vb-hero>
`

code.fullheightHero.medium = `\
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
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>Download</span>
        </vb-button>
      </vb-navbar-item>
    </template>
  </vb-navbar>

  <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
</vb-hero>
`

code.fullheightHero.large = `\
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
`

code.fullheightHero.fullheight = `\
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
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
          <span>Download</span>
        </vb-button>
      </vb-navbar-item>
    </template>
  </vb-navbar>

  <vb-tabs slot="foot" type="boxed" fullwidth :tabs="tabs"></vb-tabs>
</vb-hero>
`

export default code
