let code = {}
code.basic = `
<template>
  <vb-image :src="image" size="128x128"></vb-image>
</template>

<script>
export default {
  data() {
    return {
      image: require('../../assets/images/128x128.png')
    }
  }
}
</script>
`

code.rounded = `
<template>
  <vb-image :src="image" size="128x128" rounded></vb-image>
</template>
`
export default code
