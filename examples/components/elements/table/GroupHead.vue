<template>
  <example-section-item title="Group">
    <demo>
      <vb-table border :data="tableData">
        <vb-table-column prop="position" label="Position"></vb-table-column>

        <vb-table-column label="Result">
          <vb-table-column label="Match">
            <vb-table-column label="Played" prop="played"></vb-table-column>
            <vb-table-column label="Won" prop="won"></vb-table-column>
            <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
            <vb-table-column label="Lost" prop="lost"></vb-table-column>
          </vb-table-column>

          <vb-table-column label="Goals">
            <vb-table-column label="Goals For" prop="goalsFor"></vb-table-column>
            <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
            <vb-table-column label="Goals Difference" prop="goalDifference"></vb-table-column>
          </vb-table-column>
        </vb-table-column>

        <vb-table-column label="Points" prop="points"></vb-table-column>
      </vb-table>

      <pre slot="code">{{code.group}}</pre>
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
