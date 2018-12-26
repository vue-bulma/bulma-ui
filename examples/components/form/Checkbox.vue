<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div>
          <vb-checkbox v-model="rember">Remember me</vb-checkbox> // {{rember}}
        </div>

        <vb-checkbox v-model="agree">
          I agree to the <a href="#">terms and conditions</a> // {{agree}}
        </vb-checkbox>

        <div>
          <vb-checkbox disabled>
            Save my preferences
          </vb-checkbox>
        </div>
      </demo>
    </example-section-item>


    <example-section-item title="Group">
      <demo>
        <div class="block" slot="control">
          The animals you like: <strong>{{animals.join(', ')}}</strong>.
        </div>

        <vb-checkbox-group v-model="animals">
          <vb-checkbox label="dog">Dog</vb-checkbox>
          <vb-checkbox label="cat">Cat</vb-checkbox>
          <vb-checkbox label="mouse">Mouse</vb-checkbox>
          <vb-checkbox label="panda">Panda</vb-checkbox>
        </vb-checkbox-group>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div class="block" slot="control">
          I'm <strong>{{checked ? 'ok' : 'not ok'}}</strong>.
          <br>
          This Checkbox <strong>{{ focused ? 'Focused' : 'Blurred' }}</strong>
        </div>

        <vb-checkbox v-model="checked" @focus="handleFocus" @blur="handleBlur">
          Are You OK
        </vb-checkbox>
      </demo>
    </example-section-item>
  </vb-section>
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
