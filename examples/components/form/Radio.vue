<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-radio>Basic</vb-radio>
        <vb-radio disabled>Disabled</vb-radio>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div class="block" slot="control">
          Gender: <strong>{{gender}}</strong>
        </div>

        <div class="block">
          <vb-radio :label="1" v-model="gender">Female</vb-radio>
          <vb-radio :label="2" v-model="gender">Male</vb-radio>
        </div>
        <pre slot="code">{{code.events.block}}</pre>
      </demo>

      <vb-title type="subtitle" size="6">Radio Group</vb-title>
      <demo>
        <div class="block" slot="control">
          Gender: <strong>{{gender2}}</strong>
        </div>

        <vb-radio-group v-model="gender2" @change="handleChange">
          <vb-radio :label="1">Female</vb-radio>
          <vb-radio :label="2">Male</vb-radio>
        </vb-radio-group>
        <pre slot="code">{{code.events.group}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/form/radio.js'

export default {
  name: 'Radio',
  data() {
    return {
      code,
      gender: 1,
      gender2: 2
    }
  },
  methods: {
    handleChange() {}
  }
}
</script>
