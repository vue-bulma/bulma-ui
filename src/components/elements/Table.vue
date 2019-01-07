<template>
  <table class="table" :class="classes" :style="{ width: tableWidth }">
    <vb-table-header
      :row-class-name="headerClassName"
      :cell-class-name="headerCellClassName"
      :is-select-all="isSelectAll"
      :column-rows="groupColumns.head"
      @change="_handleSelectAll"
    >
    </vb-table-header>

    <colgroup>
      <slot></slot>
    </colgroup>

    <vb-table-body
      :selection="selection"
      :data="tableData"
      :columns="groupColumns.body"
      :current-row="currentRow"
      :row-class-name="rowClassName"
      :cell-class-name="cellClassName"
      :span-method="spanMethod"
      @row-click="_handleRowClick"
      @toggle-selection="toggleSelection"
    ></vb-table-body>
  </table>
</template>

<script>
import VbTableHeader from '@/components/elements/TableHeader'
import VbTableBody from '@/components/elements/TableBody'
import { convertToRows } from '@/utils/table'

export default {
  name: 'VbTable',
  components: { VbTableHeader, VbTableBody },
  props: {
    width: {
      type: [String, Number],
      validator(value) {
        return +value
      }
    },
    border: Boolean,
    striped: Boolean,
    narrow: Boolean,
    hoverable: Boolean,
    fullwidth: Boolean,
    highlightSelected: Boolean,
    rowClassName: [Function, String],
    cellClassName: [Function, String],
    headerClassName: [Function, String],
    headerCellClassName: [Function, String],
    spanMethod: Function,
    align: {
      type: String,
      validator(value) {
        return ['left', 'centered', 'right'].includes(value)
      }
    },
    data: {
      type: Array,
      validator(value) {
        return value.every(row => row instanceof Object)
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      currentRow: null,
      selection: [],
      columns: []
    }
  },
  mounted() {
    this._updateColumns()
  },
  computed: {
    tableWidth() {
      return `${this.width}px`
    },
    tableData() {
      return this.data
    },
    groupColumns() {
      // return { head, body }
      return convertToRows(this.columns)
    },
    classes() {
      const { align, border, striped, narrow, hoverable, fullwidth } = this
      return {
        [`is-${align}`]: !!align,
        'is-bordered': border,
        'is-striped': striped,
        'is-narrow': narrow,
        'is-hoverable': hoverable,
        'is-fullwidth': fullwidth
      }
    },
    isSelectAll() {
      return this.selection.length === this.tableData.length
    }
  },
  methods: {
    _updateColumns() {
      const { default: nodes = [] } = this.$slots

      function convertToColumns({ componentOptions, data = {} }) {
        if (!componentOptions) return

        const { propsData, children = [] } = componentOptions
        const { scopedSlots } = data

        return {
          scopedSlots,
          ...propsData,
          children: children.map(o => convertToColumns(o)).filter(o => o)
        }
      }

      this.columns = nodes.map(o => convertToColumns(o)).filter(o => o)
    },
    _handleSelectAll(isSelectAll) {
      const selectionData = isSelectAll ? this.tableData : []
      this.selection = selectionData.map((o, index) => index)
    },
    _handleRowClick(event, rowIndex, column) {
      const row = this.tableData[rowIndex]
      this.$emit('row-click', event, row, column)

      this.setCurrentRow(rowIndex)
    },

    // Multiple selection
    clearSelection() {
      this.selection = []
    },
    toggleSelection(data, setState) {
      const index = this.selection.indexOf(data)
      const isSelected = index > -1
      const state = typeof setState === 'undefined' ? !isSelected : setState

      if (state && !isSelected) {
        this.selection.push(data)
      } else if (!state && isSelected) {
        this.selection.splice(index, 1)
      }
    },

    // Single selection
    setCurrentRow(index) {
      if (!this.highlightSelected) return

      const { currentRow, tableData } = this

      if (currentRow !== index) {
        const oldRow = tableData[currentRow]
        const newRow = tableData[index]

        this.currentRow = index
        this.$emit('current-change', newRow, oldRow)
      }
    }
  },
  watch: {
    tableData() {
      this.clearSelection()
    },
    selection(data) {
      this.$emit('selection-change', data.map(i => this.tableData[i]))
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/table';

.table {
  th {
    vertical-align: middle;
  }
}

.table.is-centered {
  th,
  td {
    text-align: center;
  }
}
.table.is-left {
  th,
  td {
    text-align: left;
  }
}
.table.is-right {
  th,
  td {
    text-align: right;
  }
}

th.is-centered,
td.is-left {
  text-align: left;
}
th.is-centered,
td.is-centered {
  text-align: center;
}
th.is-right,
td.is-right {
  text-align: right;
}
</style>
