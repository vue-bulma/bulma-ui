<template>
<div>
  <vb-box>
    <span id="basic" class="title">
      Basic:
    </span>
    <vb-card
    image="https://bulma.io/images/placeholders/1280x960.png"
    size="4by3"
    >
    <div slot="content">
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </div>
    </vb-card>
  </vb-box>
  <vb-box>
    <span id="header" class="title">
      Header:
    </span>
    <vb-card
    title="title"
    icon="fa fa-angle-down"
    >
    <div slot="content">
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </div>
    </vb-card>
  </vb-box>
  <vb-box>
    <span id="footer" class="title">
      Footer:
    </span>
    <vb-card
    title="title"
    icon="fa fa-angle-down"
    >
    <div slot="content">
      <p>Content of card</p>
      <p>Content of card</p>
      <p>Content of card</p>
    </div>
    <div slot="footer">
    Footer of card
    </div>
    </vb-card>
  </vb-box>
</div>
</template>
