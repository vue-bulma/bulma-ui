<script>
import colorProps from '@/mixins/color'
import sizeProps from '@/mixins/size'
import alignProps from '@/mixins/align'
import Vue from 'vue'

export default Vue.component('VbFormItem', {
  mixins: [colorProps, alignProps, sizeProps],
  inject: {
    vbForm: {
      default() {
        return {}
      }
    }
  },
  provide() {
    return {
      vbFormItem: this
    }
  },
  props: {
    label: String,
    message: String,
    grouped: Boolean,
    horizontal: {
      type: Boolean,
      default: undefined
    },
    addons: Boolean,
    multiline: Boolean
    // expanded: Boolean
  },
  computed: {
    _formSize() {
      return this.size || this.vbForm.size
    },
    helpMessage() {
      return this.$slots.message || this.message
    },
    isHorizontal() {
      if (this.horizontal === undefined) {
        return this.vbForm.horizontal
      }
      return this.horizontal
    },
    classes() {
      const { grouped, align, isHorizontal, addons, multiline } = this

      return {
        field: true,
        'is-grouped': grouped,
        [`is-grouped-${align}`]: !!align && grouped,
        [`has-addons-${align}`]: !!align && addons,
        'has-addons': addons && !this.helpMessage,
        'is-horizontal': isHorizontal,
        'is-grouped-multiline': multiline
      }
    }
  },
  render(h) {
    const { isHorizontal, _formSize = 'normal' } = this
    let label = this.renderLabel(h)
    let content = this.renderContent(h)

    if (isHorizontal) {
      label = h('div', { class: `field-label is-${_formSize}` }, [label])
      content = h('div', { class: 'field-body' }, [content])
    }

    return h('div', { class: this.classes }, [label, content])
  },
  methods: {
    renderLabel(h) {
      const labelTmpl = this.$slots.label || this.label
      return labelTmpl && h('label', { class: 'label' }, labelTmpl)
    },
    renderContent(h) {
      const { isHorizontal, addons } = this
      const help = this.renderHelp(h)

      let content = this.$slots.default.map(o => {
        const { componentOptions: options, data } = o
        const isControl = options
          ? options.tag !== 'vb-button' // VbButton is <a>
          : data && data.staticClass.includes('control') // custom elm.class has control

        return isControl ? o : h('div', { class: 'control' }, [o])
      })

      if (addons && help) {
        content = h('div', { class: 'field' }, [
          h('div', { class: 'field has-addons' }, [content]),
          help
        ])
      } else if (!addons && isHorizontal) {
        content = content.map((o, index) => {
          const item = index === 0 ? [o, help] : [o]
          return h('div', { class: 'field' }, item)
        })
      } else {
        content = [content, help]
      }

      return content
    },
    renderHelp(h) {
      const { helpMessage, color } = this
      if (!helpMessage) return

      return h(
        'p',
        {
          class: {
            help: true,
            [`is-${color}`]: helpMessage && color
          }
        },
        this.helpMessage
      )
    }
  }
})
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/elements/form';
</style>
