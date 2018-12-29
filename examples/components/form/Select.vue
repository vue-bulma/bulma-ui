<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-select :value="model">
          <option>Select dropdown</option>
          <option>With options</option>
        </vb-select>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Multiple">
      <demo>
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
        <pre slot="code">{{ multiples }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <div class="block">
          <vb-select color="primary" value="Primary">
            <option>Primary</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="info" value="Info">
            <option>Info</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="success" value="Success">
            <option>Success</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="warning" value="Warning">
            <option>Warning</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="danger" value="Danger">
            <option>Danger</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="white" value="White">
            <option>White</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="light" value="Light">
            <option>Light</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="dark" value="Dark">
            <option>Dark</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="black" value="Black">
            <option>Black</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select color="link" value="Link">
            <option>Link</option>
            <option>With options</option>
          </vb-select>
        </div>
        <pre slot="code">{{ colors }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Styles">
      <demo>
        <vb-select rounded value="Rounded">
          <option>Rounded</option>
          <option>With options</option>
        </vb-select>
        <pre slot="code">{{ styles }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <div class="block">
          <vb-select size="small" value="Small dropdown">
            <option>Small dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select value="Default dropdown">
            <option>Default dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="medium" value="Medium dropdown">
            <option>Medium dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="large" value="Large dropdown">
            <option>Large dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <pre slot="code">{{ sizes }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo>
        <div class="block">
          <vb-select value="Normal dropdown">
            <option>Normal dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select state="hovered" value="Hover dropdown">
            <option>Hover dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select state="focused" value="Focused dropdown">
            <option>Focused dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select loading value="Loading dropdown">
            <option>Loading dropdown</option>
            <option>With options</option>
          </vb-select>
        </div>
        <pre slot="code">{{ states }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="With icons">
      <demo>
        <div class="block">
          <vb-select size="small" prefix="fa fa-home" value="Small dropdown with Small icon">
            <option>Small dropdown with Small icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select prefix="fa fa-home" value="Default dropdown with Default icon">
            <option>Default dropdown with Default icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="medium" prefix="fa fa-home" value="Medium dropdown with Medium icon">
            <option>Medium dropdown with Medium icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <div class="block">
          <vb-select size="large" prefix="fa fa-home" value="Large dropdown with Large icon">
            <option>Large dropdown with Large icon</option>
            <option>With options</option>
          </vb-select>
        </div>
        <pre slot="code">{{ icons }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div class="block" slot="control">
          Value:
          <strong>{{value}}</strong>
          <br>This Select on:
          <strong>{{placeholder}}</strong>!
        </div>

        <vb-select v-model="value" @focus="handleFocus" @blur="handleBlur">
          <option v-for="item in options" :key="item.value" :value="item.value">{{item.label}}</option>
        </vb-select>
        <pre slot="code">{{ events.normal }}</pre>
      </demo>

      <demo>
        <div class="block" slot="control">
          Value:
          <strong>{{multiple}}</strong>
        </div>

        <vb-select multiple v-model="multiple">
          <option v-for="item in options" :key="item.value" :value="item.value">{{item.label}}</option>
        </vb-select>
        <pre slot="code">{{ events.multiple }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/form/select.js'

export default {
  name: 'Select',
  data() {
    return {
      basic: code.basic,
      multiples: code.multiple,
      colors: code.colors,
      styles: code.style,
      sizes: code.sizes,
      states: code.states,
      icons: code.icons,
      events: code.events,
      model: 'Select dropdown',
      placeholder: 'Blurred',
      value: 1,
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
