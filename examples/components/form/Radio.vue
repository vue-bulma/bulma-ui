<template>
  <div>
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-radio disabled>Disabled</vb-radio>
      <vb-radio checked>Default Checked</vb-radio>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <div>
        Gender:
      </div>

      <vb-radio :label="1" v-model="gender">Female</vb-radio>
      <vb-radio :label="2" v-model="gender">Male</vb-radio>

      <div>
        Value: {{gender}}
      </div>
    </vb-box>

    <vb-box>
      <div>
        Group gender:
      </div>

      <vb-radio-group v-model="gender2">
        <vb-radio :label="1">Female</vb-radio>
        <vb-radio :label="2">Male</vb-radio>
      </vb-radio-group>

      <div>
        Value: {{gender2}}
      </div>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      gender: 1,
      gender2: 2
    }
  }
}
</script>
