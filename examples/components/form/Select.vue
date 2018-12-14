<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-select :value="model">
        <option>Select dropdown</option>
        <option>With options</option>
      </vb-select>
    </vb-box>

    <span id="multiple" class="title">Multiple:</span>

    <vb-box>
      <vb-select multiple lines="8" :value="[model]">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </vb-select>
    </vb-box>

    <span id="colors" class="title">Colors:</span>

    <vb-box>
      <div class="field">
        <vb-select color="primary" value="Primary">
          <option>Primary</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="info" value="Info">
          <option>Info</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="success" value="Success">
          <option>Success</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="warning" value="Warning">
          <option>Warning</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="danger" value="Danger">
          <option>Danger</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="white" value="White">
          <option>White</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="light" value="Light">
          <option>Light</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="dark" value="Dark">
          <option>Dark</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="black" value="Black">
          <option>Black</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select color="link" value="Link">
          <option>Link</option>
          <option>With options</option>
        </vb-select>
      </div>
    </vb-box>

    <span id="styles" class="title">Styles:</span>

    <vb-box>
      <vb-select rounded :value="model">
        <option>Select dropdown</option>
        <option>With options</option>
      </vb-select>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <div class="field">
        <vb-select size="small" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select size="medium" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select size="large" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
    </vb-box>

    <span id="states" class="title">States:</span>

    <vb-box>
      <div class="field">
        <vb-select :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select state="hovered" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select state="focused" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select loading :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
    </vb-box>

    <span id="icons" class="title">With icons:</span>

    <vb-box>
      <div class="field">
        <vb-select size="small" prefix="fa fa-home" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select prefix="fa fa-home" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select size="medium" prefix="fa fa-home" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
      <div class="field">
        <vb-select size="large" prefix="fa fa-home" :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
      </div>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <vb-select v-model="value" @focus="handleFocus" @blur="handleBlur">
        <option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </option>
      </vb-select>

      <div>
        Value: {{value}}
      </div>
      <div>
        This Select on: {{placeholder}}!
      </div>
    </vb-box>

    <vb-box>
      <vb-select multiple v-model="multiple" @focus="handleFocus" @blur="handleBlur">
        <option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </option>
      </vb-select>

      <div>
        Value: {{multiple}}
      </div>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      model: 'Select dropdown',
      placeholder: 'Blurred',
      value: null,
      multiple: [],
      options: [{ label: 'Beijing', value: 1 }, { label: 'Shanghai', value: 2 }]
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Focused'
    },
    handleBlur() {
      this.placeholder = 'Blurred'
    }
  }
}
</script>
