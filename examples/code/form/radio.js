let code = {}
code.basic = `
<template>
  <vb-radio disabled>Disabled</vb-radio>
  <vb-radio checked>Default Checked</vb-radio>
</template>
`
code.events = {}
code.events.block = `
<template>
  Gender: <strong>{{gender}}</strong>

  <div class="block">
    <vb-radio :label="1" v-model="gender">Female</vb-radio>
    <vb-radio :label="2" v-model="gender">Male</vb-radio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gender: 1
      }
    }
  }
</script>
`
code.events.group = `
<template>
  Group gender: <strong>{{gender}}</strong>

  <vb-radio-group v-model="gender">
    <vb-radio :label="1">Female</vb-radio>
    <vb-radio :label="2">Male</vb-radio>
  </vb-radio-group>
</template>

<script>
export default {
  data() {
    return {
      gender: 2
    }
  }
}
</script>
`
export default code
