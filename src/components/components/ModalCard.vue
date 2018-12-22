<template>
  <div :class="classes" v-show="isActive">
    <div class="modal-background" @click="deactive"></div>
    <div class="modal-card">
      <header class="modal-card-head" v-if="showHead">
        <slot name="head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" @click="deactive"></button>
        </slot>
      </header>

      <section class="modal-card-body">
        <slot></slot>
      </section>

      <footer class="modal-card-foot" v-if="$slots.foot">
        <slot name="foot"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
import ModalMixin from '../../mixins/modal'

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
