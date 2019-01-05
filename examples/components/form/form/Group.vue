<template>
  <example-section-item title="Group">
    <vb-title type="subtitle" size="6">Alignment</vb-title>
    <demo>
      <vb-form-item grouped>
        <vb-button color="info">Submit</vb-button>
        <vb-button color="light">Cancel</vb-button>
      </vb-form-item>

      <vb-form-item grouped align="centered">
        <vb-button color="info">Submit</vb-button>
        <vb-button color="light">Cancel</vb-button>
      </vb-form-item>

      <vb-form-item grouped align="right">
        <vb-button color="info">Submit</vb-button>
        <vb-button color="light">Cancel</vb-button>
      </vb-form-item>
      <pre slot="code">{{ code.alignment }}</pre>
    </demo>

    <vb-title type="subtitle" size="6">Expanded</vb-title>
    <demo>
      <vb-form-item grouped>
        <vb-input placeholder="Find a repository" expanded></vb-input>
        <vb-button color="info">Search</vb-button>
      </vb-form-item>
      <pre slot="code">{{ code.expanded }}</pre>
    </demo>

    <vb-title type="subtitle" size="6">Multiline</vb-title>
    <demo>
      <vb-columns>
        <vb-column size="6">
          <vb-form-item grouped multiline>
            <vb-button>One</vb-button>
            <vb-button>Two</vb-button>
            <vb-button>Three</vb-button>
            <vb-button>Four</vb-button>
            <vb-button>Five</vb-button>
            <vb-button>Size</vb-button>
            <vb-button>Seven</vb-button>
            <vb-button>Eight</vb-button>
            <vb-button>Nine</vb-button>
            <vb-button>Ten</vb-button>
          </vb-form-item>
        </vb-column>
      </vb-columns>
      <pre slot="code">{{ code.multiline }}</pre>
    </demo>
  </example-section-item>
</template>

<script>
import code from '@examples/code/form/form/group.js'

export default {
  name: 'FormGroup',
  data() {
    return {
      code
    }
  }
}
</script>
