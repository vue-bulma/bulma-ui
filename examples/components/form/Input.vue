<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-input />
    </vb-box>

    <span id="colors" class="title">Colors:</span>

    <vb-box>
      <div class="field">
        <vb-input color="primary" placeholder="Primary" />
      </div>
      <div class="field">
        <vb-input color="info" placeholder="Info" />
      </div>
      <div class="field">
        <vb-input color="success" placeholder="Success" />
      </div>
      <div class="field">
        <vb-input color="warning" placeholder="Warning" />
      </div>
      <div class="field">
        <vb-input color="danger" placeholder="Danger" />
      </div>
      <div class="field">
        <vb-input color="white" placeholder="White" />
      </div>
      <div class="field">
        <vb-input color="light" placeholder="Light" />
      </div>
      <div class="field">
        <vb-input color="dark" placeholder="Dark" />
      </div>
      <div class="field">
        <vb-input color="black" placeholder="Black" />
      </div>
      <div class="field">
        <vb-input color="link" placeholder="Link" />
      </div>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <div class="field">
        <vb-input size="small" placeholder="Small" />
      </div>
      <div class="field">
        <vb-input placeholder="Normal" />
      </div>
      <div class="field">
        <vb-input size="medium" placeholder="Medium" />
      </div>
      <div class="field">
        <vb-input size="large" placeholder="Large" />
      </div>
    </vb-box>

    <span id="styles" class="title">Styles:</span>

    <vb-box>
      <vb-input rounded placeholder="Rounded" />
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <div class="field">
        <vb-input placeholder="Normal" />
      </div>
      <div class="field">
        <vb-input state="hovered" placeholder="Hovered" />
      </div>
      <div class="field">
        <vb-input state="focused" placeholder="Focus" />
      </div>
      <div class="field">
        <vb-input placeholder="Loading" loading />
      </div>
      <div class="field">
        <vb-input placeholder="Disabled" disabled />
      </div>
      <div class="field">
        <vb-input value="This text is readonly" placeholder="Disabled" readonly />
      </div>
      <div class="field">
        <vb-input value="Static: me@example.com" static readonly />
      </div>
    </vb-box>

    <span id="icons" class="title">With Font Awesome icons:</span>

    <vb-box>
      <vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Normal" />
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
