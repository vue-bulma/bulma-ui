import Box from './components/elements/Box'
import Button from './components/elements/Button'
import Content from './components/elements/Content'
import Delete from './components/elements/Delete'
import Icon from './components/elements/Icon'
import ButtonGroup from './components/elements/ButtonGroup'
import ButtonAddons from './components/elements/ButtonAddons'
import Input from './components/form/Input'
import Textarea from './components/form/Textarea'

const components = [
  Box,
  Button,
  Content,
  Delete,
  Icon,
  ButtonGroup,
  ButtonAddons,
  Input,
  Textarea
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
