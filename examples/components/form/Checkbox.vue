<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <div>
        <vb-checkbox>
          Remember me
        </vb-checkbox>
      </div>

      <div>
        <vb-checkbox>
          I agree to the <a href="#">terms and conditions</a>
        </vb-checkbox>
      </div>

      <div>
        <vb-checkbox disabled>
          Save my preferences
        </vb-checkbox>
      </div>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <div>
        <vb-checkbox v-model="checked"  @focus="handleFocus" @blur="handleBlur">
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
      focused: false
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
