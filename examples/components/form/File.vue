<template>
  <div class="container">
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
    </vb-box>

    <span id="modifiers" class="title">Modifiers:</span>

    <vb-box>
      <vb-uploader fullwidth align="right">
        <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

        <span slot="label">Choose a file.</span>

        <span slot="file-name">File Name</span>
      </vb-uploader>
    </vb-box>

    <vb-box>
      <vb-uploader boxed label="Choose a file.">
        <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
      </vb-uploader>
    </vb-box>

    <vb-box>
      <vb-uploader boxed>
        <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

        <span slot="label">Choose a file.</span>

        <span slot="file-name">File Name</span>
      </vb-uploader>
    </vb-box>

    <vb-box>
      <vb-uploader boxed align="centered" label="Upload File." name="bulma.scss">
        <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
      </vb-uploader>
    </vb-box>

    <span id="colors" class="title">Colors:</span>

    <vb-box>
      <div class="field">
        <vb-uploader color="primary" label="Primary">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader color="info" label="Info" name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader boxed color="warning" label="Warning">
          <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader boxed color="danger" label="Danger" name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader color="white" label="Color white">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader color="light" label="Light" name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader boxed color="dark" label="Dark">
          <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader boxed color="black" label="Black" name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
        </vb-uploader>
      </div>
      <div class="field">
        <vb-uploader boxed color="link" label="Link" name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
        </vb-uploader>
      </div>
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <div class="field">
        <vb-uploader size="small" label="Small file" icon="fa fa-upload"></vb-uploader>
      </div>
      <div class="field">
        <vb-uploader label="Normal file" icon="fa fa-upload"></vb-uploader>
      </div>
      <div class="field">
        <vb-uploader size="medium" label="Medium file" icon="fa fa-upload"></vb-uploader>
      </div>
      <div class="field">
        <vb-uploader size="large" label="Large file" icon="fa fa-upload"></vb-uploader>
      </div>
    </vb-box>

    <span id="events" class="title">Events:</span>

    <vb-box>
      <div class="field">
        <vb-uploader label="Uploader" icon="fa fa-upload" :name="name" @change="handleChange"></vb-uploader>
      </div>
    </vb-box>
  </div>
</template>

<script>
export default {
  name: 'File',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleChange(event) {
      const { files } = event.target

      if (files[0]) {
        this.name = files[0].name
      }
    }
  }
}
</script>
