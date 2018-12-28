<template>
  <vb-card class="demo" :title="title">
    <div v-if="$slots.control">
      <slot name="control"></slot>
      <hr v-show="isOpen">
    </div>

    <slot></slot>

    <div v-show="isOpen">
      <slot name="code"></slot>
    </div>

    <vb-button v-if="!!$slots.code" slot="footer" fullwidth color="white" @click="toggle">
      <vb-icon name="fa fa-angle-down" :class="{ 'icon-rotate': isOpen }"></vb-icon>
      <vb-title type="subtitle" size="6">{{ buttonText }}</vb-title>
    </vb-button>
  </vb-card>
</template>

<script>
export default {
  name: 'DemoContainer',
  props: {
    title: String
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    buttonText() {
      if (this.isOpen) {
        return '隐藏代码'
      } else {
        return '显示代码'
      }
    }
  }
}
</script>

<style scoped>
.demo:not(:last-child) {
  margin-bottom: 1.5rem;
}
button span {
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.icon-rotate {
  transform: rotate(180deg);
}
</style>
