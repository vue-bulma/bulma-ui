<template>
  <div>
    <vb-title
      id="Basic"
      type="title"
    >Basic:</vb-title>
    <vb-box>
      <vb-pagination :pageCount=10 @topage=topage></vb-pagination>
    </vb-box>

    <vb-title
      id="Aligns"
      type="title"
    >Aligns:</vb-title>
    <vb-box>
      <vb-pagination :pageCount=5 @topage=topage></vb-pagination>
      <vb-pagination :pageCount=5 align="centered" @topage=topage></vb-pagination>
      <vb-pagination :pageCount=5 align="right" @topage=topage></vb-pagination>
    </vb-box>

     <vb-title
      id="Type"
      type="title"
    >Type:</vb-title>
    <vb-box>
      <vb-pagination :pageCount=5 @topage=topage rounded></vb-pagination>
    </vb-box>

    <vb-title
      id="Size"
      type="title"
    >Size:</vb-title>
    <vb-box>
      <vb-pagination :pageCount=5 @topage=topage size="small"></vb-pagination>
      <vb-pagination :pageCount=5 @topage=topage ></vb-pagination>
      <vb-pagination :pageCount=5 @topage=topage size="medium"></vb-pagination>
      <vb-pagination :pageCount=5 @topage=topage size="large"></vb-pagination>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'PaginationExamples',
  methods: {
    topage(currentPage) {
      console.log(`当前页为：${currentPage}`)
    }
  }
}
</script>
<style>
</style>
