export default {
  props: {
    size: {
      type: String,
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  }
}
