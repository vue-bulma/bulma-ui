<template>
  <vb-container id="level">
    <span id="basic" class="title">Basic:</span>
    <div class="field">
      <vb-level element="nav">
        <vb-level-item element="p">
          <vb-title type="subtitle" size="5">
            <strong>123</strong> posts
          </vb-title>
        </vb-level-item>

        <vb-level-item>
          <vb-form-item addons>
            <vb-input placeholder="Find a post"></vb-input>
            <vb-button>Search</vb-button>
          </vb-form-item>
        </vb-level-item>
      </vb-level>
    </div>

    <div class="field">
      <vb-container view="fluid">
        <vb-level element="nav">
          <vb-level-item slot="left">
            <vb-title type="subtitle" size="5">
              <strong>123</strong> posts
            </vb-title>
          </vb-level-item>

          <vb-level-item slot="left">
            <vb-form-item addons>
              <vb-input placeholder="Find a post"></vb-input>
              <vb-button>Search</vb-button>
            </vb-form-item>
          </vb-level-item>

          <vb-level-item element="p" slot="right">
            <strong>All</strong>
          </vb-level-item>
          <vb-level-item element="p" slot="right">
            <a>Published</a>
          </vb-level-item>
          <vb-level-item element="p" slot="right">
            <a>Drafts</a>
          </vb-level-item>
          <vb-level-item element="p" slot="right">
            <a>Deleted</a>
          </vb-level-item>
          <vb-level-item element="p" slot="right">
            <vb-button color="success">New</vb-button>
          </vb-level-item>
        </vb-level>
      </vb-container>
    </div>

    <span id="align" class="title">Text Align:</span>
    <div class="field">
      <vb-level>
        <vb-level-item>
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>

    <div class="field">
      <vb-level align="centered">
        <vb-level-item>
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>

    <div class="field">
      <vb-level>
        <vb-level-item align="right">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item align="right">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item align="right">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item align="right">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>

    <span id="mobile" class="title">Mobile:</span>
    <div class="field">
      <vb-level mobile align="centered">
        <vb-level-item>
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item>
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>
  </vb-container>
</template>

<script>
export default {
  name: 'Level'
}
</script>

<style lang="scss">
#level {
  width: 100%;
  position: absolute;
  left: 0;
  max-width: none;
  #basic,
  #align,
  #mobile {
    margin-left: 1rem;
  }
}
</style>
