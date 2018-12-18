const BASE_COLOR = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'white',
  'light',
  'dark',
  'black',
  'link'
]

const HERO_COLOR = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'black',
  'link'
]

export const button = {
  props: {
    color: {
      type: String,
      validator(value) {
        return [...BASE_COLOR, 'text'].includes(value)
      }
    }
  }
}

export const hero = {
  props: {
    color: {
      type: String,
      validator(value) {
        return HERO_COLOR.includes(value)
      }
    }
  }
}

export default {
  props: {
    color: {
      type: String,
      validator(value) {
        return BASE_COLOR.includes(value)
      }
    }
  }
}
