<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-title type="title">Title</vb-title>
        <vb-title type="subtitle">Subtitle</vb-title>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <vb-title type="title" size="1">Title</vb-title>
        <vb-title type="title" size="2">Title</vb-title>
        <vb-title type="title" size="3">Title</vb-title>
        <vb-title type="title" size="4">Title</vb-title>
        <vb-title type="title" size="5">Title</vb-title>
        <vb-title type="title" size="6">Title</vb-title>
        <br/>
        <vb-title type="subtitle" size="1">Subtitle</vb-title>
        <vb-title type="subtitle" size="2">Subtitle</vb-title>
        <vb-title type="subtitle" size="3">Subtitle</vb-title>
        <vb-title type="subtitle" size="4">Subtitle</vb-title>
        <vb-title type="subtitle" size="5">Subtitle</vb-title>
        <vb-title type="subtitle" size="6">Subtitle</vb-title>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Combinations And Spaced">
      <demo>
        <vb-title type="title" spaced>Title</vb-title>
        <vb-title type="subtitle">Subtitle</vb-title>
        <pre slot="code">{{code.spaced}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/title.js'

export default {
  name: 'TitleExamples',
  data() {
    return {
      code: code
    }
  }
}
</script>
