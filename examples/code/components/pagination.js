let code = {}

code.basic = `\
<template>
  <div>
    <div class="block" slot="control">Current Page: {{page}}</div>
    <vb-pagination :current="page" :pageCount="5" @change="handleChange"></vb-pagination>
    <!-- <vb-pagination :current.sync="page" :pageCount="5"></vb-pagination> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 3
    }
  },
  methods: {
    handleChange(page) {
      this.page = page
    }
  }
}
</script>
`

code.pagerCount = {}

code.pagerCount.three = `\
<vb-pagination :current="5" :pageCount="10" :pagerCount="5"></vb-pagination>
`

code.pagerCount.five = `\
<vb-pagination :current="5" :pageCount="10" :pagerCount="7"></vb-pagination>
`

code.alignment = `\
<vb-pagination :pageCount="5"></vb-pagination>

<vb-pagination :pageCount="5" align="centered"></vb-pagination>

<vb-pagination :pageCount="5" align="right"></vb-pagination>
`

code.rounded = `\
<vb-pagination :pageCount="10" rounded></vb-pagination>
`

code.sizes = `\
<vb-pagination :pageCount="5" size="small"></vb-pagination>

<vb-pagination :pageCount="5"></vb-pagination>

<vb-pagination :pageCount="5" size="medium"></vb-pagination>

<vb-pagination :pageCount="5" size="large"></vb-pagination>
`

export default code
