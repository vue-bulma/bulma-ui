<template>
  <vb-container id="hero" view="fullhd">
    <div id="basic" class="component-title">Basic:</div>

    <vb-hero>
      Hero title
      <span slot="subtitle">Hero subtitle</span>
    </vb-hero>

    <vb-hero title="Hero title" subtitle="Hero subtitle"></vb-hero>

    <div id="colors" class="component-title">Colors:</div>

    <vb-hero color="primary" title="Primary title" subtitle="Primary subtitle"></vb-hero>
    <vb-hero color="info" title="Info title" subtitle="Info subtitle"></vb-hero>
    <vb-hero color="success" title="Success title" subtitle="Success subtitle"></vb-hero>
    <vb-hero color="warning" title="Warning title" subtitle="Warning subtitle"></vb-hero>
    <vb-hero color="danger" title="Danger title" subtitle="Danger subtitle"></vb-hero>
    <vb-hero color="light" title="Light title" subtitle="Light subtitle"></vb-hero>
    <vb-hero color="dark" title="Dark title" subtitle="Dark subtitle"></vb-hero>
    <vb-hero color="link" title="Link title" subtitle="Link subtitle"></vb-hero>

    <div id="gradients" class="component-title">Gradients:</div>

    <vb-hero color="primary" bold>
      Primary bold title
      <span slot="subtitle">Primary bold subtitle</span>
    </vb-hero>
    <vb-hero color="info" bold>
      Info bold title
      <span slot="subtitle">Info bold subtitle</span>
    </vb-hero>
    <vb-hero color="success" bold>
      Success bold title
      <span slot="subtitle">Success bold subtitle</span>
    </vb-hero>
    <vb-hero color="warning" bold>
      Warning bold title
      <span slot="subtitle">Warning bold subtitle</span>
    </vb-hero>
    <vb-hero color="danger" bold>
      Danger bold title
      <span slot="subtitle">Danger bold subtitle</span>
    </vb-hero>
    <vb-hero color="light" bold>
      Light bold title
      <span slot="subtitle">Light bold subtitle</span>
    </vb-hero>
    <vb-hero color="dark" bold>
      Dark bold title
      <span slot="subtitle">Dark bold subtitle</span>
    </vb-hero>
    <vb-hero color="link" bold>
      Link bold title
      <span slot="subtitle">Link bold subtitle</span>
    </vb-hero>

    <div id="sizes" class="component-title">Sizes:</div>

    <vb-hero color="primary" size="medium">
      Medium bold title
      <span slot="subtitle">Medium bold subtitle</span>
    </vb-hero>
    <vb-hero color="info" size="large">
      Large bold title
      <span slot="subtitle">Large bold subtitle</span>
    </vb-hero>
    <vb-hero color="success" size="fullheight">
      Fullheight bold title
      <span slot="subtitle">Fullheight bold subtitle</span>
    </vb-hero>

    <div id="fullwidth" class="component-title">Fullheight with navbar:</div>

    <vb-hero color="info" size="fullheight-with-navbar">
      Fullheight hero with navbar
      <span slot="subtitle">Fullheight hero with navbar</span>
    </vb-hero>

    <div id="parts" class="component-title">Fullheight hero in 3 parts:</div>

    <vb-box>
      <vb-hero color="primary" size="medium" align="centered">
        Title
        <span slot="subtitle">Subtitle</span>

        <nav slot="head" class="navbar">
          <vb-container align="centered">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <vb-button color="primary" inverted>
                    <span class="icon"><i class="fa fa-github"></i></span>
                    <span>Download</span>
                  </vb-button>
                </span>
              </div>
            </div>
          </vb-container>
        </nav>

        <nav slot="foot" class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </vb-hero>
    </vb-box>

    <vb-box>
      <vb-hero color="info" size="large" align="centered">
        Title
        <span slot="subtitle">Subtitle</span>

        <nav slot="head" class="navbar">
          <vb-container align="centered">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <vb-button color="info" inverted>
                    <span class="icon"><i class="fa fa-github"></i></span>
                    <span>Download</span>
                  </vb-button>
                </span>
              </div>
            </div>
          </vb-container>
        </nav>

        <nav slot="foot" class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </vb-hero>
    </vb-box>

    <vb-box>
      <vb-hero color="success" size="fullheight" align="centered">
        Title
        <span slot="subtitle">Subtitle</span>

        <nav slot="head" class="navbar">
          <vb-container align="centered">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <vb-button color="info" inverted>
                    <span class="icon"><i class="fa fa-github"></i></span>
                    <span>Download</span>
                  </vb-button>
                </span>
              </div>
            </div>
          </vb-container>
        </nav>

        <nav slot="foot" class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </vb-hero>
    </vb-box>
  </vb-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/tabs';

#hero {
  padding: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
}
</style>
