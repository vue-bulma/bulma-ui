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
import TableHeader from './components/elements/TableHeader'
import Tag from './components/elements/Tag'
import Tags from './components/elements/Tags'
import Title from './components/elements/Title'
import Column from './components/columns/Column'
import Columns from './components/columns/Columns'
import Input from './components/form/Input'
import Textarea from './components/form/Textarea'
import Select from './components/form/Select'
import Checkbox from './components/form/Checkbox'
import Radio from './components/form/Radio'
import Uploader from './components/form/Uploader'
import Breadcrumb from './components/components/Breadcrumb'
import Container from './components/layout/Container'
import Level from './components/layout/Level'
import LevelItem from './components/layout/LevelItem'

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
  TableHeader,
  Tag,
  Tags,
  Title,
  Column,
  Columns,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Uploader,
  Breadcrumb,
  Container,
  Level,
  LevelItem
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
