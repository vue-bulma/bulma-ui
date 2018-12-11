<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-input />
    </vb-box>

    <span id="type" class="title">Type:</span>

    <vb-box>
      <vb-input type="primary" placeholder="Primary" />
      <vb-input type="info" placeholder="Info" />
      <vb-input type="success" placeholder="Success" />
      <vb-input type="warning" placeholder="Warning" />
      <vb-input type="danger" placeholder="Danger" />
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <vb-input size="small" placeholder="Small" />
      <vb-input placeholder="Normal" />
      <vb-input size="medium" placeholder="Medium" />
      <vb-input size="large" placeholder="Large" />
    </vb-box>

    <span id="styles" class="title">Styles:</span>

    <vb-box>
      <vb-input rounded placeholder="Rounded" />
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <vb-input placeholder="Normal" />
      <vb-input state="hovered" placeholder="Hovered" />
      <vb-input state="focused" placeholder="Focus" />
      <vb-input placeholder="Loading" loading />
      <vb-input placeholder="Disabled" disabled />
      <vb-input value="This text is readonly" placeholder="Disabled" readonly />
      <vb-input value="Static: me@example.com" static readonly />
    </vb-box>

    <span id="icons" class="title">With Font Awesome icons:</span>

    <vb-box>
      <vb-input prefix="fa-envelope" suffix="fa-check" placeholder="Normal" />
    </vb-box>

    <span id="event" class="title">Event:</span>

    <vb-box>
      <vb-input v-model="value" @focus="handleFocus" @blur="handleBlur" />
      <vb-input :value="value" :placeholder="placeholder" static readonly />
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'Input',
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
