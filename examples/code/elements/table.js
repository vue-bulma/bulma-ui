let code = {}
code.basic = `\
<template>
  <vb-table>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.bordered = `\
<template>
  <vb-table bordered>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.striped = `\
<template>
  <vb-table striped>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>3</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>4</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.narrow = `\
<template>
  <vb-table narrow>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.hoverable = `\
<template>
  <vb-table hoverable>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>3</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>4</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.fullwidth = `\
<template>
  <vb-table fullwidth>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>3</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>4</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

code.combine = `\
<template>
  <vb-table bordered striped narrow hoverable fullwidth>
    <vb-table-header slot="header">
      <tr>
        <td>one</td>
        <td>two</td>
        <td>three</td>
      </tr>
    </vb-table-header>

    <tr>
      <th>1</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr class="is-selected">
      <th>3</th>
      <td>one</td>
      <td>two</td>
    </tr>
    <tr>
      <th>4</th>
      <td>one</td>
      <td>two</td>
    </tr>
  </vb-table>
</template>
`

export default code