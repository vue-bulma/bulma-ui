<template>
  <vb-container id="footer" view="fullhd">
    <div id="basic" class="component-title">Basic:</div>

    <vb-footer>
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </vb-footer>

    <vb-footer align="centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </vb-footer>

    <vb-footer align="right">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </vb-footer>
  </vb-container>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" scoped>
#footer {
  padding: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
}
</style>
