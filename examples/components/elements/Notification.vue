<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-notification>
          <vb-delete></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <pre slot="code">{{code.basic}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo class="box-background">
        <vb-notification color="primary">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="info">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="success">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="warning">
          <vb-delete></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="danger">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="white">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="light">
          <vb-delete></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="dark">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="black">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <vb-notification color="link">
          <vb-delete></vb-delete>Primar lorem ipsum dolor sit amet, consectetur
          adipiscing elit lorem ipsum dolor.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Sit amet,
          consectetur adipiscing elit
        </vb-notification>
        <pre slot="code">{{code.colors}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Event">
      <demo>
        <div class="block" slot="control">
          <vb-button @click="visible=true">show Notification</vb-button>
        </div>

        <transition name="slide-fade">
          <vb-notification
            color="danger"
            v-if="visible"
            @click="handleClick"
            @mouseenter="handleMouseenter"
            @mouseleave="handleMouseleave"
          >
            <vb-delete @click.stop="close"></vb-delete>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
            <a>felis venenatis</a> efficitur. Sit amet,
            consectetur adipiscing elit
          </vb-notification>
        </transition>
        <pre slot="code">{{code.event}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/notification.js'
export default {
  name: 'NotificationExamples',
  data() {
    return {
      code: code,
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
<style>
.box-background {
  background-color: #ddf9fe !important;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
