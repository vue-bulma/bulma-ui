<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-panel title="repositories">
          <vb-panel-block :hover-item="false">
            <vb-input prefix="fa fa-search" placeholder="Search"/>
          </vb-panel-block>
          <vb-panel-tab :tabs="tabs" @click="handleClick"></vb-panel-tab>
          <vb-panel-block :list="tabs[tabIndex].list" @click="itemClick" ref="panel-block"></vb-panel-block>
          <vb-panel-block :hover-item="false">
            <vb-button fullwidth>Button</vb-button>
          </vb-panel-block>
        </vb-panel>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/components/panel.js'

export default {
  name: 'PanelExamples',
  data() {
    return {
      basic: code.basic,
      tabIndex: 0,
      panelBlockIndex: 0,
      tabs: [
        {
          name: 'all',
          list: [
            { name: 'GibHub', icon: 'fa fa-github' },
            { name: 'marksheet', icon: 'fa fa-book' },
            { name: 'minireset.css' }
          ]
        },
        {
          name: 'public',
          list: ['jgthms.github.io', 'daniellowtw/infboard', 'mojs']
        },
        { name: 'private', list: ['github.io', 'infboard', 'reat'] },
        { name: 'sources', list: ['Vue', 'iview', 'element'] },
        { name: 'forks', list: ['iview', 'element'] }
      ]
    }
  },
  methods: {
    handleClick(index) {
      this.tabIndex = index
      this.$refs['panel-block'].reset()
    },
    itemClick(index) {
      this.panelBlockIndex = index
    }
  }
}
</script>
