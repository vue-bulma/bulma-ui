<template>
  <vb-section>
    <example-section-item title="Basic" :subtitle="subtitle[0]">
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

    <example-section-item title="Sizes" :subtitle="subtitle[1]">
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

    <example-section-item title="Offset" :subtitle="subtitle[2]">
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

    <example-section-item title="Narrow" :subtitle="subtitle[3]">
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

    <example-section-item title="Mobile cols" :subtitle="subtitle[4]">
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

    <example-section-item title="Desktop cols" :subtitle="subtitle[5]">
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

    <example-section-item title="Different col sizes per breakpoint" :subtitle="subtitle[6]">
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

    <example-section-item title="Nesting" :subtitle="subtitle[7]">
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

    <example-section-item title="Gapless" :subtitle="subtitle[8]">
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

    <example-section-item title="Variable gap" :subtitle="subtitle[9]">
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

    <example-section-item title="Breakpoint based col gaps" :subtitle="subtitle[10]">
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

    <example-section-item title="Vertical alignment" :subtitle="subtitle[11]">
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

    <example-section-item title="Centering cols" :subtitle="subtitle[12]">
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

    <example-section-item title="Multiline" :subtitle="subtitle[13]">
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

    <example-section-item title="Multiline and Centering" :subtitle="subtitle[14]">
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
      gapValue: null,
      subtitle: [
        'Add a vb-cols container,Add as many vb-col elements as you want,Each col will have an equal width, no matter the number of vb-cols.',
        'change the size of a single col',
        'While you can use empty vb-cols (like &lt;vb-col&gt;&lt;/vb-col&gt;) to create horizontal space around col elements, you can also use offset modifiers like <strong>offset="x"</strong>',
        'If you want a col to only take the space it needs, use the <strong>narrow</strong> modifier. The other col(s) will fill up the remaining space.',
        'By default, vb-cols are only activated from tablet onwards. This means vb-cols are stacked on top of each other on mobile. <br> If you want vb-cols to work on mobile too, just add the <strong>view="mobile"</strong> modifier on the vb-cols container',
        'If you only want vb-cols on desktop upwards, just use the <strong>view="desktop"</strong> modifier on the vb-cols container',
        'You can define a col size for each viewport size: mobile, tablet, and desktop',
        'You can nest vb-cols to have more flexibility in your design. You only need to follow this structure:<br>&lt;vb-cols&gt;<br>&nbsp;&nbsp;&lt;vb-col&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;vb-cols&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;vb-col&gt;',
        'If you want to remove the space between the vb-cols, add the <strong>gapType="gapless"</strong> modifier on the vb-cols container',
        'ou can specify a custom col gap by appending one of 9 modifiers on the vb-cols container<br><strong>gap="0"</strong> will remove any gap (similar to <strong>gapType="gapless"</strong>)<br><strong>gap="3"</strong> is the default value, equivalent to the 0.75rem value<br><strong>gap="8"</strong> is the maximum gap of 2rem<br>Additionally, <strong>gapType="variable"</strong> should be added on the vb-cols container',
        'You can define a col gap for each viewport size<br>For example, here is how it looks with the following modifiers:<strong>gapType="variable" mobileGap="8" tabletGap="0" desktopGap="3" widescreenGap="8" fullhdGap="2"</strong>',
        'To align your vb-cols vertically, add the <strong>align="vcentered"</strong> modifier to the vb-cols container.',
        'While you can use empty vb-cols (like &lt;vb-col&gt;&lt;/vb-col&gt;) to create horizontal space around col elements, you can also use <strong>align="centered"</strong> on the parent vb-cols element:',
        'Whenever you want to start a new line, you can close a vb-cols container and start a new one. But you can also add the <strong>multiline</strong> modifier and add more col elements than would fit in a single row.',
        '<strong>align="vcentered"</strong>  use with <strong>multiline</strong> to create a flexible, centered list (try resizing to see centering in different viewport sizes)'
      ]
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
