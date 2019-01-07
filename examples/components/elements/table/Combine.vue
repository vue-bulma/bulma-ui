<template>
  <example-section-item title="Combine">
    <demo>
      <vb-form slot="control" horizontal>
        <vb-form-item label="Align" addons>
          <vb-button @click="toggleAlign('left')">
            <vb-icon name="fa fa-align-left"></vb-icon>
            <span>left</span>
          </vb-button>
          <vb-button @click="toggleAlign('centered')">
            <vb-icon name="fa fa-align-center"></vb-icon>
            <span>center</span>
          </vb-button>
          <vb-button @click="toggleAlign('right')">
            <vb-icon name="fa fa-align-right"></vb-icon>
            <span>right</span>
          </vb-button>
        </vb-form-item>

        <vb-form-item label="Border" addons>
          <vb-radio-group v-model="border">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Stripes" addons>
          <vb-radio-group v-model="stripes">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Narrower" addons>
          <vb-radio-group v-model="narrow">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Hoverable" addons>
          <vb-radio-group v-model="hover">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Fullwidth" addons>
          <vb-radio-group v-model="fullwidth">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Highlight selection" addons>
          <vb-radio-group v-model="singleSelection">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>

        <vb-form-item label="Multiple selection" addons>
          <vb-radio-group v-model="multipleSelection">
            <vb-radio :label="true">Yes</vb-radio>
            <vb-radio :label="false">No</vb-radio>
          </vb-radio-group>
        </vb-form-item>
      </vb-form>

      <vb-table
        :align="align"
        :border="border"
        :striped="stripes"
        :narrow="narrow"
        :hoverable="hover"
        :fullwidth="fullwidth"
        :highlight-selected="singleSelection"
        :data="tableData"
      >
        <vb-table-column v-if="multipleSelection" type="selection"></vb-table-column>

        <vb-table-column label="Position" prop="position"></vb-table-column>
        <vb-table-column label="Team" prop="team"></vb-table-column>
        <vb-table-column label="Played" prop="played"></vb-table-column>
        <vb-table-column label="Won" prop="won"></vb-table-column>
        <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
        <vb-table-column label="Lost" prop="lost"></vb-table-column>
        <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
        <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
        <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
        <vb-table-column label="Points" prop="points"></vb-table-column>
      </vb-table>

      <pre slot="code">{{code.combine}}</pre>
    </demo>
  </example-section-item>
</template>

<script>
import tableData from './data.json'
import code from '@examples/code/elements/table.js'

export default {
  data() {
    return {
      code,
      tableData,
      align: null,
      border: false,
      stripes: false,
      narrow: false,
      hover: false,
      fullwidth: false,
      singleSelection: false,
      multipleSelection: false
    }
  },
  methods: {
    toggleAlign(align) {
      this.align = align
    }
  }
}
</script>

<style lang="scss" scoped>
.control-item:not(:last-child) {
  margin-bottom: 0.5rem;
}
.control-item {
  display: flex;
  align-items: center;
  .control-label {
    font-weight: bold;
    margin-right: 1rem;
  }
}
</style>
