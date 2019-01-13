let code = {}

code.basic = `\
<vb-pagination :pageCount="5"></vb-pagination>
`

code.pagerCount = {}

code.pagerCount.three = `\
<vb-pagination :current="5" :pageCount="10" :pagerCount="3"></vb-pagination>
`

code.pagerCount.five = `\
<vb-pagination :current="5" :pageCount="10" :pagerCount="5"></vb-pagination>
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
