<template>
  <p class="panel-tabs">
    <a
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{'is-active': currentTab === index}"
      @click.stop="handleClick(index)"
    >{{ tab.name }}</a>
  </p>
</template>

<script>
export default {
  name: 'VbPanelTab',
  props: {
    tabs: {
      tyep: Array
    }
  },
  data() {
    return {
      currentTab: 0
    }
  },
  methods: {
    handleClick(index) {
      this.currentTab = index
      this.$emit('click', index)
    }
  }
}
</script>
