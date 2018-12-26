<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Modifiers">
      <demo title="Selected file name">
        <vb-uploader label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </vb-uploader>
      </demo>

      <demo title="CTA right">
        <vb-uploader label="Choose a file" align="right">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </vb-uploader>
      </demo>

      <demo title="Expand file name">
        <vb-uploader fullwidth label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </vb-uploader>
      </demo>

      <demo title="Boxed">
        <vb-uploader boxed label="Choose a file.">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>

      <demo title="Combine filename and boxed">
        <vb-uploader boxed>
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="label">Choose a file.</span>

          <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-uploader boxed align="centered" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>
      <demo>
        <vb-uploader align="right" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
      </demo>
    </example-section-item>

    <example-section-item title="Colors">
      <demo>
        <div class="block">
          <vb-uploader color="primary" label="Primary">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="info" label="Info" name="Screen Shot 2017-07-29 at 15.54.25.png">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="warning" label="Warning">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="danger" label="Danger" name="Screen Shot 2017-07-29 at 15.54.25.png">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="white" label="Color white">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="light" label="Light" name="Screen Shot 2017-07-29 at 15.54.25.png">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="dark" label="Dark">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="black" label="Black" name="Screen Shot 2017-07-29 at 15.54.25.png">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="link" label="Link" name="Screen Shot 2017-07-29 at 15.54.25.png">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Sizes">
      <demo>
        <div class="block">
          <vb-uploader size="small" label="Small file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader label="Normal file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader size="medium" label="Medium file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader size="large" label="Large file" icon="fa fa-upload"></vb-uploader>
        </div>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <vb-uploader label="Uploader" icon="fa fa-upload" :name="name" @change="handleChange"></vb-uploader>
      </demo>
    </example-section-item>
  </vb-section>
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
