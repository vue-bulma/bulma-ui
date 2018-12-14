export default {
  props: {
    align: {
      type: String,
      validator: value => ['centered', 'right'].includes(value)
    }
  }
}
