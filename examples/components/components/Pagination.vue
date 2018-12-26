<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div class="block" slot="control">
          Current Page: {{page}}
        </div>

        <vb-pagination :current="page" :pageCount="5" @change="handleChange"></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Pager Count">
      <demo title="Pager Count: 3">
        <vb-pagination :current="5" :pageCount="10" :pagerCount="3"></vb-pagination>
      </demo>

      <demo title="Pager Count: 5">
        <vb-pagination :current="5" :pageCount="10" :pagerCount="5"></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" align="centered"></vb-pagination>
        <vb-pagination :pageCount="5" align="right"></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo>
        <vb-pagination :pageCount="10" rounded></vb-pagination>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-pagination :pageCount="5" size="small"></vb-pagination>
        <vb-pagination :pageCount="5"></vb-pagination>
        <vb-pagination :pageCount="5" size="medium"></vb-pagination>
        <vb-pagination :pageCount="5" size="large"></vb-pagination>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'PaginationExamples',
  data() {
    return {
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
