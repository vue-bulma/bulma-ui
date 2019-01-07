<script>
import Vue from 'vue'
import VbCheckbox from '@/components/form/Checkbox'

export default Vue.component('VbTableHeader', {
  props: {
    rowClassName: [Function, String],
    cellClassName: [Function, String],
    columnRows: Array,
    isSelectAll: Boolean
  },
  components: { VbCheckbox },
  render() {
    return (
      <thead>
        {this.columnRows.map((row, rowIndex) => {
          const rowClass = this.rowClass(row, rowIndex)

          return (
            <tr class={rowClass}>
              {row.map((column, columnIndex) => {
                let cell
                const options = { row, column, rowIndex, columnIndex }
                const cellClass = this.cellClass(options)
                const headerTmpl =
                  column.scopedSlots && column.scopedSlots.header

                if (headerTmpl) {
                  cell = headerTmpl(options)
                } else if (column.type === 'selection') {
                  cell = (
                    <vb-checkbox
                      value={this.isSelectAll}
                      on-change={this.handleChange}
                    />
                  )
                } else {
                  cell = <span>{column.label}</span>
                }

                return (
                  <td
                    class={cellClass}
                    colspan={column.colspan}
                    rowspan={column.rowspan}
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </thead>
    )
  },
  methods: {
    _getClasses(classes, ...args) {
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
      const customClass = this._getClasses(this.rowClassName, { row, index })

      return {
        [`${customClass}`]: !!customClass
      }
    },
    // Options: { row, column, rowIndex, columnIndex }
    cellClass(options) {
      const { column } = options
      const customClass = this._getClasses(this.cellClassName, options)
      const align = column.headerAlign || column.align

      return {
        [`is-${align}`]: !!align,
        [`${customClass}`]: !!customClass
      }
    },
    handleChange(value) {
      this.$emit('change', value)
    }
  }
})
</script>
