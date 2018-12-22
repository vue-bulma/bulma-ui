<template>
  <div>
    <vb-title id="Basic" type="title">Basic:</vb-title>
    <vb-box>
      <vb-pagination :current="page" :pageCount="5" @change="handleChange"></vb-pagination>

      <div class="section">
        <p>Current Page: {{page}}</p>
      </div>
    </vb-box>

    <vb-box>
      <vb-pagination :pageCount="10" :pagerCount="3"></vb-pagination>
      <vb-pagination :pageCount="10" :pagerCount="5"></vb-pagination>
    </vb-box>

    <vb-title id="Aligns" type="title">Aligns:</vb-title>
    <vb-box>
      <vb-pagination :pageCount="5"></vb-pagination>
      <vb-pagination :pageCount="5" align="centered"></vb-pagination>
      <vb-pagination :pageCount="5" align="right"></vb-pagination>
    </vb-box>

    <vb-title id="Type" type="title">Type:</vb-title>
    <vb-box>
      <vb-pagination :pageCount="10" rounded></vb-pagination>
    </vb-box>

    <vb-title id="Size" type="title">Size:</vb-title>
    <vb-box>
      <vb-pagination :pageCount="5" size="small"></vb-pagination>
      <vb-pagination :pageCount="5"></vb-pagination>
      <vb-pagination :pageCount="5" size="medium"></vb-pagination>
      <vb-pagination :pageCount="5" size="large"></vb-pagination>
    </vb-box>
  </div>
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
