<template>
  <vb-section>
    <example-section-item title="Basic">
      <demo>
        <vb-container>
          <vb-notification>
            This container is <strong>centered</strong> on desktop.
          </vb-notification>
        </vb-container>
      </demo>
    </example-section-item>

    <example-section-item title="Fluid">
      <demo>
        <vb-container view="fluid">
          <vb-notification>
            This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
          </vb-notification>
        </vb-container>
      </demo>
    </example-section-item>

    <example-section-item title="Breakpoint containers">
      <demo>
        <vb-container view="desktop">
          <vb-notification>
            This container is <strong>fullwidth</strong> <em> until</em> the <code>$desktop</code> breakpoint.
          </vb-notification>
        </vb-container>
      </demo>

      <demo>
        <vb-container view="widescreen">
          <vb-notification>
            This container is <strong>fullwidth</strong> <em> until</em> the <code>$widescreen</code> breakpoint.
          </vb-notification>
        </vb-container>
      </demo>

      <demo>
        <vb-container view="fullhd">
          <vb-notification>
            This container is <strong>fullwidth</strong> <em> until</em> the <code>$fullhd</code> breakpoint.
          </vb-notification>
        </vb-container>
      </demo>
    </example-section-item>
  </vb-section>
</template>

<script>
export default {
  name: 'Container'
}
</script>
