<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
        <pre slot="code">{{ code.basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Modifiers">
      <vb-title type="subtitle" size="6">Selected file name</vb-title>
      <demo>
        <vb-uploader label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">{{demoFilename}}</span>
        </vb-uploader>
        <pre slot="code">{{ code.modifiers.filtName }}</pre>
      </demo>

      <vb-title type="subtitle" size="6">Expand file name</vb-title>
      <demo>
        <vb-uploader fullwidth label="Choose a file">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="file-name">{{demoFilename}}</span>
        </vb-uploader>
        <pre slot="code">{{ code.modifiers.expand }}</pre>
      </demo>

      <vb-title type="subtitle" size="6">Boxed</vb-title>
      <demo>
        <vb-uploader boxed label="Choose a file.">
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
        <pre slot="code">{{ code.modifiers.boxed }}</pre>
      </demo>

      <vb-title type="subtitle" size="6">Combine filename and boxed</vb-title>
      <demo>
        <vb-uploader boxed>
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

          <span slot="label">Choose a file.</span>

          <span slot="file-name">{{demoFilename}}</span>
        </vb-uploader>
        <pre slot="code">{{ code.modifiers.combine }}</pre>
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
          <vb-uploader color="info" label="Info" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="warning" label="Warning">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            color="danger"
            label="Danger"
            :name="demoFilename"
          >
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="white" label="Color white">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader color="light" label="Light" :name="demoFilename">
            <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed color="dark" label="Dark">
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            color="black"
            label="Black"
            :name="demoFilename"
          >
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <div class="block">
          <vb-uploader
            boxed
            color="link"
            label="Link"
            :name="demoFilename"
          >
            <vb-icon slot="icon" name="fa fa-cloud-upload"></vb-icon>
          </vb-uploader>
        </div>
        <pre slot="code">{{ code.colors }}</pre>
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
        <pre slot="code">{{ code.sizes.basic }}</pre>
      </demo>

      <demo>
        <div class="block">
          <vb-uploader size="small" label="Small file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader label="Normal file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader size="medium" label="Medium file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader size="large" label="Large file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <pre slot="code">{{ code.sizes.filename }}</pre>
      </demo>

      <demo>
        <div class="block">
          <vb-uploader boxed size="small" label="Small file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed label="Normal file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed size="medium" label="Medium file" icon="fa fa-upload"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed size="large" label="Large file" icon="fa fa-upload"></vb-uploader>
        </div>
        <pre slot="code">{{ code.sizes.boxed }}</pre>
      </demo>

      <demo>
        <div class="block">
          <vb-uploader boxed size="small" label="Small file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed label="Normal file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed size="medium" label="Medium file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <div class="block">
          <vb-uploader boxed size="large" label="Large file" icon="fa fa-upload" :name="demoFilename"></vb-uploader>
        </div>
        <pre slot="code">{{ code.sizes.combined }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Alignment">
      <demo>
        <vb-uploader
          boxed
          color="success"
          align="centered"
          label="Upload File."
          :name="demoFilename"
        >
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
        <pre slot="code">{{ code.alignment.center}}</pre>
      </demo>
      <demo>
        <vb-uploader
          color="info"
          align="right"
          label="Upload File."
          :name="demoFilename"
        >
          <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
        </vb-uploader>
        <pre slot="code">{{ code.alignment.right}}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Events">
      <demo>
        <vb-uploader label="Uploader" icon="fa fa-upload" :name="name" @change="handleChange"></vb-uploader>
        <pre slot="code">{{ code.events }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/form/file.js'

export default {
  name: 'File',
  data() {
    return {
      code,
      name: '',
      demoFilename: 'Screen Shot 2017-07-29 at 15.54.25.png'
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
