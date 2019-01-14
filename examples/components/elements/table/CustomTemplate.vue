<template>
  <example-section-item title="Custom Header and Cell template">
    <demo :code="code">
      <vb-button slot="control" outlined @click="HandleReset">
        Reset
      </vb-button>

      <vb-table border :data="tableData">
        <vb-table-column label="Position" prop="position">
          <template slot="header" slot-scope="slotProp">
            {{slotProp.column.label}}
            <vb-icon class="is-clickable" :name="sortIcon" @click="handleSort"></vb-icon>
          </template>
        </vb-table-column>

        <vb-table-column label="Team" prop="team">
          <template slot="header" slot-scope="slotProp">
            {{slotProp.column.label}}

            <vb-dropdown trigger="click">
              <vb-icon class="is-clickable" name="fa fa-filter"></vb-icon>

              <vb-checkbox-group v-model="filter">
                <vb-dropdown-menu>
                  <vb-dropdown-item class="demo-clickable" v-for="item in data" :key="item.position">
                    <vb-checkbox :label="item.team">{{item.team}}</vb-checkbox>
                  </vb-dropdown-item>
                </vb-dropdown-menu>
              </vb-checkbox-group>
            </vb-dropdown>
          </template>
        </vb-table-column>

        <vb-table-column label="Played" prop="played"></vb-table-column>
        <vb-table-column label="Won" prop="won"></vb-table-column>
        <vb-table-column label="Drawn" prop="drawn"></vb-table-column>
        <vb-table-column label="Lost" prop="lost"></vb-table-column>

        <vb-table-column label="Goals For" prop="goalsFor">
          <template slot-scope="slotProp">
            <vb-icon name="fa fa-futbol-o"></vb-icon>
            <span>{{slotProp.row.goalsFor}}</span>
          </template>
        </vb-table-column>

        <vb-table-column label="Goals Against" prop="goalsAgainst"></vb-table-column>
        <vb-table-column label="Goal Difference" prop="goalDifference"></vb-table-column>
        <vb-table-column label="Points" prop="points"></vb-table-column>

        <vb-table-column label="Control">
          <template slot-scope="slotProp">
            <vb-button-group>
              <vb-button outlined color="info" size="small">Edit</vb-button>
              <vb-button color="danger" size="small" @click="handleDelete(slotProp.row)">Delete</vb-button>
            </vb-button-group>
          </template>
        </vb-table-column>
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
      code: code.custom,
      data: tableData.slice(),
      sort: null,
      filter: [],
      sortMethods: {
        asc(a, b) {
          return a.position - b.position
        },
        desc(a, b) {
          return b.position - a.position
        }
      }
    }
  },
  computed: {
    tableData() {
      let tableData = this.data.slice()
      const { sort, filter, sortMethods } = this

      if (sort) {
        const method = sortMethods[sort]
        tableData = tableData.sort(method)
      }

      if (filter.length) {
        tableData = tableData.filter(d => filter.includes(d.team))
      }

      return tableData
    },
    sortIcon() {
      return `fa fa-sort${this.sort ? '-' + this.sort : ''}`
    }
  },
  methods: {
    handleSort() {
      switch (this.sort) {
        case 'asc':
          this.sort = 'desc'
          break
        case 'desc':
          this.sort = null
          break
        case null:
          this.sort = 'asc'
          break
      }
    },
    handleDelete(row) {
      const index = this.data.indexOf(row)
      this.data.splice(index, 1)
    },
    HandleReset() {
      this.data = tableData.slice()
      this.sort = null
      this.filter = []
    }
  }
}
</script>

<style scoped>
.is-clickable {
  cursor: pointer;
}
</style>
