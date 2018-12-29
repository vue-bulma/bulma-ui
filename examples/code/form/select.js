let code = {}
code.basic = `
<template>
  <vb-select :value="model">
    <option>Select dropdown</option>
    <option>With options</option>
  </vb-select>
</template>

<script>
  export default {
    data() {
      return {
        model: 'Select dropdown',
      }
    }
  }
</script>
`
code.multiple = `
<template>
  <vb-select multiple lines="8" :value="model">
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
</template>

<script>
  export default {
    data() {
      return {
        model: [],
      }
    }
  }
</script>
`
code.colors = `
<template>
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
</template>
`
code.style = `
<template>
  <vb-select rounded value="Rounded">
    <option>Rounded</option>
    <option>With options</option>
  </vb-select>
</template>
`
code.sizes = `
<template>
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
</template>
`
code.states = `
<template>
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
</template>
`
code.icons = `
<template>
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
</template>
`
code.events = {}
code.events.normal = `
<template>
  Value:
  <strong>{{value}}</strong>
  <br>This Select on:
  <strong>{{placeholder}}</strong>!

  <vb-select v-model="value" @focus="handleFocus" @blur="handleBlur">
    <option v-for="item in options" :key="item.value" :value="item.value">{{item.label}}</option>
  </vb-select>
</template>

<script>
  export default {
    data() {
      return {
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
`
code.events.multiple = `
<template>
    Value:
    <strong>{{multiple}}</strong>

    <vb-select multiple v-model="multiple">
      <option v-for="item in options" :key="item.value" :value="item.value">{{item.label}}</option>
    </vb-select>
</template>

<script>
  export default {
    data() {
      return {
        multiple: [],
        options: [{ label: 'Beijing', value: 1 }, { label: 'Shanghai', value: 2 }]
      }
    }
  }
</script>
`
export default code
