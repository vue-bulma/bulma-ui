<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-radio disabled>Disabled</vb-radio>
        <vb-radio checked>Default Checked</vb-radio>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div class="block" slot="control">
          Gender:
          <strong>{{gender}}</strong>
        </div>

        <div class="block">
          <vb-radio :label="1" v-model="gender">Female</vb-radio>
          <vb-radio :label="2" v-model="gender">Male</vb-radio>
        </div>
        <pre slot="code">{{ events.block }}</pre>
      </demo>

      <demo>
        <div class="block" slot="control">
          Group gender:
          <strong>{{gender2}}</strong>
        </div>

        <vb-radio-group v-model="gender2">
          <vb-radio :label="1">Female</vb-radio>
          <vb-radio :label="2">Male</vb-radio>
        </vb-radio-group>
        <pre slot="code">{{ events.group }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/form/radio.js'

export default {
  name: 'Radio',
  data() {
    return {
      basic: code.basic,
      events: code.events,
      gender: 1,
      gender2: 2
    }
  }
}
</script>
