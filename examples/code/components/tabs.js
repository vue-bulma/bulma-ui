let code = {}
code.basic = `\
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
code.alignment = `\
<template>
  <vb-tabs :tabs="tabs"></vb-tabs>
  <vb-tabs :tabs="tabs" align="centered"></vb-tabs>
  <vb-tabs :tabs="tabs" align="right"></vb-tabs>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }]
      }
    }
  }
</script>
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
        tabs: [{ name: 'Pictures' }, { name: 'Music' }, { name: 'Videos' }]
      }
    }
  }
</script>
`
code.styles = `\
<template>
  <vb-tabs :tabs="tabs" type="boxed"></vb-tabs>
  <vb-tabs :tabs="tabs" type="toggle"></vb-tabs>
  <vb-tabs :tabs="tabs" type="toggle" rounded></vb-tabs>
  <vb-tabs :tabs="tabs" fullwidth></vb-tabs>
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
code.combining = {}
code.combining.boxed = `\
<template>
  <vb-tabs :tabs="tabs" align="centered" type="boxed"></vb-tabs>
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
code.combining.toggle = `\
<template>
  <vb-tabs :tabs="tabs" type="toggle" fullwidth></vb-tabs>
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
code.combining.boxedMedium = `\
<template>
  <vb-tabs :tabs="tabs" align="centered" type="boxed" size="medium"></vb-tabs>
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
code.combining.toggleLarge = `\
<template>
  <vb-tabs :tabs="tabs" type="toggle" size="large" fullwidth></vb-tabs>
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
export default code
