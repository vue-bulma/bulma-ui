let code = {}
code.basic = `\
<template>
  <vb-progress value="15"></vb-progress>
</template>
`

code.colors = `\
<template>
  <vb-progress value="10" max="200"></vb-progress>
  <vb-progress value="10" max="100"></vb-progress>
  <vb-progress color="primary" value="10"></vb-progress>
  <vb-progress color="info" value="20"></vb-progress>
  <vb-progress color="success" value="30"></vb-progress>
  <vb-progress color="warning" value="40"></vb-progress>
  <vb-progress color="danger" value="50"></vb-progress>
  <vb-progress color="white" value="60"></vb-progress>
  <vb-progress color="light" value="70"></vb-progress>
  <vb-progress color="dark" value="80"></vb-progress>
  <vb-progress color="black" value="90"></vb-progress>
  <vb-progress color="link" value="100"></vb-progress>
</template>
`

code.size = `\
<template>
  <vb-progress color="primary" size="small" value="10" max="100"></vb-progress>
  <vb-progress color="primary" value="20" max="100"></vb-progress>
  <vb-progress color="primary" value="40" max="100" size="medium"></vb-progress>
  <vb-progress color="primary" value="80" max="100" size="large"></vb-progress>
</template>
`

export default code
