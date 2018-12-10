import Test from './components/Test'

const components = [Test]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}
