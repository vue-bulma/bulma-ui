<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div class="block" slot="control">Current Page: {{page}}</div>
        <vb-pagination :current="page" :pageCount="5" @change="handleChange"></vb-pagination>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Pager Count">
      <demo title="Pager Count: 3">
        <vb-pagination :current="5" :pageCount="10" :pagerCount="3"></vb-pagination>
        <pre slot="code">{{ pagerCount.three }}</pre>
      </demo>

      <demo title="Pager Count: 5">
        <vb-pagination :current="5" :pageCount="10" :pagerCount="5"></vb-pagination>
        <pre slot="code">{{ pagerCount.five }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" align="centered"></vb-pagination>
        <vb-pagination :pageCount="5" align="right"></vb-pagination>
        <pre slot="code">{{ alignment }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo>
        <vb-pagination :pageCount="10" rounded></vb-pagination>
        <pre slot="code">{{ rounded }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-pagination :pageCount="5" size="small"></vb-pagination>
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" size="medium"></vb-pagination>
        <vb-pagination :pageCount="5" size="large"></vb-pagination>
        <pre slot="code">{{ sizes }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/components/pagination.js'

export default {
  name: 'PaginationExamples',
  data() {
    return {
      basic: code.basic,
      pagerCount: code.pagerCount,
      alignment: code.alignment,
      rounded: code.rounded,
      sizes: code.sizes,
      page: 1
    }
  },
  methods: {
    handleChange(page) {
      this.page = page
    }
  }
}
</script>
