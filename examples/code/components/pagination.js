let code = {}
code.basic = `\
<template>
  <vb-pagination :pageCount="5"></vb-pagination>
</template>
`
code.pagerCount = {}
code.pagerCount.three = `\
<template>
  <vb-pagination :current="5" :pageCount="10" :pagerCount="3"></vb-pagination>
</template>
`
code.pagerCount.five = `\
<template>
  <vb-pagination :current="5" :pageCount="10" :pagerCount="5"></vb-pagination>
</template>
`
code.alignment = `\
<template>
  <vb-pagination :pageCount="5"></vb-pagination>
  <vb-pagination :pageCount="5" align="centered"></vb-pagination>
  <vb-pagination :pageCount="5" align="right"></vb-pagination>
</template>
`
code.rounded = `\
<template>
  <vb-pagination :pageCount="10" rounded></vb-pagination>
</template>
`
code.sizes = `\
<template>
  <vb-pagination :pageCount="5" size="small"></vb-pagination>
  <vb-pagination :pageCount="5"></vb-pagination>
  <vb-pagination :pageCount="5" size="medium"></vb-pagination>
  <vb-pagination :pageCount="5" size="large"></vb-pagination>
</template>
`
export default code
