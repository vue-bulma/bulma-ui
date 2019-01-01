let code = {}
code.basic = {}

code.basic.firstUsage = `
<template>
  <vb-hero>
    Hero title
    <span slot="subtitle">Hero subtitle</span>
  </vb-hero>
</template>
`
code.basic.secondUsage = `
<template>
  <vb-hero title="Hero title" subtitle="Hero subtitle"></vb-hero>
</template>
`

code.colors = `
<template>
  <vb-hero color="primary" title="Primary title" subtitle="Primary subtitle"></vb-hero>
</template>
`

code.gradients = `
<template>
  <vb-hero color="primary" bold>
    Primary bold title
    <span slot="subtitle">Primary bold subtitle</span>
  </vb-hero>
</template>
`

code.sizes = {}
code.sizes.medium = `
<template>
  <vb-hero color="primary" size="medium">
    Medium bold title
    <span slot="subtitle">Medium bold subtitle</span>
  </vb-hero>
</template>
`
code.sizes.large = `
<template>
  <vb-hero color="info" size="large">
    Large bold title
    <span slot="subtitle">Large bold subtitle</span>
  </vb-hero>
</template>
`
code.sizes.fullheight = `
<template>
  <vb-hero color="success" size="fullheight">
    Fullheight bold title
    <span slot="subtitle">Fullheight bold subtitle</span>
  </vb-hero>
</template>
`

code.fullheightNavbar = `
<template>
  <vb-hero color="info" size="fullheight-with-navbar">
    Fullheight hero with navbar
    <span slot="subtitle">Fullheight hero with navbar</span>
  </vb-hero>
</template>
`

code.fullheightHero = {}
code.fullheightHero.medium = `
<template>
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
</template>
`
code.fullheightHero.large = `
<template>
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
</template>
`
code.fullheightHero.fullheight = `
<template>
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
</template>
`
export default code