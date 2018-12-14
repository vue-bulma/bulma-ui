<template>
  <vb-container id="layouts" view="fullhd">
    <span id="basic" class="title">Basic:</span>
    <div class="field">
      <vb-container>
        <vb-notification>
          This container is <strong>centered</strong> on desktop.
        </vb-notification>
      </vb-container>
    </div>

    <span id="fluid" class="title">Fluid:</span>
    <div class="field">
      <vb-container view="fluid">
        <vb-notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
        </vb-notification>
      </vb-container>
    </div>

    <span id="breakpoint" class="title">Breakpoint containers:</span>
    <div class="field">
      <vb-container view="desktop">
        <vb-notification>
          This container is <strong>fullwidth</strong> <em> until</em> the <code>$desktop</code> breakpoint.
        </vb-notification>
      </vb-container>
    </div>

    <div class="field">
      <vb-container view="widescreen">
        <vb-notification>
          This container is <strong>fullwidth</strong> <em> until</em> the <code>$widescreen</code> breakpoint.
        </vb-notification>
      </vb-container>
    </div>

    <div class="field">
      <vb-container view="fullhd">
        <vb-notification>
          This container is <strong>fullwidth</strong> <em> until</em> the <code>$fullhd</code> breakpoint.
        </vb-notification>
      </vb-container>
    </div>
  </vb-container>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss">
#layouts {
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
  .title {
    margin-left: 1rem;
  }
}
</style>
