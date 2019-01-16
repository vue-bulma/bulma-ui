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
import TableColumn from './components/elements/TableColumn'
import Tag from './components/elements/Tag'
import Tags from './components/elements/Tags'
import Title from './components/elements/Title'
import Subtitle from './components/elements/Subtitle'
import Column from './components/columns/Column'
import Columns from './components/columns/Columns'
import FormItem from './components/form/FormItem'
import Form from './components/form/Form'
import Input from './components/form/Input'
import Textarea from './components/form/Textarea'
import Select from './components/form/Select'
import Checkbox from './components/form/Checkbox'
import CheckboxGroup from './components/form/CheckboxGroup'
import Radio from './components/form/Radio'
import RadioGroup from './components/form/RadioGroup'
import Uploader from './components/form/Uploader'
import Breadcrumb from './components/components/breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/components/breadcrumb/BreadcrumbItem'
import Card from './components/components/Card'
import CardFooterItem from './components/components/CardFooterItem'
import Container from './components/layout/Container'
import Level from './components/layout/Level'
import LevelItem from './components/layout/LevelItem'
import MediaObject from './components/layout/MediaObject'
import Hero from './components/layout/Hero'
import Section from './components/layout/Section'
import Footer from './components/layout/Footer'
import Tile from './components/layout/Tile'
import Menu from './components/components/menu/Menu'
import MenuList from './components/components/menu/MenuList'
import MenuItem from './components/components/menu/MenuItem'
import Message from './components/components/Message'
import Pagination from './components/components/Pagination'
import Tabs from './components/components/Tabs'
import Modal from './components/components/modal/Modal'
import ModalCard from './components/components/modal/ModalCard'
import Navbar from './components/components/navbar/Navbar'
import NavbarDropdown from './components/components/navbar/NavbarDropdown'
import NavbarItem from './components/components/navbar/NavbarItem'
import Panel from './components/components/panel/Panel'
import PanelBlock from './components/components/panel/PanelBlock'
import PanelTab from './components/components/panel/PanelTab'
import Dropdown from './components/components/dropdown/Dropdown'
import DropdownMenu from './components/components/dropdown/DropdownMenu'
import DropdownItem from './components/components/dropdown/DropdownItem'

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
  TableColumn,
  Tag,
  Tags,
  Title,
  Subtitle,
  Column,
  Columns,
  Input,
  Textarea,
  Select,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Uploader,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Level,
  LevelItem,
  Card,
  CardFooterItem,
  FormItem,
  Form,
  MediaObject,
  Hero,
  Section,
  Footer,
  Tile,
  Menu,
  MenuList,
  MenuItem,
  Message,
  Pagination,
  Tabs,
  Modal,
  ModalCard,
  Navbar,
  NavbarDropdown,
  NavbarItem,
  Panel,
  PanelBlock,
  PanelTab,
  Dropdown,
  DropdownMenu,
  DropdownItem
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
