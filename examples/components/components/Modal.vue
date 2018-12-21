<template>
  <div>
    <span id="basic" class="title">Basic:</span>
    <vb-box>
      <vb-modal :is-show.sync="modal1">
        <p>This is the content</p>
      </vb-modal>
      <vb-button @click="modal1 = true">Basic</vb-button>
    </vb-box>

    <span id="closable" class="title">Closable:</span>
    <vb-box>
      <vb-buttons-List>
        <vb-button @click="modal2 = true">Closable</vb-button>
        <vb-button @click="modal3 = true">Closable small</vb-button>
        <vb-button @click="modal4 = true">Closable medium</vb-button>
        <vb-button @click="modal5 = true">Closable large</vb-button>
      </vb-buttons-List>
      <vb-modal :is-show.sync="modal2" :closable="false">
        <p>This is the content</p>
      </vb-modal>
      <vb-modal :is-show.sync="modal3" close-button-size="small" >
      <p>This closeButton is small</p>
      </vb-modal>
      <vb-modal :is-show.sync="modal4" close-button-size="medium" >
      <p>This closeButton is medium</p>
      </vb-modal>
      <vb-modal :is-show.sync="modal5" close-button-size="large" >
      <p>This closeButton is large</p>
      </vb-modal>      
    </vb-box>
    
    <span id="image-modal" class="title">Image modal:</span>
    <vb-box>
      <vb-button @click="modal6 = true">Image modal</vb-button>
      <vb-modal :is-show.sync="modal6" close-button-size="large" >
        <vb-image
          path="https://bulma.io/images/placeholders/1280x960.png"
          size="4by3"
        ></vb-image>
      </vb-modal>
    </vb-box>

    <span id="modal-card" class="title">Modal card:</span>
    <vb-box>
      <vb-button @click="modal7 = true">Modal card</vb-button>
      <vb-modal-card title="modalCard" :is-show.sync="modal7">
        <p>This is content</p>
        <div slot="foot">
          <vb-button color="success">Save changes</vb-button>
          <vb-button>Cancel</vb-button>
        </div>
      </vb-modal-card>
    </vb-box>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false
    }
  }
}
</script>
