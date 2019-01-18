let code = {}

code.basic = `\
<template>
  <div>
    <p>Current Tab: {{ tabs[index].name }}</p>

    <vb-tabs :tabs="tabs" @click="handleClick"></vb-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
        tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }]
      }
    },
    methods: {
      handleClick(index) {
        this.index = index
      }
    }
  }
</script>
`

code.alignment = `\
<vb-tabs :tabs="tabs"></vb-tabs>

<vb-tabs :tabs="tabs" align="centered"></vb-tabs>

<vb-tabs :tabs="tabs" align="right"></vb-tabs>
`

code.icons = `\
<template>
  <vb-tabs :tabs="tabs"></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { name: 'Pictures', icon: 'fa-image' },
          { name: 'Music', icon: 'fa-music' },
          { name: 'Videos', icon: 'fa-film' }
        ]
      }
    }
  }
</script>
`

code.sizes = `\
<vb-tabs :tabs="tabs" size="small"></vb-tabs>

<vb-tabs :tabs="tabs"></vb-tabs>

<vb-tabs :tabs="tabs" size="medium"></vb-tabs>

<vb-tabs :tabs="tabs" size="large"></vb-tabs>
`

code.styles = `\
<template>
  <div>
    <vb-tabs :tabs="tabs" type="boxed"></vb-tabs>

    <vb-tabs :tabs="tabs" type="toggle"></vb-tabs>

    <vb-tabs :tabs="tabs" type="toggle" rounded></vb-tabs>

    <vb-tabs :tabs="tabs" fullwidth></vb-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          { name: 'Pictures', icon: 'fa-image' },
          { name: 'Music', icon: 'fa-music' },
          { name: 'Videos', icon: 'fa-film' }
        ]
      }
    }
  }
</script>
`
code.bottom = `\
<template>
  <div>
    <vb-tabs :tabs="tabs" end></vb-tabs>

    <vb-tabs :tabs="tabs2" end></vb-tabs>

    <vb-tabs :tabs="tabs2" type="boxed" end></vb-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }],
        tabs2: [
          { name: 'Pictures', icon: 'fa-image' },
          { name: 'Music', icon: 'fa-music' },
          { name: 'Videos', icon: 'fa-film' }
        ]
      }
    }
  }
</script>

`

code.combining = {}

code.combining.boxed = `\
<vb-tabs :tabs="tabs" align="centered" type="boxed"></vb-tabs>
`

code.combining.toggle = `\
<vb-tabs :tabs="tabs" type="toggle" fullwidth></vb-tabs>
`

code.combining.boxedMedium = `\
<vb-tabs :tabs="tabs" align="centered" type="boxed" size="medium"></vb-tabs>
`

code.combining.boxedLarge = `\
<vb-tabs :tabs="tabs" type="toggle" size="large" fullwidth></vb-tabs>
`

export default code
