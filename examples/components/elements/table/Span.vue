<template>
  <example-section-item title="Rowspan and colspan">
    <vb-title type="subtitle" size="6">Rowspan</vb-title>
    <demo>
      <vb-table border :data="tableData" :span-method="rowspanMethod" width="600">
        <vb-table-column label="ID" prop="id"></vb-table-column>
        <vb-table-column label="Name" prop="name"></vb-table-column>
        <vb-table-column label="Subject" prop="subject"></vb-table-column>
        <vb-table-column label="Score" prop="score"></vb-table-column>
      </vb-table>

      <pre slot="code">{{code.rowspan}}</pre>
    </demo>

    <vb-title type="subtitle" size="6">Colspan</vb-title>
    <demo>
      <vb-table border :data="tableData" :span-method="colspanMethod" width="600">
        <vb-table-column label="ID" prop="id"></vb-table-column>
        <vb-table-column label="Name" prop="name"></vb-table-column>
        <vb-table-column label="Subject" prop="subject"></vb-table-column>
        <vb-table-column label="Score" prop="score"></vb-table-column>
      </vb-table>

      <pre slot="code">{{code.colspan}}</pre>
    </demo>
  </example-section-item>
</template>

<script>
import code from '@examples/code/elements/table.js'

export default {
  data() {
    return {
      tableData: [
        { id: 1, name: 'Tom', subject: 'math', score: 66 },
        { id: 1, name: 'Tom', subject: 'physical', score: 77 },
        { id: 2, name: 'Jerry', subject: 'math', score: 83 },
        { id: 2, name: 'Jerry', subject: 'physical', score: 94 }
      ],
      code
    }
  },
  methods: {
    rowspanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return [0, 0]
        }
      }
    },
    colspanMethod({ rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return { rowspan: 0, colspan: 0 }
        }
      }
    }
  }
}
</script>
