<template>
  <div>
    <span id="basic" class="title">Basic:</span>

    <vb-box>
      <vb-message title="Hello World" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
    </vb-box>

    <span id="colors" class="title">Colors:</span>

    <vb-box>
      <vb-message title="Hello World" color="dark" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="primary" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="link" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="info" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="success" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="warning" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" color="danger" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>                          
    </vb-box>

    <span id="content" class="title">Message content only:</span>

    <vb-box>
      <vb-message>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message color="dark">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message color="primary">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message color="link">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message color="info">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>      
      <vb-message color="success">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message color="warning">
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>       
      <vb-message color="danger"> 
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>                                          
    </vb-box>

    <span id="sizes" class="title">Sizes:</span>

    <vb-box>
      <vb-message title="Hello World" size="small" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message> 
      <vb-message title="Hello World" size="medium" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>
      <vb-message title="Hello World" size="large" showCloseButton>
        <div slot="content">
          <p>This is the content</p>
        </div>
      </vb-message>                
    </vb-box>
  </div>
</template>
