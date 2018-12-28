<template>
  <div v-show="isActive" :class="classes">
    <div v-if="showMask" class="modal-background" @click="handleMask"></div>
    <div class="modal-card">
      <header v-if="showHead" class="modal-card-head">
        <slot name="head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" @click="deactive"></button>
        </slot>
      </header>

      <section class="modal-card-body">
        <slot></slot>
      </section>

      <footer v-if="$slots.foot" class="modal-card-foot">
        <slot name="foot"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
import ModalMixin from '@/mixins/modal'

export default {
  name: 'VbModalCard',
  mixins: [ModalMixin],
  data() {
    return {
      showHead: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$slots.head === undefined && !this.title) {
        this.showHead = false
      }
    })
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/modal';
</style>
