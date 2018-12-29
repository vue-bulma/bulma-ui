let code = {}
code.basic = `
<template>
  <div class="block">
    <vb-textarea placeholder="Basic" />
  </div>

  <div class="block">
    <vb-textarea :rows="2" placeholder="2 lines of textarea" />
  </div>
</template>
`
code.colors = `
<template>
  <div class="block">
    <vb-textarea color="primary" :rows="2" placeholder="Primary textarea" />
  </div>
  <div class="block">
    <vb-textarea color="info" :rows="2" placeholder="Info textarea" />
  </div>
  <div class="block">
    <vb-textarea color="success" :rows="2" placeholder="Success textarea" />
  </div>
  <div class="block">
    <vb-textarea color="warning" :rows="2" placeholder="Warning textarea" />
  </div>
  <div class="block">
    <vb-textarea color="danger" :rows="2" placeholder="Danger textarea" />
  </div>
  <div class="block">
    <vb-textarea color="white" :rows="2" placeholder="White textarea" />
  </div>
  <div class="block">
    <vb-textarea color="light" :rows="2" placeholder="Light textarea" />
  </div>
  <div class="block">
    <vb-textarea color="dark" :rows="2" placeholder="Dark textarea" />
  </div>
  <div class="block">
    <vb-textarea color="black" :rows="2" placeholder="Black textarea" />
  </div>
  <div class="block">
    <vb-textarea color="link" :rows="2" placeholder="Link textarea" />
  </div>
</template>
`
code.sizes = `
<template>
  <div class="block">
    <vb-textarea size="small" :rows="2" placeholder="Small" />
  </div>
  <div class="block">
    <vb-textarea :rows="2" placeholder="Normal" />
  </div>
  <div class="block">
    <vb-textarea size="medium" :rows="2" placeholder="Medium" />
  </div>
  <div class="block">
    <vb-textarea size="large" :rows="2" placeholder="Large" />
  </div>
</template>
`
code.states = `
<template>
  <div class="block">
    <vb-textarea placeholder="Normal" :rows="2" />
  </div>
  <div class="block">
    <vb-textarea placeholder="Hover" state="hovered" :rows="2" />
  </div>
  <div class="block">
    <vb-textarea placeholder="Focus" state="focused" :rows="2" />
  </div>
  <div class="block">
    <vb-textarea placeholder="Loading" loading :rows="2" />
  </div>
  <div class="block">
    <vb-textarea placeholder="Disabled" disabled :rows="2" />
  </div>
  <div class="block">
    <vb-textarea value="Read only" readonly :rows="2" />
  </div>
  <div class="block">
    <vb-textarea placeholder="Fixed Size" :resize="false" :rows="2" />
  </div>
</template>
`
code.loading = `
<template>
  <div class="block">
    <vb-textarea size="small" :rows="2" placeholder="Small loading textarea" loading />
  </div>
  <div class="block">
    <vb-textarea :rows="2" placeholder="Normal loading textarea" loading />
  </div>
  <div class="block">
    <vb-textarea size="medium" :rows="2" placeholder="Medium loading textarea" loading />
  </div>
  <div class="block">
    <vb-textarea size="large" :rows="2" placeholder="Large loading textarea" loading />
  </div>
</template>
`
code.events = `
<template>
  Value: <strong>{{value}}</strong>
  <br>
  State: <strong>{{placeholder}}</strong>

  <vb-textarea v-model="value" placeholder="Max 5 Character" :maxlength="5" @focus="handleFocus" @blur="handleBlur"
    autofocus />
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Textarea focused!'
    },
    handleBlur() {
      this.placeholder = 'Textarea blurred!'
    }
  }
}
</script>
`
export default code
