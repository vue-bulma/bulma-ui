<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-tag>Tag label</vb-tag>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <vb-tags>
          <vb-tag color="black">black</vb-tag>
          <vb-tag color="dark">dark</vb-tag>
          <vb-tag color="light">light</vb-tag>
          <vb-tag color="white">white</vb-tag>
          <vb-tag color="primary">primary</vb-tag>
          <vb-tag color="link">link</vb-tag>
          <vb-tag color="info">info</vb-tag>
          <vb-tag color="success">success</vb-tag>
          <vb-tag color="warning">warning</vb-tag>
          <vb-tag color="danger">danger</vb-tag>
        </vb-tags>
        <pre slot="code">{{code.colors}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-tags>
          <vb-tag>Normal</vb-tag>
          <vb-tag size="medium">Medium</vb-tag>
          <vb-tag size="large">Large</vb-tag>
        </vb-tags>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Modifiers">
      <demo>
        <vb-tags>
          <vb-tag rounded>Rounded</vb-tag>
          <vb-tag del></vb-tag>
        </vb-tags>
        <pre slot="code">{{code.modifiers}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Combinations">
      <demo>
        <vb-tags>
          <vb-tag color="success">Bar
            <vb-delete size="small"></vb-delete>
          </vb-tag>
          <vb-tag color="warning" size="medium">Bar
            <vb-delete size="small"></vb-delete>
          </vb-tag>
          <vb-tag color="danger" size="large">Bar
            <vb-delete></vb-delete>
          </vb-tag>
        </vb-tags>
        <pre slot="code">{{code.combinations}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Tags">
      <demo>
        <vb-tags>
          <vb-tag color="primary">Vue</vb-tag>
          <vb-tag color="dark">Bulma</vb-tag>
        </vb-tags>
        <vb-tags>
          <vb-tag color="danger">Vue</vb-tag>
          <vb-tag del></vb-tag>
        </vb-tags>
        <pre slot="code">{{code.tags}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Tags Addons">
      <demo>
        <vb-tags addons>
          <vb-tag color="primary">Vue</vb-tag>
          <vb-tag color="dark">Bulma</vb-tag>
        </vb-tags>
        <vb-tags addons>
          <vb-tag color="danger">Vue</vb-tag>
          <vb-tag del></vb-tag>
        </vb-tags>
        <pre slot="code">{{code.tagsAddons}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/tag.js'
export default {
  name: 'TagExamples',
  data() {
    return {
      code: code
    }
  }
}
</script>
