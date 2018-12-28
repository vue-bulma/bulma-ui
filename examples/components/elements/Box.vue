<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-box>
          <vb-media-object>
            <vb-image
              slot="left"
              src="https://bulma.io/images/placeholders/128x128.png"
              size="64x64"
            ></vb-image>

            <vb-content>
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </vb-content>

            <vb-level mobile>
              <vb-level-item slot="left">
                <router-link :to="{ path: '#' }">
                  <vb-icon size="small" name="fa fa-reply"></vb-icon>
                </router-link>
              </vb-level-item>
              <vb-level-item slot="left">
                <router-link :to="{ path: '#' }">
                  <vb-icon size="small" name="fa fa-retweet"></vb-icon>
                </router-link>
              </vb-level-item>
              <vb-level-item slot="left">
                <a @click="handleClick">
                  <vb-icon size="small" name="fa fa-heart"></vb-icon>
                </a>
              </vb-level-item>
            </vb-level>
          </vb-media-object>
        </vb-box>
        <pre slot="code">{{box.basic}}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/elements/box.js'
export default {
  name: 'BoxExamples',
  data() {
    return {
      box: code
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>
