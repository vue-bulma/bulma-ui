<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <div class="block">
          <vb-textarea placeholder="Basic"></vb-textarea>
        </div>

        <div class="block">
          <vb-textarea rows="2" placeholder="2 lines of textarea"></vb-textarea>
        </div>
        <pre slot="code">{{ code.basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <div class="block">
          <vb-textarea color="primary" rows="2" placeholder="Primary textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="info" rows="2" placeholder="Info textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="success" rows="2" placeholder="Success textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="warning" rows="2" placeholder="Warning textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="danger" rows="2" placeholder="Danger textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="white" rows="2" placeholder="White textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="light" rows="2" placeholder="Light textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="dark" rows="2" placeholder="Dark textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="black" rows="2" placeholder="Black textarea"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea color="link" rows="2" placeholder="Link textarea"></vb-textarea>
        </div>
        <pre slot="code">{{ code.colors }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <div class="block">
          <vb-textarea size="small" rows="2" placeholder="Small"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea rows="2" placeholder="Normal"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea size="medium" rows="2" placeholder="Medium"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea size="large" rows="2" placeholder="Large"></vb-textarea>
        </div>
        <pre slot="code">{{ code.sizes }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="States">
      <demo>
        <div class="block">
          <vb-textarea placeholder="Normal" rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea placeholder="Hover" state="hovered" rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea placeholder="Focus" state="focused" rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea placeholder="Loading" loading rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea placeholder="Disabled" disabled rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea value="Read only" readonly rows="2"></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea placeholder="Fixed Size" :resize="false" rows="2"></vb-textarea>
        </div>
        <pre slot="code">{{ code.states }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Resize loading Textarea">
      <vb-title type="subtitle" size="6">The size of the Textarea will define the size of the loading icon.</vb-title>
      <demo>
        <div class="block">
          <vb-textarea size="small" rows="2" placeholder="Small loading textarea" loading></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea rows="2" placeholder="Normal loading textarea" loading></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea size="medium" rows="2" placeholder="Medium loading textarea" loading></vb-textarea>
        </div>
        <div class="block">
          <vb-textarea size="large" rows="2" placeholder="Large loading textarea" loading></vb-textarea>
        </div>
        <pre slot="code">{{ code.loading }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <div slot="control">
          Value: <strong>{{value}}</strong>
          <br>
          State: <strong>{{placeholder}}</strong>
        </div>

        <vb-textarea
          autofocus
          placeholder="Max 5 Character"
          v-model="value"
          :maxlength="5"
          @focus="handleFocus"
          @blur="handleBlur"
        >
        </vb-textarea>
        <pre slot="code">{{ code.events }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/form/textarea.js'

export default {
  name: 'Textarea',
  data() {
    return {
      code,
      value: '',
      placeholder: 'Textarea blurred!'
    }
  },
  methods: {
    change(value) {
      this.value = value
    },
    handleFocus() {
      this.placeholder = 'Textarea focused!'
    },
    handleBlur() {
      this.placeholder = 'Textarea blurred!'
    }
  }
}
</script>
