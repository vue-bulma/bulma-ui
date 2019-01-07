<script>
import Vue from 'vue'
import VbCheckbox from '@/components/form/Checkbox'
import VbIcon from '@/components/elements/Icon'

export default Vue.component('VbTableBody', {
  components: { VbCheckbox, VbIcon },
  props: {
    columns: Array,
    data: Array,
    selection: Array,
    currentRow: Number,
    rowClassName: [Function, String],
    cellClassName: [Function, String],
    spanMethod: Function
  },
  data() {
    return {
      expanded: []
    }
  },
  computed: {
    renderExpanded() {
      let tmpl
      this.columns.forEach(col => {
        if (col.type === 'expand') {
          tmpl = col.scopedSlots && col.scopedSlots.default
        }
      })

      return tmpl
    }
  },
  render() {
    const { data, columns, expanded } = this

    return (
      <tbody>
        {data.map((row, rowIndex) => {
          const rowClass = this.rowClass(row, rowIndex)
          const isExpanded = expanded.includes(rowIndex)

          return [
            <tr class={rowClass}>
              {columns.map((column, columnIndex) => {
                return this.renderCell(isExpanded, {
                  row,
                  column,
                  rowIndex,
                  columnIndex
                })
              })}
            </tr>,
            // Is expanded row
            isExpanded ? (
              <tr>
                <td colspan={columns.length} class="vb-table-expanded-cell">
                  {this.renderExpanded
                    ? this.renderExpanded({ row, rowIndex })
                    : ''}
                </td>
              </tr>
            ) : (
              ''
            )
          ]
        })}
      </tbody>
    )
  },
  methods: {
    // Options: { row, column, rowIndex, columnIndex }
    renderCell(isExpanded, options) {
      let cell
      const { selection } = this
      const { row, column, rowIndex } = options
      const cellClass = this.cellClass(options)
      const cellTmpl = column.scopedSlots && column.scopedSlots.default

      if (column.type === 'selection') {
        cell = (
          <vb-checkbox
            value={selection.includes(rowIndex)}
            on-change={() => this.toggleSelection(rowIndex)}
          />
        )
      } else if (column.type === 'expand') {
        cell = (
          <vb-icon
            class={{
              'vb-table-expand-icon': true,
              'is-expanded': isExpanded
            }}
            name="fa fa-angle-right"
            on-click={() => this.handleExpand(rowIndex)}
          />
        )
      } else if (cellTmpl) {
        cell = cellTmpl(options)
      } else {
        cell = <span>{row[column.prop]}</span>
      }

      const { rowspan, colspan } = this.getSpan(options)

      return !rowspan || !colspan ? (
        ''
      ) : (
        <td
          class={cellClass}
          on-click={event => this.handleRowClick(event, rowIndex, column)}
          rowspan={rowspan}
          colspan={colspan}
        >
          {cell}
        </td>
      )
    },
    getSpan(options) {
      let rowspan = 1
      let colspan = 1
      const cellSpan = this.spanMethod && this.spanMethod(options)

      if (Array.isArray(cellSpan)) {
        rowspan = cellSpan[0]
        colspan = cellSpan[1]
      } else if (typeof cellSpan === 'object') {
        rowspan = cellSpan.rowspan
        colspan = cellSpan.colspan
      }

      return {
        rowspan,
        colspan
      }
    },
    getClasses(classes, ...args) {
      let customClassName

      switch (typeof classes) {
        case 'function':
          customClassName = classes(...args)
          break
        case 'string':
          customClassName = classes
          break
      }

      return customClassName
    },
    rowClass(row, index) {
      const args = { row, index }
      const customClass = this.getClasses(this.rowClassName, args)

      return {
        [`${customClass}`]: !!customClass,
        'is-selected': this.currentRow === index
      }
    },
    // Options: { row, column, rowIndex, columnIndex }
    cellClass(options) {
      const { column } = options
      const customClass = this.getClasses(this.cellClassName, options)

      return {
        [`is-${column.align}`]: !!column.align,
        [`${customClass}`]: !!customClass
      }
    },
    toggleSelection(rowIndex) {
      this.$emit('toggle-selection', rowIndex)
    },
    handleRowClick(event, rowIndex, column) {
      this.$emit('row-click', event, rowIndex, column)
    },
    handleExpand(rowIndex) {
      const index = this.expanded.indexOf(rowIndex)
      if (index > -1) {
        this.expanded.splice(index, 1)
      } else {
        this.expanded.push(rowIndex)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.table {
  .vb-table-expanded-cell {
    padding: 20px 50px;
  }
  .vb-table-expand-icon {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  .vb-table-expand-icon.is-expanded {
    transform: rotate(90deg);
  }
}
</style>
