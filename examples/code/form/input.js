let code = {}
code.basic = `
<template>
  <vb-input />
</template>
`
code.colors = `
<template>
  <div class="block">
    <vb-input color="primary" placeholder="Primary" />
  </div>
  <div class="block">
    <vb-input color="info" placeholder="Info" />
  </div>
  <div class="block">
    <vb-input color="success" placeholder="Success" />
  </div>
  <div class="block">
    <vb-input color="warning" placeholder="Warning" />
  </div>
  <div class="block">
    <vb-input color="danger" placeholder="Danger" />
  </div>
  <div class="block">
    <vb-input color="white" placeholder="White" />
  </div>
  <div class="block">
    <vb-input color="light" placeholder="Light" />
  </div>
  <div class="block">
    <vb-input color="dark" placeholder="Dark" />
  </div>
  <div class="block">
    <vb-input color="black" placeholder="Black" />
  </div>
  <div class="block">
    <vb-input color="link" placeholder="Link" />
  </div>
</template>
`
code.sizes = `
<template>
  <div class="block">
    <vb-input size="small" placeholder="Small" />
  </div>
  <div class="block">
    <vb-input placeholder="Normal" />
  </div>
  <div class="block">
    <vb-input size="medium" placeholder="Medium" />
  </div>
  <div class="block">
    <vb-input size="large" placeholder="Large" />
  </div>
</template>
`
code.rounded = `
<template>
  <vb-input rounded placeholder="Rounded" />
</template>
`
code.states = `
<template>
  <div class="block">
    <vb-input placeholder="Normal" />
  </div>
  <div class="block">
    <vb-input state="hovered" placeholder="Hovered" />
  </div>
  <div class="block">
    <vb-input state="focused" placeholder="Focus" />
  </div>
  <div class="block">
    <vb-input placeholder="Loading" loading />
  </div>
  <div class="block">
    <vb-input placeholder="Disabled" disabled />
  </div>
  <div class="block">
    <vb-input value="This text is readonly" placeholder="Disabled" readonly />
  </div>
  <div class="block">
    <vb-input value="Static: me@example.com" static readonly />
  </div>
</template>
`
code.icon = `
<template>
  <vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Normal" />
</template>
`
code.event = `
<template>
  Value: <strong>{{value}}</strong>
  <br>
  State: <strong>{{placeholder}}</strong>
  <vb-input v-model="value" @focus="handleFocus" @blur="handleBlur" />
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        placeholder: 'Input blured!'
      }
    },
    methods: {
      change(value) {
        this.value = value
      },
      handleFocus() {
        this.placeholder = 'Input focused!'
      },
      handleBlur() {
        this.placeholder = 'Input blurred!'
      }
    }
  }
  </script>
`
export default code
