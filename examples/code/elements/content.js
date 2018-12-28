let code = {}
code.type = `\
<template>
  <vb-content>
    <ol type="1">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol type="A">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol type="a">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol type="I">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol type="i">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </vb-content>
</template>
`

code.modifier = `\
<template>
  <vb-content>
    <ol class="is-lower-alpha">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol class="is-lower-roman">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol class="is-upper-alpha">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    <ol class="is-upper-alpha">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </vb-content>
</template>
`

code.basic = `\
<template>
  <vb-content>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
      interdum mattis neque.
    </p>
    <h2>Second level</h2>
    <p>
      Curabitur accumsan turpis pharetra
      <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
      dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
    </p>
    <ul>
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
      <li>Ut non enim metus.</li>
    </ul>
  </vb-content>
</template>
`

code.sizeSmall = `\
<template>
  <vb-content size="small">
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
      interdum mattis neque.
    </p>
    <h2>Second level</h2>
    <p>
      Curabitur accumsan turpis pharetra
      <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
      dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
    </p>
    <ul>
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
      <li>Ut non enim metus.</li>
    </ul>
  </vb-content>
</template>
`

code.sizeNormal = `\
<template>
  <vb-content>
    ...
  </vb-content>
</template>
`

code.sizeMedium = `\
<template size="medium">
  <vb-content>
    ...
  </vb-content>
</template>
`

code.sizeLarge = `\
<template size="large">
  <vb-content>
    ...
  </vb-content>
</template>
`
export default code
