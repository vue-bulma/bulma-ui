<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-image :src="image7" size="128x128"></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Rounded">
      <demo>
        <vb-image :src="image7" size="128x128" rounded></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Size">
      <demo>
        <vb-image :src="image1" size="16x16"></vb-image>
        <vb-image :src="image2" size="24x24"></vb-image>
        <vb-image :src="image3" size="32x32"></vb-image>
        <vb-image :src="image4" size="48x48"></vb-image>
        <vb-image :src="image5" size="64x64"></vb-image>
        <vb-image :src="image6" size="96x96"></vb-image>
        <vb-image :src="image7" size="128x128"></vb-image>
      </demo>
    </example-section-item>

    <example-section-item title="Responsive images with ratios">
      <demo class="paddingRight">
        <vb-image :src="image8" size="square"></vb-image>
        <vb-image :src="image8" size="1by1"></vb-image>
        <vb-image :src="image9" size="5by4"></vb-image>
        <vb-image :src="image10" size="4by3"></vb-image>
        <vb-image :src="image11" size="3by2"></vb-image>
        <vb-image :src="image12" size="5by3"></vb-image>
        <vb-image :src="image13" size="16by9"></vb-image>
        <vb-image :src="image14" size="2by1"></vb-image>
        <vb-image :src="image15" size="3by1"></vb-image>
        <vb-image :src="image16" size="4by5"></vb-image>
        <vb-image :src="image17" size="3by4"></vb-image>
        <vb-image :src="image18" size="2by3"></vb-image>
        <vb-image :src="image19" size="3by5"></vb-image>
        <vb-image :src="image20" size="9by16"></vb-image>
        <vb-image :src="image21" size="1by2"></vb-image>
        <vb-image :src="image22" size="1by3"></vb-image>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'ImageExamples',
  data() {
    return {
      image1: require('../../assets/images/16x16.png'),
      image2: require('../../assets/images/24x24.png'),
      image3: require('../../assets/images/32x32.png'),
      image4: require('../../assets/images/48x48.png'),
      image5: require('../../assets/images/64x64.png'),
      image6: require('../../assets/images/96x96.png'),
      image7: require('../../assets/images/128x128.png'),
      image8: require('../../assets/images/480x480.png'),
      image9: require('../../assets/images/600x480.png'),
      image10: require('../../assets/images/640x480.png'),
      image11: require('../../assets/images/480x320.png'),
      image12: require('../../assets/images/800x480.png'),
      image13: require('../../assets/images/640x360.png'),
      image14: require('../../assets/images/640x320.png'),
      image15: require('../../assets/images/720x240.png'),
      image16: require('../../assets/images/480x600.png'),
      image17: require('../../assets/images/480x640.png'),
      image18: require('../../assets/images/320x480.png'),
      image19: require('../../assets/images/480x800.png'),
      image20: require('../../assets/images/360x640.png'),
      image21: require('../../assets/images/320x640.png'),
      image22: require('../../assets/images/240x720.png')
    }
  }
}
</script>

<style scoped>
.image:not(:last-child) {
  margin-bottom: 20px;
}
.paddingRight {
  padding-right: 40% !important;
}
</style>
