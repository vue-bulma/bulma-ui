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
  render(createElement) {
    const { isHorizontal, _formSize = 'normal' } = this
    let label = this.renderLabel(createElement)
    let content = this.renderContent(createElement)

    if (isHorizontal) {
      label = createElement('div', { class: `field-label is-${_formSize}` }, [
        label
      ])
      content = createElement('div', { class: 'field-body' }, [content])
    }

    return createElement('div', { class: this.classes }, [label, content])
  },
  methods: {
    renderLabel(createElement) {
      const labelTmpl = this.$slots.label || this.label
      return labelTmpl && createElement('label', { class: 'label' }, labelTmpl)
    },
    renderContent(createElement) {
      const { isHorizontal, addons } = this
      const help = this.renderHelp(createElement)

      let content = this.$slots.default.map(o => {
        const { componentOptions: options, data } = o
        const isControl = options
          ? options.tag !== 'vb-button' // VbButton is <a>
          : data && data.staticClass.includes('control') // custom elm.class has control

        return isControl ? o : createElement('div', { class: 'control' }, [o])
      })

      if (addons && help) {
        content = createElement('div', { class: 'field' }, [
          createElement('div', { class: 'field has-addons' }, [content]),
          help
        ])
      } else if (!addons && isHorizontal) {
        content = content.map((o, index) => {
          const item = index === 0 ? [o, help] : [o]
          return createElement('div', { class: 'field' }, item)
        })
      } else {
        content = [content, help]
      }

      return content
    },
    renderHelp(createElement) {
      const { helpMessage, color } = this
      if (!helpMessage) return

      return createElement(
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
