let code = {}
code.basic = `
<template>
  <vb-navbar>
    <vb-navbar-item slot="brand">
      <a>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
      </a>
    </vb-navbar-item>

    <vb-navbar-item>
      <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
    </vb-navbar-item>
    <vb-navbar-item>Documentation</vb-navbar-item>

    <vb-navbar-dropdown>
      <template slot="title">More</template>

      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
      <hr class="navbar-divider">
      <vb-navbar-item>Contact</vb-navbar-item>
    </vb-navbar-dropdown>

    <template slot="right">
      <vb-navbar-item>
        <vb-buttons-list>
          <vb-button color="primary">Sign up</vb-button>
          <vb-button color="light">Log in</vb-button>
        </vb-buttons-list>
      </vb-navbar-item>
    </template>
  </vb-navbar>
</template>
`
code.TransparentNavbar = `
<template>
  <vb-navbar transparent>
    <vb-navbar-item slot="brand">
      <a>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
      </a>
    </vb-navbar-item>

    <vb-navbar-item>
      <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
    </vb-navbar-item>
    <vb-navbar-item>Documentation</vb-navbar-item>

    <vb-navbar-dropdown>
      <template slot="title">More</template>

      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
      <hr class="navbar-divider">
      <vb-navbar-item>Contact</vb-navbar-item>
    </vb-navbar-dropdown>

    <template slot="right">
      <vb-navbar-item>
        <vb-buttons-list>
          <vb-button color="primary">Sign up</vb-button>
          <vb-button color="light">Log in</vb-button>
        </vb-buttons-list>
      </vb-navbar-item>
    </template>
  </vb-navbar>
</template>
`
code.fixedNavbar = `
<template>
  <div slot="control">
    <vb-button-addons>
      <vb-button @click="togglePosition('top')">Show Fixed Top</vb-button>
      <vb-button @click="togglePosition('bottom')">Show Fixed Bottom</vb-button>
      <vb-button @click="togglePosition()">Hide</vb-button>
    </vb-button-addons>
  </div>

  <vb-navbar v-if="position" :position="position">
    <vb-navbar-item slot="brand">
      <a>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
      </a>
    </vb-navbar-item>

    <vb-navbar-item>
      <vb-icon name="fa fa-home" iconSize="lg"></vb-icon>
    </vb-navbar-item>
    <vb-navbar-item>Documentation</vb-navbar-item>

    <vb-navbar-dropdown>
      <template slot="title">More</template>
      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
    </vb-navbar-dropdown>

    <template slot="right">
      <vb-navbar-item>
        <vb-buttons-list>
          <vb-button color="primary">Sign up</vb-button>
          <vb-button color="light">Log in</vb-button>
        </vb-buttons-list>
      </vb-navbar-item>
    </template>
  </vb-navbar>
</template>

<script>
  export default {
    data() {
      return {
        position: null
      }
    },
    methods: {
      togglePosition(value) {
        this.position = value
      }
    }
  }
</script>
`
code.rightDropdown = `
<template>
  <vb-navbar>
    <vb-navbar-dropdown>
      <template slot="title">Left</template>
      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
    </vb-navbar-dropdown>

    <vb-navbar-dropdown dropup>
      <template slot="title">Up</template>
      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
    </vb-navbar-dropdown>

    <vb-navbar-dropdown arrow-less>
      <template slot="title">Dropdown without arrow</template>
      <vb-navbar-item>About</vb-navbar-item>
      <vb-navbar-item>Jobs</vb-navbar-item>
    </vb-navbar-dropdown>

    <template slot="right">
      <vb-navbar-dropdown>
        <template slot="title">Right</template>
        <vb-navbar-item>About</vb-navbar-item>
        <vb-navbar-item>Jobs</vb-navbar-item>
      </vb-navbar-dropdown>
    </template>
  </vb-navbar>
</template>
`
code.colors = `
<template>
  <vb-navbar color="primary">
    <vb-navbar-item slot="brand">
      <a>
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma">
      </a>
    </vb-navbar-item>
    <vb-navbar-item>Home</vb-navbar-item>
    <vb-navbar-dropdown title="More">
      <vb-navbar-item>About</vb-navbar-item>
    </vb-navbar-dropdown>
    <vb-navbar-item slot="right">
      <vb-button color="primary">Sign up</vb-button>
    </vb-navbar-item>
  </vb-navbar>
</template>
`
export default code
