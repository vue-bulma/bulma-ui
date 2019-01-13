<template>
  <example-section-item title="Style">
    <vb-title type="subtitle" size="6">Table width</vb-title>

    <demo :code="code.tableWidth">
      <vb-table width="500" :data="tableData">
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

    <vb-title type="subtitle" size="6">Header style</vb-title>

    <demo :code="code.headerStyle">
      <vb-table :data="tableData" :header-class-name="headerClassName" :header-cell-class-name="headerCellClassName">
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

    <vb-title type="subtitle" size="6">Row style</vb-title>

    <demo :code="code.rowStyle">
      <vb-table :data="tableData" :row-class-name="rowClassName">
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

    <vb-title type="subtitle" size="6">Column Style</vb-title>
    <!-- https://www.w3.org/TR/CSS22/tables.html#columns -->

    <demo :code="code.columnStyle">
      <vb-table :data="tableData">
        <vb-table-column
          label="Position"
          prop="position"
          align="centered"
          class="demo-column-1"
        >
        </vb-table-column>
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

    <vb-title type="subtitle" size="6">Cell style</vb-title>

    <demo :code="code.cellStyle">
      <vb-table :data="tableData" :cell-class-name="cellClassName">
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
      code: code.style
    }
  },
  methods: {
    // args: { row, index }
    headerClassName() {
      return 'demo-header-1'
    },
    // { row, column, rowIndex, columnIndex }
    headerCellClassName() {
      return 'demo-header-cell-1'
    },
    // { row, index }
    rowClassName({ index }) {
      return index % 2 === 1 ? 'demo-row-1' : 'demo-row-2'
    },
    // { row, column, rowIndex, columnIndex }
    cellClassName({ row, column }) {
      if (column.label === 'Won') {
        return 'demo-cell-1'
      } else if (column.label === 'Points' && row.points > 70) {
        return 'demo-cell-2'
      }
    }
  }
}
</script>

<style>
.demo-header-1 {
  background-color: whitesmoke;
}
.demo-row-1 {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.demo-row-2 {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
}
.demo-column-1 {
  border: 1px solid #dbdbdb;
  width: 150px;
}
.demo-cell-1 {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.demo-cell-2 {
  background-color: #23d160;
  border-color: transparent;
  color: #fff;
}
.demo-header-cell-1 {
  border: 1px solid #dbdbdb !important;
}
</style>
