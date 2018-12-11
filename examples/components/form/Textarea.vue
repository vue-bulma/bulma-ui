<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-textarea placeholder="Basic" />
    </vb-box>
    <vb-box>
      <vb-textarea :rows="2" placeholder="2 lines of textarea" />
    </vb-box>

    <span id="type" class="title">Type:</span>

    <vb-box>
      <vb-textarea type="primary" :rows="2" placeholder="Primary" />
      <vb-textarea type="info" :rows="2" placeholder="Info" />
      <vb-textarea type="success" :rows="2" placeholder="Success" />
      <vb-textarea type="warning" :rows="2" placeholder="Warning" />
      <vb-textarea type="danger" :rows="2" placeholder="Danger" />
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <vb-textarea size="small" :rows="2" placeholder="Small" />
      <vb-textarea :rows="2" placeholder="Normal" />
      <vb-textarea size="medium" :rows="2" placeholder="Medium" />
      <vb-textarea size="large" :rows="2" placeholder="Large" loading />
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <vb-textarea placeholder="Normal" :rows="2" />
      <vb-textarea placeholder="Hover" state="hovered" :rows="2" />
      <vb-textarea placeholder="Focus" state="focused" :rows="2" />
      <vb-textarea placeholder="Loading" loading :rows="2" />
      <vb-textarea placeholder="Disabled" disabled :rows="2" />
      <vb-textarea value="Read only" readonly :rows="2" />
      <vb-textarea placeholder="Fixed Size" :resize="false" :rows="2" />
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

<style lang="scss" scoped>
.container {
  .box {
    :not(:last-child) {
      margin-right: 0;
    }
  }
}
</style>
