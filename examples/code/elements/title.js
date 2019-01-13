let code = {}
code.basic = `\
<vb-title>Title</vb-title>

<vb-title type="subtitle">Subtitle</vb-title>
`

code.size = `\
<vb-title size="1">Title</vb-title>
<vb-title size="2">Title</vb-title>
<vb-title size="3">Title</vb-title>
<vb-title size="4">Title</vb-title>
<vb-title size="5">Title</vb-title>
<vb-title size="6">Title</vb-title>

<vb-title type="subtitle" size="1">Subtitle</vb-title>
<vb-title type="subtitle" size="2">Subtitle</vb-title>
<vb-title type="subtitle" size="3">Subtitle</vb-title>
<vb-title type="subtitle" size="4">Subtitle</vb-title>
<vb-title type="subtitle" size="5">Subtitle</vb-title>
<vb-title type="subtitle" size="6">Subtitle</vb-title>
`

code.combinations = `\
<vb-title>Title</vb-title>
<vb-title type="subtitle">Subtitle</vb-title>

<vb-title size="1">Title 1</vb-title>
<vb-title type="subtitle" size="3">Subtitle 3</vb-title>
`

code.spaced = `\
<vb-title spaced>Title</vb-title>

<vb-title type="subtitle">Subtitle</vb-title>
`
export default code
