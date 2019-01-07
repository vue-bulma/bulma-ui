<template>
  <example-section-item title="Fullwidth">
    <demo>
      <vb-table fullwidth :data="tableData">
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

      <pre slot="code">{{code.fullwidth}}</pre>
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
