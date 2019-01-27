<template>
  <div :class="classes" >
    <div v-if="mask" class="modal-background" @click="handleClickMask"></div>

    <div v-if="type === 'content'" class="modal-content">
      <slot></slot>
    </div>

    <div v-else class="modal-card">
      <header v-if="$slots.title || title || closable" class="modal-card-head">
        <slot name="title">
          <p class="modal-card-title">{{ title }}</p>
        </slot>
        <button v-if="closable" class="delete" @click="close"></button>
      </header>

      <section v-if="$slots.default" class="modal-card-body">
        <slot></slot>
      </section>

      <footer v-if="$slots.footer" class="modal-card-foot">
        <slot name="footer"></slot>
      </footer>
    </div>

    <button v-show="type === 'content' && closable" class="modal-close" @click="close"></button>
  </div>
</template>

<script>
const TYPES = ['content', 'card']

export default {
  name: 'VbModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'content',
      validator(value) {
        return TYPES.includes(value)
      }
    },
    title: {
      type: String
    },
    mask: {
      tyep: Boolean,
      default: true
    },
    maskClosable: {
      tyep: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        modal: true,
        'is-active': this.visible
      }
    }
  },
  methods: {
    handleClickMask() {
      if (this.maskClosable) {
        this.close()
      }
    },
    close() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/modal';
</style>
