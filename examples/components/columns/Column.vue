<template>
  <vb-section>
    <example-section-item title="Basic">
      <vb-title type="subtitle" size="6">
        Add a
        <span class="color-red">vb-cols</span> container,Add as many
        <span class="color-red">vb-col</span> elements as you want,Each
        <span class="color-red">vb-col</span> will have an equal width, no matter the number of
        <span class="color-red">vb-col</span>
      </vb-title>
      <demo>
        <vb-cols>
          <vb-col>
            <p class="bg bg-primary">First col</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">Second col</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">Third col</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">Fourth col</p>
          </vb-col>
        </vb-cols>

        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <vb-title type="subtitle" size="6">
        change the size of a single
        <span class="color-red">col</span>
      </vb-title>
      <demo>
        <vb-cols>
          <vb-col size="1">
            <p class="bg bg-primary">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>

        <vb-cols>
          <vb-col size="2">
            <p class="bg bg-primary">2</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="3">
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="4">
            <p class="bg bg-primary">4</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="5">
            <p class="bg bg-primary">5</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="6">
            <p class="bg bg-primary">6</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="7">
            <p class="bg bg-primary">7</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="8">
            <p class="bg bg-primary">8</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="9">
            <p class="bg bg-primary">9</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="10">
            <p class="bg bg-primary">10</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="11">
            <p class="bg bg-primary">11</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">1</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="12">
            <p class="bg bg-primary">12</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="full">
            <p class="bg bg-primary">full</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="four-fifths">
            <p class="bg bg-primary">four-fifths</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="three-quarters">
            <p class="bg bg-primary">three-quarters</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="two-thirds">
            <p class="bg bg-primary">two-thirds</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="three-fifths">
            <p class="bg bg-primary">three-fifths</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="half">
            <p class="bg bg-primary">half</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="two-fifths">
            <p class="bg bg-primary">two-fifths</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="one-third">
            <p class="bg bg-primary">one-third</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="one-quarter">
            <p class="bg bg-primary">one-quarter</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="one-fifth">
            <p class="bg bg-primary">one-fifth</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-light">Auto</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Offset">
      <vb-title type="subtitle" size="6">
        While you can use empty vb-cols (like &lt;vb-col&gt;&lt;/vb-col&gt;) to create horizontal space around col elements, you can also use offset modifiers like
        <span
          class="color-red"
        >offset="x"</span>
      </vb-title>
      <demo>
        <vb-cols>
          <vb-col size="half" offset="one-quarter">
            <p class="bg bg-primary">size:half
              <br>offset:one-quarter
            </p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="three-fifths" offset="one-fifth">
            <p class="bg bg-primary">size:three-fifths
              <br>offset:one-fifth
            </p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="4" offset="8">
            <p class="bg bg-primary">size:4
              <br>offset:8
            </p>
          </vb-col>
        </vb-cols>
        <vb-cols>
          <vb-col size="11" offset="1">
            <p class="bg bg-primary">size:11
              <br>offset:1
            </p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.Offset}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Narrow">
      <vb-title type="subtitle" size="6">
        If you want a
        <span class="color-red">vb-col</span>
        to only take the space it needs, use the
        <span class="color-red">narrow</span>
        modifier. The other col(s) will fill up the remaining space.',
      </vb-title>
      <demo>
        <vb-cols>
          <vb-col narrow>
            <div style="width: 200px;">
              <p class="bg bg-primary">This col is only 200px wide</p>
            </div>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">This col will take up the remaining space available</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.narrow}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Mobile columns">
      <vb-title type="subtitle" size="6">
        By default,
        <span class="color-red">vb-cols</span> are only activated from tablet onwards. This means
        <span class="color-red">vb-cols</span> are stacked on top of each other on mobile.
        <br>If you want
        <span class="color-red">vb-cols</span> to work on mobile too, just add the
        <span class="color-red">view="mobile"</span> modifier on the vb-cols container
      </vb-title>
      <demo>
        <vb-cols view="mobile">
          <vb-col>
            <p class="bg bg-primary">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">2</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">4</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.mobile}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Desktop columns">
      <vb-title type="subtitle" size="6">
        If you only want
        <span class="color-red">vb-cols</span> on desktop upwards, just use the
        <span class="color-red">view="desktop"</span> modifier on the vb-cols container
      </vb-title>
      <demo>
        <vb-cols view="desktop">
          <vb-col>
            <p class="bg bg-primary">1</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">2</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">4</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.desktop}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Different column sizes per breakpoint">
      <vb-title type="subtitle" size="6">
        You can define a
        <span class="color-red">vb-col</span> size for each viewport size:
        <strong>mobile, tablet,</strong> and
        <strong>desktop</strong>
      </vb-title>
      <demo>
        <vb-cols view="mobile">
          <vb-col
            mobile="three-quarters"
            tablet="two-thirds"
            desktop="half"
            widescreen="one-third"
            fullhd="one-quarter"
          >
            <p class="bg bg-primary">mobile:three-quarters
              <br>tablet:two-thirds
              <br>desktop:half
              <br>widescreen:one-third
              <br>fullhd:one-quarter
            </p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">2</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-primary">4</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.breakpoint}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Nesting">
      <vb-title type="subtitle" size="6">
        You can nest
        <span class="color-red">vb-cols</span> to have more flexibility in your design. You only need to follow this structure:
      </vb-title>
      <ul>
        <li>&lt;vb-cols&gt;
          <ul>
            <li>&lt;vb-col&gt;
              <ul>
                <li>&lt;vb-cols&gt;
                  <ul>
                    <li>&lt;vb-col&gt;</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <demo>
        <vb-cols>
          <vb-col>
            <p class="bg bg-primary">First col</p>
            <vb-cols>
              <vb-col>
                <p class="bg bg-primary">First nested col</p>
              </vb-col>
              <vb-col>
                <p class="bg bg-primary">Second nested col</p>
              </vb-col>
            </vb-cols>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.nesting}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Gapless">
      <vb-title type="subtitle" size="6">
        If you want to remove the space between the
        <span class="color-red">vb-cols</span>, add the
        <span class="color-red">gapType="gapless"</span> modifier on the
        <span class="color-red">vb-cols</span>
        container
      </vb-title>
      <demo>
        <vb-cols gapType="gapless">
          <vb-col>
            <p class="bg bg-primary">First col</p>
          </vb-col>
          <vb-col>
            <p class="bg bg-info">Second col</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.gapless}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Variable gap">
      <vb-title type="subtitle" size="6">
        ou can specify a custom col gap by appending one of 9 modifiers on the
        <span
          class="color-red"
        >vb-cols</span> container
        <br>
        <span class="color-red">gap="0"</span> will remove any gap (similar to
        <span class="color-red">gapType="gapless"</span>)
        <br>
        <span class="color-red">gap="3"</span> is the default value, equivalent to the
        <span class="color-red">0.75rem</span> value
        <br>
        <span class="color-red">gap="8"</span> is the maximum gap of
        <span class="color-red">2rem</span>
        <br>Additionally,
        <span class="color-red">gapType="variable"</span> should be added on the
        <span class="color-red">vb-cols</span>
        container
      </vb-title>
      <demo>
        <vb-tags slot="control">
          <vb-tag
            class="cursor"
            v-for="(value,index) in values"
            :key="index"
            @mouseente="handleMouseente(value,$event)"
          >{{value}}</vb-tag>
        </vb-tags>

        <vb-cols gapType="variable" :gap="gapValue">
          <vb-col v-for="(count,index) in counts" :key="index">
            <p class="bg bg-primary">{{count}}</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.gap}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Breakpoint based column gaps">
      <vb-title type="subtitle" size="6">
        You can define a
        <span class="color-red">vb-col</span> gap for each viewport size
        <br>For example, here is how it looks with the following modifiers:
        <span
          class="color-red"
        >gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3" widescreenGap="8" fullhdGap="2"</span>
      </vb-title>
      <demo>
        <vb-cols
          gapType="variable"
          mobileGap="8"
          tabletGap="0"
          desktopGap="3"
          widescreenGap="8"
          fullhdGap="2"
        >
          <vb-col v-for="(count,index) in counts" :key="index">
            <p class="bg bg-primary">{{count}}</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.breakpointGap}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Vertical alignment">
      <vb-title type="subtitle" size="6">
        To align your
        <span class="color-red">vb-cols</span> vertically, add the
        <span class="color-red">align="vcentered"</span> modifier to the
        <span class="color-red">vb-cols</span> container.',
      </vb-title>
      <demo>
        <vb-cols align="vcentered">
          <vb-col size="8">
            <p class="bg bg-primary">First col</p>
          </vb-col>
          <vb-col>
            <p
              class="bg bg-primary"
            >Second col with more content. This is so you can see the vertical alignment.</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.vertical}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Centering columns">
      <vb-title type="subtitle" size="6">
        While you can use empty
        <span class="color-red">vb-cols</span> (like &lt;vb-col&gt;&lt;/vb-col&gt;) to create horizontal space around col elements, you can also use
        <span
          class="color-red"
        >align="centered"</span> on the parent
        <span class="color-red">vb-cols</span> element:
      </vb-title>
      <demo>
        <vb-cols align="centered">
          <vb-col size="8">
            <p class="bg bg-primary">8</p>
          </vb-col>
        </vb-cols>
        <vb-cols align="centered">
          <vb-col size="2">
            <p class="bg bg-primary">2</p>
          </vb-col>
          <vb-col size="2">
            <p class="bg bg-primary">2</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.centered}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline">
      <vb-title type="subtitle" size="6">
        Whenever you want to start a new line, you can close a
        <span class="color-red">vb-cols</span> container and start a new one. But you can also add the
        <span class="color-red">multiline</span> modifier and add more
        <span class="color-red">vb-col</span> elements than would fit in a single row
      </vb-title>
      <demo>
        <vb-cols multiline>
          <vb-col size="3">
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col size="3">
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col size="3">
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col size="3">
            <p class="bg bg-primary">3</p>
          </vb-col>
          <vb-col size="8">
            <p class="bg bg-primary">8</p>
          </vb-col>
          <vb-col size="4">
            <p class="bg bg-primary">4</p>
          </vb-col>
          <vb-col size="6">
            <p class="bg bg-primary">6</p>
          </vb-col>
          <vb-col size="6">
            <p class="bg bg-primary">6</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.multiline}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline and Centering">
      <vb-title type="subtitle" size="6">
        <span class="color-red">align="centered"</span> use with
        <span class="color-red">multiline</span> to create a flexible, centered list (try resizing to see centering in different viewport sizes)
      </vb-title>
      <demo>
        <vb-cols view="mobile" align="centered" multiline>
          <vb-col narrow>
            <p class="bg bg-primary">First col</p>
          </vb-col>
          <vb-col narrow>
            <p class="bg bg-primary">Our Second col</p>
          </vb-col>
          <vb-col narrow>
            <p class="bg bg-primary">Third col</p>
          </vb-col>
          <vb-col narrow>
            <p class="bg bg-primary">The Fourth col</p>
          </vb-col>
          <vb-col narrow>
            <p class="bg bg-primary">Fifth col</p>
          </vb-col>
        </vb-cols>
        <pre slot="code">{{code.multilineCentering}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/columns/column.js'
export default {
  name: 'columnsExamples',
  data() {
    return {
      code: code,
      counts: ['1', '2', '3', '4', '5', '6'],
      values: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
      gapValue: null
    }
  },
  methods: {
    handleMouseente(value, event) {
      event.currentTarget.parentNode.childNodes.forEach(e => {
        e.classList.remove('bg-info')
      })
      event.currentTarget.classList.add('bg-info')
      this.gapValue = value
    }
  }
}
</script>

<style>
.bg {
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
}
.bg-primary {
  background-color: #00d1b2;
  color: #fff;
}
.bg-info {
  background-color: #209cee !important;
  color: #fff !important;
}
.bg-light {
  background-color: #f5f5f5;
  color: #000;
}
.cursor {
  cursor: pointer;
  color: #fff;
}
</style>
