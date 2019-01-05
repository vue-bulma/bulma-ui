<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div>
          <vb-checkbox v-model="rember">Remember me</vb-checkbox>
          // {{rember}}
        </div>

        <vb-checkbox v-model="agree">
          I agree to the
          <a href="#">terms and conditions</a>
          // {{agree}}
        </vb-checkbox>

        <div>
          <vb-checkbox disabled>Save my preferences</vb-checkbox>
        </div>
        <pre slot="code">{{ code.basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Group">
      <demo>
        <div class="block" slot="control">
          The animals you like:
          <strong>{{animals.join(', ')}}</strong>.
        </div>

        <vb-checkbox-group v-model="animals" @change="handleGroupChange">
          <vb-checkbox label="dog">Dog</vb-checkbox>
          <vb-checkbox label="cat">Cat</vb-checkbox>
          <vb-checkbox label="mouse">Mouse</vb-checkbox>
          <vb-checkbox label="panda">Panda</vb-checkbox>
        </vb-checkbox-group>
        <pre slot="code">{{ code.group }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div class="block" slot="control">
          I'm
          <strong>{{checked ? 'ok' : 'not ok'}}</strong>.
          <br>This Checkbox
          <strong>{{ focused ? 'Focused' : 'Blurred' }}</strong>
        </div>

        <vb-checkbox v-model="checked" @focus="handleFocus" @blur="handleBlur">Are You OK</vb-checkbox>
        <pre slot="code">{{ code.events }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/form/checkbox.js'

export default {
  name: 'Checkbox',
  data() {
    return {
      code,
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
    },
    handleGroupChange() {}
  }
}
</script>
