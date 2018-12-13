import Box from './components/elements/Box'
import Button from './components/elements/Button'
import Content from './components/elements/Content'
import Delete from './components/elements/Delete'
import Icon from './components/elements/Icon'
import ButtonGroup from './components/elements/ButtonGroup'
import ButtonAddons from './components/elements/ButtonAddons'
import ButtonsList from './components/elements/ButtonsList'
import Image from './components/elements/Image'
import Note from './components/elements/Notification'
import Progress from './components/elements/ProgressBar'
import Table from './components/elements/Table'
import Tag from './components/elements/Tag'
import TagAddons from './components/elements/TagAddons'
import Title from './components/elements/Title'
import Input from './components/form/Input'
import Textarea from './components/form/Textarea'
import Select from './components/form/Select'
import Checkbox from './components/form/Checkbox'

const components = [
  Box,
  Button,
  Content,
  Delete,
  Icon,
  ButtonGroup,
  ButtonAddons,
  ButtonsList,
  Image,
  Note,
  Progress,
  Table,
  Tag,
  TagAddons,
  Title,
  Input,
  Textarea,
  Select,
  Checkbox
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
