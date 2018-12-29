<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-input/>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <div class="block">
          <vb-input color="primary" placeholder="Primary"/>
        </div>
        <div class="block">
          <vb-input color="info" placeholder="Info"/>
        </div>
        <div class="block">
          <vb-input color="success" placeholder="Success"/>
        </div>
        <div class="block">
          <vb-input color="warning" placeholder="Warning"/>
        </div>
        <div class="block">
          <vb-input color="danger" placeholder="Danger"/>
        </div>
        <div class="block">
          <vb-input color="white" placeholder="White"/>
        </div>
        <div class="block">
          <vb-input color="light" placeholder="Light"/>
        </div>
        <div class="block">
          <vb-input color="dark" placeholder="Dark"/>
        </div>
        <div class="block">
          <vb-input color="black" placeholder="Black"/>
        </div>
        <div class="block">
          <vb-input color="link" placeholder="Link"/>
        </div>
        <pre slot="code">{{ colors }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <div class="block">
          <vb-input size="small" placeholder="Small"/>
        </div>
        <div class="block">
          <vb-input placeholder="Normal"/>
        </div>
        <div class="block">
          <vb-input size="medium" placeholder="Medium"/>
        </div>
        <div class="block">
          <vb-input size="large" placeholder="Large"/>
        </div>
        <pre slot="code">{{ sizes }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo>
        <vb-input rounded placeholder="Rounded"/>
        <pre slot="code">{{ rounded }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo>
        <div class="block">
          <vb-input placeholder="Normal"/>
        </div>
        <div class="block">
          <vb-input state="hovered" placeholder="Hovered"/>
        </div>
        <div class="block">
          <vb-input state="focused" placeholder="Focus"/>
        </div>
        <div class="block">
          <vb-input placeholder="Loading" loading/>
        </div>
        <div class="block">
          <vb-input placeholder="Disabled" disabled/>
        </div>
        <div class="block">
          <vb-input value="This text is readonly" placeholder="Disabled" readonly/>
        </div>
        <div class="block">
          <vb-input value="Static: me@example.com" static readonly/>
        </div>
        <pre slot="code">{{ states }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="With Font Awesome icons">
      <demo>
        <vb-input prefix="fa fa-envelope" suffix="fa fa-check" placeholder="Normal"/>
        <pre slot="code">{{ icon }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Event">
      <demo>
        <div class="block" slot="control">
          Value:
          <strong>{{value}}</strong>
          <br>State:
          <strong>{{placeholder}}</strong>
        </div>

        <vb-input v-model="value" @focus="handleFocus" @blur="handleBlur"/>
        <pre slot="code">{{ events }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '../../code/form/input.js'

export default {
  name: 'Input',
  data() {
    return {
      basic: code.basic,
      colors: code.colors,
      sizes: code.sizes,
      rounded: code.rounded,
      states: code.states,
      icon: code.icon,
      events: code.event,
      value: '',
      placeholder: 'Input blured!'
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Input focused!'
    },
    handleBlur() {
      this.placeholder = 'Input blurred!'
    }
  }
}
</script>
