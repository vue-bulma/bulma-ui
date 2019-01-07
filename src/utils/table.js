function getAllColumns(cols, level = 0) {
  let data = []

  cols.forEach(col => {
    let children = []

    if (col.children) {
      children = getAllColumns(col.children, level + 1)
      data = data.concat(children)
    }

    const colspan = children.filter(o => !o.children.length).length || 1

    data.push({ ...col, level, colspan })
  })

  return data
}

export function convertToRows(cols) {
  let head = []
  let body = []

  const allColumns = getAllColumns(cols)
  const countRows = Math.max(...allColumns.map(o => o.level), 0) + 1

  allColumns.forEach(col => {
    const { children, level } = col

    if (!head[level]) {
      head[level] = []
    }

    const rowspan = children && children.length ? 1 : countRows - level

    head[level].push({
      ...col,
      rowspan
    })

    if (!col.children.length) {
      body.push(col)
    }
  })

  return { head, body }
}
