<template>
  <example-section-item title="Selection">
    <vb-title type="subtitle">Single</vb-title>
    <demo :code="code.single">
      <vb-buttons-list slot="control">
        <vb-button color="primary" outlined @click="toggleSingleSelection(2)">
          Select third row
        </vb-button>

        <vb-button color="info" outlined @click="toggleSingleSelection()">
          Clear selection
        </vb-button>
      </vb-buttons-list>

      <vb-table ref="single" highlight-selected :data="tableData" @current-change="handleRowChange">
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
    </demo>

    <vb-title type="subtitle">Multiple</vb-title>
    <demo :code="code.multiple">
      <vb-buttons-list slot="control">
        <vb-button color="primary" outlined @click="toggleSelection([1, 2])">
          Toggle selection status of second and third rows
        </vb-button>

        <vb-button color="info" outlined @click="toggleSelection()">
          Clear selection
        </vb-button>
      </vb-buttons-list>

      <vb-table ref="multiple" fullwidth :data="tableData" @selection-change="handleSelectionChange">
        <vb-table-column type="selection"></vb-table-column>
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
    </demo>
  </example-section-item>
</template>

<script>
import tableData from './data.json'
import code from '@examples/code/elements/table.js'

export default {
  data() {
    return {
      tableData,
      code: code.selection,
      selection: []
    }
  },
  methods: {
    handleRowChange() {},
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(index => this.$refs.multiple.toggleSelection(index))
      } else {
        this.$refs.multiple.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.selection = val
    },
    toggleSingleSelection(val) {
      this.$refs.single.setCurrentRow(val)
    }
  }
}
</script>
