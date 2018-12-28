let code = {}
code.basic = `
<template>
  <vb-tabs :tabs="tabs" @click="handleClick"></vb-tabs>
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
code.alignment = `
<template>
  <vb-tabs :tabs="tabs"></vb-tabs>
  <vb-tabs :tabs="tabs" align="centered"></vb-tabs>
  <vb-tabs :tabs="tabs" align="right"></vb-tabs>
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
code.icons = `
<template>
  <vb-tabs :tabs="tabs2"></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
code.sizes = `
<template>
  <vb-tabs :tabs="tabs" size="small"></vb-tabs>
  <vb-tabs :tabs="tabs"></vb-tabs>
  <vb-tabs :tabs="tabs" size="medium"></vb-tabs>
  <vb-tabs :tabs="tabs" size="large"></vb-tabs>
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
code.styles = `
<template>
  <vb-tabs :tabs="tabs2" type="boxed"></vb-tabs>
  <vb-tabs :tabs="tabs2" type="toggle"></vb-tabs>
  <vb-tabs :tabs="tabs2" type="toggle" rounded></vb-tabs>
  <vb-tabs :tabs="tabs2" fullwidth></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
code.combining = {}
code.combining.boxed = `
<template>
  <vb-tabs :tabs="tabs2" align="centered" type="boxed"></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
code.combining.toggle = `
<template>
  <vb-tabs :tabs="tabs2" type="toggle" fullwidth></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
code.combining.boxedMedium = `
<template>
  <vb-tabs :tabs="tabs2" align="centered" type="boxed" size="medium"></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
code.combining.toggleLarge = `
<template>
  <vb-tabs :tabs="tabs2" type="toggle" size="large" fullwidth></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
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
`
export default code