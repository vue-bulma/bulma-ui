<template>
  <div class="container">
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
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
    </vb-box>

    <vb-title
      id="Modifiers"
      type="title"
    >Borders:</vb-title>
    <vb-box>
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
    </vb-box>

    <vb-title
      id="Modifiers"
      type="title"
    >Stripes:</vb-title>
    <vb-box>
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
    </vb-box>

    <vb-title
      id="Modifiers"
      type="title"
    >Narrower:</vb-title>
    <vb-box>
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
    </vb-box>

     <vb-title
      id="Modifiers"
      type="title"
    >Hover Effect:</vb-title>
    <vb-box>
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
    </vb-box>

     <vb-title
      id="Modifiers"
      type="title"
    >fullwidth:</vb-title>
    <vb-box>
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
    </vb-box>

     <vb-title
      id="Modifiers"
      type="title"
    >combine:</vb-title>
    <vb-box>
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
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'TableExamples'
}
</script>
