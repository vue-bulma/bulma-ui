<template>
  <vb-section>
    <example-section-item title="Basic">
      <vb-title type="subtitle" size="6">
        Add a
        <span class="color-red">vb-columns</span> container,Add as many
        <span class="color-red">vb-column</span> elements as you want,Each
        <span class="color-red">vb-column</span> will have an equal width, no matter the number of
        <span class="color-red">vb-column</span>
      </vb-title>
      <demo>
        <vb-columns>
          <vb-column>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Second column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Third column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">Fourth column</p>
          </vb-column>
        </vb-columns>

        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <vb-title type="subtitle" size="6">
        change the size of a single
        <span class="color-red">vb-column</span>
      </vb-title>
      <demo>
        <vb-columns>
          <vb-column size="1">
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>

        <vb-columns>
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="4">
            <p class="bg bg-primary">4</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="5">
            <p class="bg bg-primary">5</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="7">
            <p class="bg bg-primary">7</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="9">
            <p class="bg bg-primary">9</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="10">
            <p class="bg bg-primary">10</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="11">
            <p class="bg bg-primary">11</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">1</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="12">
            <p class="bg bg-primary">12</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="full">
            <p class="bg bg-primary">full</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="four-fifths">
            <p class="bg bg-primary">four-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-quarters">
            <p class="bg bg-primary">three-quarters</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="two-thirds">
            <p class="bg bg-primary">two-thirds</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-fifths">
            <p class="bg bg-primary">three-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="half">
            <p class="bg bg-primary">half</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="two-fifths">
            <p class="bg bg-primary">two-fifths</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-third">
            <p class="bg bg-primary">one-third</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-quarter">
            <p class="bg bg-primary">one-quarter</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="one-fifth">
            <p class="bg bg-primary">one-fifth</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-light">Auto</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.size}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Offset">
      <vb-title type="subtitle" size="6">
        While you can use empty vb-columns (like &lt;vb-column&gt;&lt;/vb-column&gt;) to create horizontal space around col elements, you can also use offset modifiers like
        <span
          class="color-red"
        >offset="x"</span>
      </vb-title>
      <demo>
        <vb-columns>
          <vb-column size="half" offset="one-quarter">
            <p class="bg bg-primary">size:half
              <br>offset:one-quarter
            </p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="three-fifths" offset="one-fifth">
            <p class="bg bg-primary">size:three-fifths
              <br>offset:one-fifth
            </p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="4" offset="8">
            <p class="bg bg-primary">size:4
              <br>offset:8
            </p>
          </vb-column>
        </vb-columns>
        <vb-columns>
          <vb-column size="11" offset="1">
            <p class="bg bg-primary">size:11
              <br>offset:1
            </p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.Offset}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Narrow">
      <vb-title type="subtitle" size="6">
        If you want a
        <span class="color-red">vb-column</span>
        to only take the space it needs, use the
        <span class="color-red">narrow</span>
        modifier. The other col(s) will fill up the remaining space.',
      </vb-title>
      <demo>
        <vb-columns>
          <vb-column narrow>
            <div style="width: 200px;">
              <p class="bg bg-primary">This col is only 200px wide</p>
            </div>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">This col will take up the remaining space available</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.narrow}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Mobile columns">
      <vb-title type="subtitle" size="6">
        By default,
        <span class="color-red">vb-columns</span> are only activated from tablet onwards. This means
        <span class="color-red">vb-columns</span> are stacked on top of each other on mobile.
        <br>If you want
        <span class="color-red">vb-columns</span> to work on mobile too, just add the
        <span class="color-red">view="mobile"</span> modifier on the vb-columns container
      </vb-title>
      <demo>
        <vb-columns view="mobile">
          <vb-column>
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.mobile}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Desktop columns">
      <vb-title type="subtitle" size="6">
        If you only want
        <span class="color-red">vb-columns</span> on desktop upwards, just use the
        <span class="color-red">view="desktop"</span> modifier on the vb-columns container
      </vb-title>
      <demo>
        <vb-columns view="desktop">
          <vb-column>
            <p class="bg bg-primary">1</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.desktop}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Different column sizes per breakpoint">
      <vb-title type="subtitle" size="6">
        You can define a
        <span class="color-red">vb-column</span> size for each viewport size:
        <strong>mobile, tablet,</strong> and
        <strong>desktop</strong>
      </vb-title>
      <demo>
        <vb-columns view="mobile">
          <vb-column
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
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-primary">4</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.breakpoint}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Nesting">
      <vb-title type="subtitle" size="6">
        You can nest
        <span class="color-red">vb-columns</span> to have more flexibility in your design. You only need to follow this structure:
      </vb-title>
      <ul>
        <li>&lt;vb-columns&gt;
          <ul>
            <li>&lt;vb-column&gt;
              <ul>
                <li>&lt;vb-columns&gt;
                  <ul>
                    <li>&lt;vb-column&gt;</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <demo>
        <vb-columns>
          <vb-column>
            <p class="bg bg-primary">First column</p>
            <vb-columns>
              <vb-column>
                <p class="bg bg-primary">First nested column</p>
              </vb-column>
              <vb-column>
                <p class="bg bg-primary">Second nested column</p>
              </vb-column>
            </vb-columns>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.nesting}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Gapless">
      <vb-title type="subtitle" size="6">
        If you want to remove the space between the
        <span class="color-red">vb-columns</span>, add the
        <span class="color-red">gapType="gapless"</span> modifier on the
        <span class="color-red">vb-columns</span>
        container
      </vb-title>
      <demo>
        <vb-columns gapType="gapless">
          <vb-column>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p class="bg bg-info">Second column</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.gapless}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Variable gap">
      <vb-title type="subtitle" size="6">
        ou can specify a custom col gap by appending one of 9 modifiers on the
        <span
          class="color-red"
        >vb-columns</span> container
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
        <span class="color-red">vb-columns</span>
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

        <vb-columns gapType="variable" :gap="gapValue">
          <vb-column v-for="(count,index) in counts" :key="index">
            <p class="bg bg-primary">{{count}}</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.gap}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Breakpoint based column gaps">
      <vb-title type="subtitle" size="6">
        You can define a
        <span class="color-red">vb-column</span> gap for each viewport size
        <br>For example, here is how it looks with the following modifiers:
        <span
          class="color-red"
        >gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3" widescreenGap="8" fullhdGap="2"</span>
      </vb-title>
      <demo>
        <vb-columns
          gapType="variable"
          mobileGap="8"
          tabletGap="0"
          desktopGap="3"
          widescreenGap="8"
          fullhdGap="2"
        >
          <vb-column v-for="(count,index) in counts" :key="index">
            <p class="bg bg-primary">{{count}}</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.breakpointGap}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Vertical alignment">
      <vb-title type="subtitle" size="6">
        To align your
        <span class="color-red">vb-columns</span> vertically, add the
        <span class="color-red">align="vcentered"</span> modifier to the
        <span class="color-red">vb-columns</span> container.',
      </vb-title>
      <demo>
        <vb-columns align="vcentered">
          <vb-column size="8">
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column>
            <p
              class="bg bg-primary"
            >Second column with more content. This is so you can see the vertical alignment.</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.vertical}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Centering columns">
      <vb-title type="subtitle" size="6">
        While you can use empty
        <span class="color-red">vb-columns</span> (like &lt;vb-column&gt;&lt;/vb-column&gt;) to create horizontal space around col elements, you can also use
        <span
          class="color-red"
        >align="centered"</span> on the parent
        <span class="color-red">vb-columns</span> element:
      </vb-title>
      <demo>
        <vb-columns align="centered">
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
        </vb-columns>
        <vb-columns align="centered">
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
          <vb-column size="2">
            <p class="bg bg-primary">2</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.centered}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline">
      <vb-title type="subtitle" size="6">
        Whenever you want to start a new line, you can close a
        <span class="color-red">vb-columns</span> container and start a new one. But you can also add the
        <span class="color-red">multiline</span> modifier and add more
        <span class="color-red">vb-column</span> elements than would fit in a single row
      </vb-title>
      <demo>
        <vb-columns multiline>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="3">
            <p class="bg bg-primary">3</p>
          </vb-column>
          <vb-column size="8">
            <p class="bg bg-primary">8</p>
          </vb-column>
          <vb-column size="4">
            <p class="bg bg-primary">4</p>
          </vb-column>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
          <vb-column size="6">
            <p class="bg bg-primary">6</p>
          </vb-column>
        </vb-columns>
        <pre slot="code">{{code.multiline}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Multiline and Centering">
      <vb-title type="subtitle" size="6">
        <span class="color-red">align="centered"</span> use with
        <span class="color-red">multiline</span> to create a flexible, centered list (try resizing to see centering in different viewport sizes)
      </vb-title>
      <demo>
        <vb-columns view="mobile" align="centered" multiline>
          <vb-column narrow>
            <p class="bg bg-primary">First column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Our Second column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Third column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">The Fourth column</p>
          </vb-column>
          <vb-column narrow>
            <p class="bg bg-primary">Fifth column</p>
          </vb-column>
        </vb-columns>
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
