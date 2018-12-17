<template>
  <vb-box>
    <vb-radio name="horizontal" :value="true" v-model="horizontal">Horizontal</vb-radio>
    <vb-radio name="horizontal" :value="false" v-model="horizontal">Vertical</vb-radio>

    <vb-form :horizontal="horizontal">
      <vb-form-item label="From">
        <vb-input prefix="fa fa-user" placeholder="Name"></vb-input>
        <vb-input color="primary" prefix="fa fa-envelope" suffix="fa fa-check" value="alex@smith.com"></vb-input>
      </vb-form-item>

      <vb-form-item addons>
        <vb-button state="static">+44</vb-button>
        <vb-input type="tel" placeholder="Your phone number" expanded></vb-input>

        <p slot="message" class="help">Do not enter the first zero</p>
      </vb-form-item>

      <vb-form-item label="Department">
        <vb-select value="Marketing">
          <option>Business development</option>
          <option>Marketing</option>
          <option>Sales</option>
        </vb-select>
      </vb-form-item>

      <vb-form-item label="Already a member?">
        <div>
          <vb-radio name="member">Yes</vb-radio>
          <vb-radio name="member">No</vb-radio>
        </div>
      </vb-form-item>

      <vb-form-item label="Subject" message="This field is required" color="danger">
        <vb-input placeholder="e.g. Partnership opportunity" color="danger"></vb-input>
      </vb-form-item>

      <vb-form-item label="Question">
        <vb-textarea placeholder="Explain how we can help you"></vb-textarea>
      </vb-form-item>

      <vb-form-item>
        <vb-button color="primary">Send message</vb-button>
      </vb-form-item>
    </vb-form>
  </vb-box>
</template>

<script>
export default {
  name: 'FormHorizontal',
  data() {
    return {
      horizontal: true
    }
  }
}
</script>
