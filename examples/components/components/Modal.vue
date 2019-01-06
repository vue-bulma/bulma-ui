<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-modal :is-show.sync="modal1">
          <p>This is the content</p>
        </vb-modal>
        <vb-button @click="modal1 = true">Basic</vb-button>
        <pre slot="code">{{ basic }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Image modal">
      <demo>
        <vb-button @click="modal7 = true">Image modal</vb-button>
        <vb-modal :is-show.sync="modal7" close-button-size="large">
          <vb-image src="https://bulma.io/images/placeholders/1280x960.png" size="4by3"></vb-image>
        </vb-modal>
        <pre slot="code">{{ imageModal }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Modal card">
      <demo>
        <vb-button @click="modal8 = true">Modal card</vb-button>
        <vb-modal-card title="modalCard" :is-show.sync="modal8">
          <p>This is content</p>
          <div slot="foot">
            <vb-button color="success">Save changes</vb-button>
            <vb-button>Cancel</vb-button>
          </div>
        </vb-modal-card>
        <pre slot="code">{{ modalCard }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Disable">
      <demo>
        <vb-buttons-list>
          <vb-button @click="modal9 = true">Disable mask layer closure</vb-button>
          <vb-button @click="modal10 = true">Disable Mask</vb-button>
        </vb-buttons-list>
        <vb-modal-card title="modalCard" :is-show.sync="modal9" :mask-closable="false">
          <p>This is content</p>
          <div slot="foot">
            <vb-button color="success">Save changes</vb-button>
            <vb-button>Cancel</vb-button>
          </div>
        </vb-modal-card>

        <vb-modal-card title="modalCard" :is-show.sync="modal10" :show-mask="false">
          <p>This is content</p>
          <div slot="foot">
            <vb-button color="success">Save changes</vb-button>
            <vb-button>Cancel</vb-button>
          </div>
        </vb-modal-card>
        <pre slot="code">{{ disable }}</pre>
      </demo>
    </example-section-item>

    <example-section-item title="Closable">
      <demo>
        <vb-buttons-list>
          <vb-button @click="modal2 = true">Close button normal</vb-button>
          <vb-button @click="modal3 = true">Close button small</vb-button>
          <vb-button @click="modal4 = true">Close button medium</vb-button>
          <vb-button @click="modal5 = true">Close button large</vb-button>
          <vb-button @click="modal6 = true">Disable close button</vb-button>
        </vb-buttons-list>

        <vb-modal :is-show.sync="modal2">
          <p>This is the content</p>
        </vb-modal>
        <vb-modal :is-show.sync="modal3" close-button-size="small">
          <p>This closeButton is small</p>
        </vb-modal>
        <vb-modal :is-show.sync="modal4" close-button-size="medium">
          <p>This closeButton is medium</p>
        </vb-modal>
        <vb-modal :is-show.sync="modal5" close-button-size="large">
          <p>This closeButton is large</p>
        </vb-modal>
        <vb-modal :is-show.sync="modal6" :closable="false">
          <p>Disable closeButton</p>
        </vb-modal>
        <pre slot="code">{{ closeButtonSize }}</pre>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
import code from '@examples/code/components/modal.js'

export default {
  name: 'ModalExamples',
  data() {
    return {
      basic: code.basic,
      imageModal: code.imageModal,
      modalCard: code.modalCard,
      disable: code.disable,
      closeButtonSize: code.closeButtonSize,
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false
    }
  }
}
</script>
