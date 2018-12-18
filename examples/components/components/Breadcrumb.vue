<template>
  <div>
    <span id="basic" class="title">Basic:</span>
    <vb-box>
      <vb-breadcrumb>
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>

    <span id="alignment" class="title">Alignment:</span>
    <vb-box>
      <vb-breadcrumb align="centered">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb align="right">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>

    <span id="icons" class="title">Icons:</span>
    <vb-box>
      <vb-breadcrumb>
        <vb-breadcrumb-item to="/">
          <vb-icon name="fa fa-home" size="small"></vb-icon>
          <span>Examples</span>
        </vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">
          <vb-icon name="fa fa-puzzle-piece" size="small"></vb-icon>
          Components
        </vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>
          <vb-icon name="fa fa-thumbs-up" size="small"></vb-icon>
          Breadcrumb
        </vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>

    <span id="separators" class="title">Alternative separators:</span>
    <vb-box>
      <vb-breadcrumb separator="arrow">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb separator="bullet">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb separator="dot">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb separator="succeeds">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>
    <vb-box>
      <vb-breadcrumb size="small">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb size="medium">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
    <vb-box>
      <vb-breadcrumb size="large">
        <vb-breadcrumb-item to="/">Examples</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components">Components</vb-breadcrumb-item>
        <vb-breadcrumb-item to="/components/breadcrumb" actived>Breadcrumb</vb-breadcrumb-item>
      </vb-breadcrumb>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExamples'
}
</script>
