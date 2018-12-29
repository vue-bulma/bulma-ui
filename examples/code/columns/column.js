let code = {}
code.basic = `\
<template>
  <vb-cols>
    <vb-col> <p>First column</p> </vb-col>
    <vb-col> <p>Second column</p> </vb-col>
    <vb-col> <p>Third column</p> </vb-col>
    <vb-col> <p>Fourth column</p> </vb-col>
  </vb-cols>
</template>
`
code.size = `\
<template>
  <vb-cols>
    <vb-col size="1"> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="2"> <p>2</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="3"> <p>3</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="4"> <p>4</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="5"> <p>5</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="6"> <p>6</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="7"> <p>7</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="8"> <p>8</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="9"> <p>9</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="10"> <p>10</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="11"> <p>11</p> </vb-col>
    <vb-col> <p>1</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="12"> <p>12</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="full"> <p>full</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="four-fifths">
      <p>four-fifths</p>
    </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="three-quarters">
      <p>three-quarters</p>
    </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="two-thirds"> <p>two-thirds</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="three-fifths">
      <p>three-fifths</p>
    </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="half"> <p>half</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="two-fifths"> <p>two-fifths</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="one-third"> <p>one-third</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="one-quarter">
      <p>one-quarter</p>
    </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="one-fifth"> <p>one-fifth</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
    <vb-col> <p>Auto</p> </vb-col>
  </vb-cols>
</template>
`
code.Offset = `\
<template>
  <vb-cols>
    <vb-col size="half" offset="one-quarter">
      <p>size:half<br />offset:one-quarter</p>
    </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="three-fifths" offset="one-fifth">
      <p>size:three-fifths<br />offset:one-fifth</p>
    </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="4" offset="8">
      <p>size:4<br />offset:8</p>
    </vb-col>
  </vb-cols>

  <vb-cols>
    <vb-col size="11" offset="1">
      <p>size:11<br />offset:1</p>
    </vb-col>
  </vb-cols>
</template>
`
code.narrow = `\
<template>
  <vb-cols>
    <vb-col narrow>
      <div style="width: 200px;">
        <p>This column is only 200px wide</p>
      </div>
    </vb-col>
    <vb-col>
      <p>
        This column will take up the remaining space available
      </p>
    </vb-col>
  </vb-cols>
</template>
`
code.mobile = `\
<template>
  <vb-cols view="mobile">
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>2</p> </vb-col>
    <vb-col> <p>3</p> </vb-col>
    <vb-col> <p>4</p> </vb-col>
  </vb-cols>
</template>
`
code.desktop = `\
<template>
  <vb-cols view="desktop">
    <vb-col> <p>1</p> </vb-col>
    <vb-col> <p>2</p> </vb-col>
    <vb-col> <p>3</p> </vb-col>
    <vb-col> <p>4</p> </vb-col>
  </vb-cols>
</template>
`
code.breakpoint = `\
<template>
  <vb-cols view="mobile">
    <vb-col
      mobile="three-quarters"
      tablet="two-thirds"
      desktop="half"
      widescreen="one-third"
      fullhd="one-quarter"
    >
      <p>
        mobile:three-quarters<br />
        tablet:two-thirds<br />
        desktop:half<br />
        widescreen:one-third<br />
        fullhd:one-quarter
      </p>
    </vb-col>
    <vb-col> <p>2</p> </vb-col>
    <vb-col> <p>3</p> </vb-col>
    <vb-col> <p>4</p> </vb-col>
  </vb-cols>
</template>
`
code.nesting = `\
<template>
  <vb-cols>
    <vb-col>
      <p>First column</p>
      <vb-cols>
        <vb-col> <p>First nested column</p> </vb-col>
        <vb-col> <p>Second nested column</p> </vb-col>
      </vb-cols>
    </vb-col>
  </vb-cols>
</template>
`
code.gapless = `\
<template>
  <vb-cols gapType="gapless">
    <vb-col> <p>First column</p> </vb-col>
    <vb-col> <p>Second column</p> </vb-col>
  </vb-cols>
</template>
`
code.gap = `\
<template>
  <vb-cols gapType="variable" gap="0">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="1">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="2">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="3">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="4">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="5">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="6">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="7">
    ...
  </vb-cols>
  <vb-cols gapType="variable" gap="8">
    ...
  </vb-cols>
</template>
`
code.breakpointGap = `\
<template>
  <vb-cols gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3" widescreenGap="8" fullhdGap="2">
    ...
  </vb-cols>
</template>
`
code.vertical = `\
<template>
  <vb-cols align="vcentered">
    <vb-col size="8">
      <p>First column</p>
    </vb-col>
    <vb-col>
      <p>Second column with more content. This is so you can see the vertical alignment.</p>
    </vb-col>
  </vb-cols>
</template>
`
code.centered = `\
<template>
  <vb-cols align="centered">
    <vb-col size="8">
      <p>8</p>
    </vb-col>
  </vb-cols>

  <vb-cols align="centered">
    <vb-col size="2">
      <p>2</p>
    </vb-col>
    <vb-col size="2">
      <p>2</p>
    </vb-col>
  </vb-cols>
</template>
`
code.multiline = `\
<template>
  <vb-cols multiline>
    <vb-col size="3">
      <p>3</p>
    </vb-col>
    <vb-col size="3">
      <p>3</p>
    </vb-col>
    <vb-col size="3">
      <p>3</p>
    </vb-col>
    <vb-col size="3">
      <p>3</p>
    </vb-col>
    <vb-col size="8">
      <p>8</p>
    </vb-col>
    <vb-col size="4">
      <p>4</p>
    </vb-col>
    <vb-col size="6">
      <p>6</p>
    </vb-col>
    <vb-col size="6">
      <p>6</p>
    </vb-col>
  </vb-cols>
</template>
`
code.multilineCentering = `\
<template>
  <vb-cols view="mobile" align="centered" multiline>
    <vb-col narrow>
      <p>First Column</p>
    </vb-col>
    <vb-col narrow>
      <p>Our Second Column</p>
    </vb-col>
    <vb-col narrow>
      <p>Third Column</p>
    </vb-col>
    <vb-col narrow>
      <p>The Fourth Column</p>
    </vb-col>
    <vb-col narrow>
      <p>Fifth Column</p>
    </vb-col>
  </vb-cols>
</template>
`
export default code
