<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">{{title}}</div>
      <div class="card-header-icon" v-if="!!icon">
        <vb-icon name="icon"></vb-icon>
      </div>
    </div>
    <div class="card-image" v-if="!!image"></div>
    <div class="card-content">{{content}}</div>
    <div class="card-footer">
      <div class="card-footer-item"></div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'VbCard',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    content: String
  },
  image: {
    type: String
  }
}
</script>

