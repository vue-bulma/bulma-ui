import SectionItem from './SectionItem'
import DemoContainer from './DemoContainer'

const install = function(Vue) {
  Vue.component('Demo', DemoContainer)
  Vue.component('ExampleSectionItem', SectionItem)
}

export default {
  install
}
