let code = {}
code.basic = `
<template>
  <div>
    <vb-checkbox>Remember me</vb-checkbox>
  </div>

  <vb-checkbox>
    I agree to the <a href="#">terms and conditions</a>
  </vb-checkbox>

  <div>
    <vb-checkbox disabled>
      Save my preferences
    </vb-checkbox>
  </div>
</template>
`
code.group = `
<template>
  <vb-checkbox-group v-model="animals">
    <vb-checkbox label="dog">Dog</vb-checkbox>
    <vb-checkbox label="cat">Cat</vb-checkbox>
    <vb-checkbox label="mouse">Mouse</vb-checkbox>
    <vb-checkbox label="panda">Panda</vb-checkbox>
  </vb-checkbox-group>
</template>

<script>
  export default {
    data() {
      animals: []
    }
  }
</script>
`
code.events = `
<template>
  I'm
  <strong>{{checked ? 'ok' : 'not ok'}}</strong>.
  <br>This Checkbox
  <strong>{{ focused ? 'Focused' : 'Blurred' }}</strong>

  <vb-checkbox v-model="checked" @focus="handleFocus" @blur="handleBlur">Are You OK</vb-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
        focused: false
      }
    },
    methods: {
      handleFocus() {
        this.focused = true
      },
      handleBlur() {
        this.focused = false
      }
    }
  }
</script>
`
export default code