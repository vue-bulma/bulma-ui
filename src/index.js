import Box from './components/elements/Box'
import Button from './components/elements/Button'

const components = [Box, Button]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
