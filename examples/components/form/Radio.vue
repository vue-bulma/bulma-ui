<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-radio name="test" disabled>Disabled</vb-radio>
      <vb-radio name="test" checked>Default Checked</vb-radio>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <div>
        Gender:
      </div>

      <vb-radio name="gender" :value="1" :model="gender" @change="handleChange">Female</vb-radio>
      <vb-radio name="gender" :value="2" :model="gender" @change="handleChange">Male</vb-radio>

      <div>
        Value: {{gender}}
      </div>
    </vb-box>

    <vb-box>
      <div>
        Gender2:
      </div>

      <vb-radio name="gender2" :value="1" v-model="gender2">Female</vb-radio>
      <vb-radio name="gender2" :value="2" v-model="gender2">Male</vb-radio>

      <div>
        Value2: {{gender2}}
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
  },
  methods: {
    handleChange(value) {
      this.gender = value
    }
  }
}
</script>

<style lang="scss" scoped>
.radio + .radio {
  margin-left: 1.5rem;
}
</style>
