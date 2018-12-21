<template>
  <div v-if="isActive" :class="classes" >
    <div class="modal-background" @click="deactive"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button v-show="closable" :class="modalClose" @click="deactive"></button>
  </div>
</template>

<script>
import ModalMixin from '../../mixins/modal'

const SIZE = ['small', 'medium', 'large']

export default {
  name: 'VbModal',
  mixins: [ModalMixin],
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    closeButtonSize: {
      type: String,
      validator(value) {
        return SIZE.includes(value)
      }
    }
  },
  computed: {
    modalClose() {
      const { closeButtonSize } = this
      const obj = {
        'modal-close': true,
        [`is-${closeButtonSize}`]: !!closeButtonSize
      }
      return obj
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/modal';
</style>
