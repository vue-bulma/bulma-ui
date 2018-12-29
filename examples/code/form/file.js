let code = {}
code.basic = `
<template>
  <vb-uploader label="Choose a file." icon="fa fa-upload"></vb-uploader>
</template>
`
code.modifiers = {}
code.modifiers.filtName = `
<template>
  <vb-uploader label="Choose a file">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

    <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
  </vb-uploader>
</template>
`
code.modifiers.CTAright = `
<template>
  <vb-uploader label="Choose a file" align="right">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

    <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
  </vb-uploader>
</template>
`
code.modifiers.expand = `
<template>
  <vb-uploader fullwidth label="Choose a file">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

    <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
  </vb-uploader>
</template>
`
code.modifiers.boxed = `
<template>
  <vb-uploader boxed label="Choose a file.">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
  </vb-uploader>
</template>
`
code.modifiers.combine = `
<template>
  <vb-uploader boxed>
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>

    <span slot="label">Choose a file.</span>

    <span slot="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
  </vb-uploader>
</template>
`
code.alignment = {}
code.alignment.center = `
<template>
  <vb-uploader boxed align="centered" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
  </vb-uploader>
</template>
`
code.alignment.right = `
<template>
  <vb-uploader align="right" label="Upload File." name="Screen Shot 2017-07-29 at 15.54.25.png">
    <vb-icon slot="icon" name="fa fa-upload"></vb-icon>
  </vb-uploader>
</template>
`
code.colors = `
<template>
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
</template>
`
code.sizes = `
<template>
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
</template>
`
code.events = `
<template>
  <vb-uploader label="Uploader" icon="fa fa-upload" :name="name" @change="handleChange"></vb-uploader>
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
`
export default code
