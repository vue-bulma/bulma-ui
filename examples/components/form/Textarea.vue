<template>
  <div>
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <div class="field">
        <vb-textarea placeholder="Basic" />
      </div>

      <div class="field">
        <vb-textarea :rows="2" placeholder="2 lines of textarea" />
      </div>
    </vb-box>

    <span id="color" class="title">Colors:</span>

    <vb-box>
      <div class="field">
        <vb-textarea color="primary" :rows="2" placeholder="Primary" />
      </div>
      <div class="field">
        <vb-textarea color="info" :rows="2" placeholder="Info" />
      </div>
      <div class="field">
        <vb-textarea color="success" :rows="2" placeholder="Success" />
      </div>
      <div class="field">
        <vb-textarea color="warning" :rows="2" placeholder="Warning" />
      </div>
      <div class="field">
        <vb-textarea color="danger" :rows="2" placeholder="Danger" />
      </div>
      <div class="field">
        <vb-textarea color="white" :rows="2" placeholder="White" />
      </div>
      <div class="field">
        <vb-textarea color="light" :rows="2" placeholder="Light" />
      </div>
      <div class="field">
        <vb-textarea color="dark" :rows="2" placeholder="Dark" />
      </div>
      <div class="field">
        <vb-textarea color="black" :rows="2" placeholder="Black" />
      </div>
      <div class="field">
        <vb-textarea color="link" :rows="2" placeholder="Link" />
      </div>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <div class="field">
        <vb-textarea size="small" :rows="2" placeholder="Small" />
      </div>
      <div class="field">
        <vb-textarea :rows="2" placeholder="Normal" />
      </div>
      <div class="field">
        <vb-textarea size="medium" :rows="2" placeholder="Medium" />
      </div>
      <div class="field">
        <vb-textarea size="large" :rows="2" placeholder="Large" loading />
      </div>
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <div class="field">
        <vb-textarea placeholder="Normal" :rows="2" />
      </div>
      <div class="field">
        <vb-textarea placeholder="Hover" state="hovered" :rows="2" />
      </div>
      <div class="field">
        <vb-textarea placeholder="Focus" state="focused" :rows="2" />
      </div>
      <div class="field">
        <vb-textarea placeholder="Loading" loading :rows="2" />
      </div>
      <div class="field">
        <vb-textarea placeholder="Disabled" disabled :rows="2" />
      </div>
      <div class="field">
        <vb-textarea value="Read only" readonly :rows="2" />
      </div>
      <div class="field">
        <vb-textarea placeholder="Fixed Size" :resize="false" :rows="2" />
      </div>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <vb-textarea v-model="value" placeholder="Max 5 Character" :maxlength="5" @focus="handleFocus" @blur="handleBlur" autofocus />
      <vb-input :value="value" :placeholder="placeholder" static readonly />
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  data() {
    return {
      value: '',
      placeholder: 'Textarea blurred!'
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
