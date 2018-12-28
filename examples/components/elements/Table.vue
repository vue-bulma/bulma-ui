<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
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
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Border">
      <demo>
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
        <pre slot="code">{{code.bordered}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Stripes">
      <demo>
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
        <pre slot="code">{{code.striped}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Narrower">
      <demo>
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
        <pre slot="code">{{code.narrow}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Hover Effect">
      <demo>
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
                <pre slot="code">{{code.hoverable}}</pre>

      </demo>
    </example-section-item>

    <example-section-item title="Fullwidth">
      <demo>
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
        <pre slot="code">{{code.fullwidth}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Combine">
      <demo>
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
        <pre slot="code">{{code.combine}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/table.js'

export default {
  name: 'TableExamples',
  data() {
    return {
      code: code
    }
  }
}
</script>
