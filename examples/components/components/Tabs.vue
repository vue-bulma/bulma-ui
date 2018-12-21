<template>
  <div>
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs
        @click="handleClick"
      ></vb-tabs>
    </vb-box>

    <vb-title
      id="Align"
      type="title"
    >Align:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs2
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs2
        align="centered"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs2
        align="right"
        @click="handleClick"
      ></vb-tabs>
    </vb-box>

    <vb-title
      id="Icons"
      type="title"
    >Icons:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs3
        @click="handleClick"
      ></vb-tabs>
    </vb-box>

    <vb-title
      id="Size"
      type="title"
    >Size:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs
        size="small"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs
        size="medium"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs
        size="large"
        @click="handleClick"
      ></vb-tabs>
    </vb-box>

    <vb-title
      id="Styles"
      type="title"
    >Styles:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs3
        type="boxed"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        type="toggle"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        type="toggle"
        rounded
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        fullwidth
        @click="handleClick"
      ></vb-tabs>
    </vb-box>

    <vb-title
      id="Combining"
      type="title"
    >Combining:</vb-title>
    <vb-box>
      <vb-tabs
        :tabs=tabs3
        align="centered"
        type="boxed"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        type="toggle"
        fullwidth
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        align="centered"
        type="boxed"
        size="medium"
        @click="handleClick"
      ></vb-tabs>
      <vb-tabs
        :tabs=tabs3
        type="toggle"
        size="large"
        fullwidth
        @click="handleClick"
      ></vb-tabs>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'TabsExamples',
  data() {
    return {
      tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }],
      tabs2: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }],
      tabs3: [
        { name: 'Pictures', icon: 'fa-image' },
        { name: 'Music', icon: 'fa-music' },
        { name: 'Videos', icon: 'fa-film' }
      ]
    }
  },
  methods: {
    handleClick(index) {
      console.log(index)
    }
  }
}
</script>
<style>
</style>
