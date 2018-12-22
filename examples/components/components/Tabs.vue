<template>
  <div>
    <vb-title id="Basic" type="title">Basic:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs" @click="handleClick"></vb-tabs>
      <p>Current Tab: {{tabs[index].name}}</p>
    </vb-box>

    <vb-title id="Align" type="title">Align:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs"></vb-tabs>
      <vb-tabs :tabs="tabs" align="centered"></vb-tabs>
      <vb-tabs :tabs="tabs" align="right"></vb-tabs>
    </vb-box>

    <vb-title id="Icons" type="title">Icons:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs2"></vb-tabs>
    </vb-box>

    <vb-title id="Size" type="title">Size:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs" size="small"></vb-tabs>
      <vb-tabs :tabs="tabs"></vb-tabs>
      <vb-tabs :tabs="tabs" size="medium"></vb-tabs>
      <vb-tabs :tabs="tabs" size="large"></vb-tabs>
    </vb-box>

    <vb-title id="Styles" type="title">Styles:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs2" type="boxed"></vb-tabs>
      <vb-tabs :tabs="tabs2" type="toggle"></vb-tabs>
      <vb-tabs :tabs="tabs2" type="toggle" rounded></vb-tabs>
      <vb-tabs :tabs="tabs2" fullwidth></vb-tabs>
    </vb-box>

    <vb-title id="Combining" type="title">Combining:</vb-title>
    <vb-box>
      <vb-tabs :tabs="tabs2" align="centered" type="boxed"></vb-tabs>
      <vb-tabs :tabs="tabs2" type="toggle" fullwidth></vb-tabs>
      <vb-tabs :tabs="tabs2" align="centered" type="boxed" size="medium"></vb-tabs>
      <vb-tabs :tabs="tabs2" type="toggle" size="large" fullwidth></vb-tabs>
    </vb-box>
  </div>
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
