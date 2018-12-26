<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <p slot="control">Current Tab: {{tabs[index].name}}</p>
        <vb-tabs :tabs="tabs" @click="handleClick"></vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-tabs :tabs="tabs"></vb-tabs>
        <vb-tabs :tabs="tabs" align="centered"></vb-tabs>
        <vb-tabs :tabs="tabs" align="right"></vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Icons">
      <demo>
        <vb-tabs :tabs="tabs2"></vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-tabs :tabs="tabs" size="small"></vb-tabs>
        <vb-tabs :tabs="tabs"></vb-tabs>
        <vb-tabs :tabs="tabs" size="medium"></vb-tabs>
        <vb-tabs :tabs="tabs" size="large"></vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <demo>
        <vb-tabs :tabs="tabs2" type="boxed"></vb-tabs>
        <vb-tabs :tabs="tabs2" type="toggle"></vb-tabs>
        <vb-tabs :tabs="tabs2" type="toggle" rounded></vb-tabs>
        <vb-tabs :tabs="tabs2" fullwidth></vb-tabs>
      </demo>
    </example-section-item>

    <example-section-item title="Combining">
      <demo>
        <vb-tabs :tabs="tabs2" align="centered" type="boxed"></vb-tabs>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" type="toggle" fullwidth></vb-tabs>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" align="centered" type="boxed" size="medium"></vb-tabs>
      </demo>
      <demo>
        <vb-tabs :tabs="tabs2" type="toggle" size="large" fullwidth></vb-tabs>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'TabsExamples',
  data() {
    return {
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
