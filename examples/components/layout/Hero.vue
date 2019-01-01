<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-hero>
          Hero title
          <span slot="subtitle">Hero subtitle</span>
        </vb-hero>
        <pre slot="code">{{ basic.firstUsage }}</pre>
      </demo>

      <demo>
        <vb-hero title="Hero title" subtitle="Hero subtitle"></vb-hero>
        <pre slot="code">{{ basic.secondUsage }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <vb-buttons-list slot="control">
          <vb-button
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="handleCheckColor(color)"
          >{{color}}</vb-button>
        </vb-buttons-list>
        <vb-hero :color="color" title="Colors title" subtitle="Colors subtitle"></vb-hero>
        <pre slot="code">{{ colorsCode }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Gradients">
      <demo>
        <vb-buttons-list slot="control">
          <vb-button
            v-for="color in colors"
            :key="color"
            :color="color"
            @click="handleCheckColor(color, 1)"
          >{{color}}</vb-button>
        </vb-buttons-list>
        <vb-hero :color="colorBold" bold>
          Colors bold title
          <span slot="subtitle">Colors bold subtitle</span>
        </vb-hero>
        <pre slot="code">{{ gradients }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-hero color="primary" size="medium">
          Medium bold title
          <span slot="subtitle">Medium bold subtitle</span>
        </vb-hero>
        <pre slot="code">{{ sizes.medium }}</pre>
      </demo>

      <demo>
        <vb-hero color="info" size="large">
          Large bold title
          <span slot="subtitle">Large bold subtitle</span>
        </vb-hero>
        <pre slot="code">{{ sizes.large }}</pre>
      </demo>

      <demo>
        <vb-hero color="success" size="fullheight">
          Fullheight bold title
          <span slot="subtitle">Fullheight bold subtitle</span>
        </vb-hero>
        <pre slot="code">{{ sizes.fullheight }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Fullheight with navbar">
      <demo>
        <vb-hero color="info" size="fullheight-with-navbar">
          Fullheight hero with navbar
          <span slot="subtitle">Fullheight hero with navbar</span>
        </vb-hero>
        <pre slot="code">{{ fullheightNavbar }}</pre>
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
        <pre slot="code">{{ fullheightHero.medium }}</pre>
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
        <pre slot="code">{{ fullheightHero.large }}</pre>
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
        <pre slot="code">{{ fullheightHero.fullheight }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/layout/hero.js'

const BASE_COLOR = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'black',
  'link'
]

export default {
  name: 'HeroExamples',
  data() {
    return {
      basic: code.basic,
      colorsCode: code.colors,
      gradients: code.gradients,
      sizes: code.sizes,
      fullheightNavbar: code.fullheightNavbar,
      fullheightHero: code.fullheightHero,
      colors: BASE_COLOR,
      color: 'primary',
      colorBold: 'primary',
      tabs: [
        { name: 'Overview' },
        { name: 'Modifiers' },
        { name: 'Grid' },
        { name: 'Elements' },
        { name: 'Components' },
        { name: 'Layout' }
      ]
    }
  },
  methods: {
    handleCheckColor(color, key) {
      if (key) {
        this.colorBold = color
      } else {
        this.color = color
      }
    }
  }
}
</script>
