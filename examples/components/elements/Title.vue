<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-title type="title">Title (default type)</vb-title>
        <vb-title type="subtitle">Subtitle</vb-title>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-title size="1">Title 1</vb-title>
        <vb-title size="2">Title 2</vb-title>
        <vb-title size="3">Title 3 (default size)</vb-title>
        <vb-title size="4">Title 4</vb-title>
        <vb-title size="5">Title 5</vb-title>
        <vb-title size="6">Title 6</vb-title>

        <vb-title type="subtitle" size="1">Subtitle 1</vb-title>
        <vb-title type="subtitle" size="2">Subtitle 2</vb-title>
        <vb-title type="subtitle" size="3">Subtitle 3</vb-title>
        <vb-title type="subtitle" size="4">Subtitle 4</vb-title>
        <vb-title type="subtitle" size="5">Subtitle 5 (default size)</vb-title>
        <vb-title type="subtitle" size="6">Subtitle 6</vb-title>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Combinations And Spaced">
      <vb-content>
        <p>When you combine a title and a subtitle, they move closer together.</p>
        <p>As a rule of thumb, it is recommended to use a size difference of two. So if you use a <span class="color-red">title size 1</span>,
          combine it with a <span class="color-red">subtitle size: 3</span>.
        </p>
      </vb-content>
      <demo>
        <vb-title>Title</vb-title>
        <vb-title type="subtitle">Subtitle</vb-title>

        <vb-title size="1">Title 1</vb-title>
        <vb-title type="subtitle" size="3">Subtitle 3</vb-title>
        <pre slot="code">{{code.combinations}}</pre>
      </demo>

      <vb-content>Spaced</vb-content>
      <demo>
        <vb-title spaced>Title</vb-title>
        <vb-title type="subtitle">Subtitle</vb-title>
        <pre slot="code">{{code.spaced}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/elements/title.js'

export default {
  name: 'TitleExamples',
  data() {
    return {
      code
    }
  }
}
</script>
