<template>
  <vb-content>
    <vb-title :id="id" type="title" size="3" class="anchor-title">
      <a :href="`#${id}`" class="anchor-link">#</a>
      {{title}}:
    </vb-title>
    <slot></slot>

    <hr>
  </vb-content>
</template>

<script>
export default {
  name: 'ExampleSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: Boolean
    }
  },
  computed: {
    id() {
      return this.title.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>
