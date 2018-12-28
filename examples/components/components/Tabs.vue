<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <p slot="control">Current Tab: {{tabs[index].name}}</p>
        <vb-tabs :tabs="tabs" @click="handleClick"></vb-tabs>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-tabs :tabs="tabs"></vb-tabs>
        <vb-tabs :tabs="tabs" align="centered"></vb-tabs>
        <vb-tabs :tabs="tabs" align="right"></vb-tabs>
        <pre slot="code">{{ alignment }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <demo>
        <vb-tabs :tabs="tabs2"></vb-tabs>
        <pre slot="code">{{ icons }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-tabs :tabs="tabs" size="small"></vb-tabs>
        <vb-tabs :tabs="tabs"></vb-tabs>
        <vb-tabs :tabs="tabs" size="medium"></vb-tabs>
        <vb-tabs :tabs="tabs" size="large"></vb-tabs>
        <pre slot="code">{{ sizes }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <demo>
        <vb-tabs :tabs="tabs2" type="boxed"></vb-tabs>
        <vb-tabs :tabs="tabs2" type="toggle"></vb-tabs>
        <vb-tabs :tabs="tabs2" type="toggle" rounded></vb-tabs>
        <vb-tabs :tabs="tabs2" fullwidth></vb-tabs>
        <pre slot="code">{{ styles }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Combining">
      <demo>
        <vb-tabs :tabs="tabs2" align="centered" type="boxed"></vb-tabs>
        <pre slot="code">{{ combining.boxed }}</pre>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" type="toggle" fullwidth></vb-tabs>
        <pre slot="code">{{ combining.toggle }}</pre>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" align="centered" type="boxed" size="medium"></vb-tabs>
        <pre slot="code">{{ combining.boxedMedium}}</pre>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" type="toggle" size="large" fullwidth></vb-tabs>
        <pre slot="code">{{ combining.toggleLarge}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/components/tabs.js'

export default {
  name: 'TabsExamples',
  data() {
    return {
      basic: code.basic,
      alignment: code.alignment,
      icons: code.icons,
      sizes: code.sizes,
      styles: code.styles,
      combining: code.combining,
      index: 0,
      tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }],
      tabs2: [
        { name: 'Pictures', icon: 'fa-image' },
        { name: 'Music', icon: 'fa-music' },
        { name: 'Videos', icon: 'fa-film' }
      ]
    }
  },
  methods: {
    handleClick(index) {
      this.index = index
    }
  }
}
</script>
