let code = {}
code.basic = `\
<template>
  <vb-notification>
    <vb-delete></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
      <a>felis venenatis</a> 
         efficitur. Sit amet,consectetur adipiscing elit
  </vb-notification>
</template>
`

code.colors = `\
<template>
  <vb-notification color="primary">
    <vb-delete></vb-delete>
    Primar lorem ipsum dolor sit amet, 
    consecteturadipiscing elit lorem ipsum dolor.
    <strong>Pellentesque risus mi</strong>, 
    tempus quis placerat ut, porta nec nulla. 
    Vestibulum rhoncus ac ex sit amet fringilla. 
    Nullam gravida purus diam, et dictum
    <a>felis venenatis</a> 
    efficitur. Sit amet,consectetur adipiscing elit
  </vb-notification>

  <vb-notification color="info">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="success">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="warning">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="danger">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="white">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="light">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="dark">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="black">
    <vb-delete></vb-delete>
    ...
  </vb-notification>

  <vb-notification color="link">
    <vb-delete></vb-delete>
    ...
  </vb-notification>
</template>
`

code.event = `\
<template>
  <div class="block" slot="control">
    <vb-button @click="visible=true">show Notification</vb-button>
  </div>

  <transition name="slide-fade" >
    <vb-notification
      color="danger"
      v-if="visible"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
  >
    <vb-delete @click.stop="close"></vb-delete>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
    <strong>Pellentesque risus mi</strong>, 
    tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
    Nullam gravida purus diam, et dictum
    <a>felis venenatis</a> 
    efficitur. Sit amet,consectetur adipiscing elit
    </vb-notification>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      timer: null,
      duration: 2500,
      closed: false
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    handleClick() {},
    handleMouseenter() {
      clearTimeout(this.timer)
    },
    handleMouseleave() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    }
  }
}
</script>
`
export default code
