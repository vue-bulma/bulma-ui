<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div class="block" slot="control">
          <vb-radio-group v-model="align">
            <vb-radio :label="null">Left</vb-radio>
            <vb-radio label="centered">Centered</vb-radio>
            <vb-radio label="right">Right</vb-radio>
          </vb-radio-group>
        </div>

        <vb-footer :align="align">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </vb-footer>
        <pre slot="code">{{ code }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/layout/footer.js'

export default {
  name: 'FooterExamples',
  data() {
    return {
      code,
      align: null
    }
  }
}
</script>
