<template>
  <div>
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <div>
        <vb-checkbox v-model="rember">Remember me</vb-checkbox> // {{rember}}
      </div>

      <div>
        <vb-checkbox v-model="agree">
          I agree to the <a href="#">terms and conditions</a> // {{agree}}
        </vb-checkbox>
      </div>

      <div>
        <vb-checkbox disabled>
          Save my preferences
        </vb-checkbox>
      </div>
    </vb-box>

    <span id="group" class="title">Group:</span>

    <vb-box>
      The animals you like: {{animals.join(', ')}}.
      <vb-checkbox-group v-model="animals">
        <vb-checkbox label="dog">Dog</vb-checkbox>
        <vb-checkbox label="cat">Cat</vb-checkbox>
        <vb-checkbox label="mouse">Mouse</vb-checkbox>
        <vb-checkbox label="panda">Panda</vb-checkbox>
      </vb-checkbox-group>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <div>
        <vb-checkbox v-model="checked" @focus="handleFocus" @blur="handleBlur">
          Are You OK
        </vb-checkbox>
      </div>
      <div>
        I'm {{checked ? 'ok' : 'not ok'}}.
      </div>
      <div>
        This Checkbox "{{ focused ? 'Focused' : 'Blurred' }}"
      </div>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked: true,
      focused: false,
      rember: false,
      agree: false,
      animals: []
    }
  },
  methods: {
    handleFocus() {
      this.focused = true
    },
    handleBlur() {
      this.focused = false
    }
  }
}
</script>
