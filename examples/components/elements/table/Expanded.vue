<template>
  <example-section-item title="Expandable">
    <demo>
      <vb-table fullwidth :data="tableData">
        <vb-table-column type="expand" class="demo-table-expand">
          <template slot-scope="props">
            <vb-content>
              <p>Won: {{ props.row.won }}</p>
              <p>Drawn: {{ props.row.drawn }}</p>
              <p>Lost: {{ props.row.lost }}</p>
              <p>Goals For: {{ props.row.goalsFor }}</p>
              <p>Goals Against: {{ props.row.goalsAgainst }}</p>
              <p>Goal Difference: {{ props.row.goalDifference }}</p>
            </vb-content>
          </template>
        </vb-table-column>

        <vb-table-column label="Position" prop="position"></vb-table-column>
        <vb-table-column label="Team" prop="team"></vb-table-column>
        <vb-table-column label="Palyed" prop="played"></vb-table-column>
        <vb-table-column label="Points" prop="points"></vb-table-column>
      </vb-table>

      <pre slot="code">{{code.expand}}</pre>
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
      code
    }
  }
}
</script>

<style scoped>
.demo-table-expand {
  width: 50px;
}
</style>
