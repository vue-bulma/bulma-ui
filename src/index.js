import Box from './components/elements/Box'
import Button from './components/elements/Button'
import Content from './components/elements/Content'
const components = [Box, Button, Content]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
