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
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>

    <div class="field">
      <vb-container view="fluid">
        <vb-level element="nav">
          <div slot="left">
            <vb-level-item>
              <vb-title type="subtitle" size="5">
                <strong>123</strong> posts
              </vb-title>
            </vb-level-item>

            <vb-level-item>
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Find a post">
                </p>
                <p class="control">
                  <button class="button">
                    Search
                  </button>
                </p>
              </div>
            </vb-level-item>
          </div>

          <div slot="right">
            <vb-level-item element="p">
              <strong>All</strong>
            </vb-level-item>

            <vb-level-item element="p">
              <a>Published</a>
            </vb-level-item>

            <vb-level-item element="p">
              <a>Drafts</a>
            </vb-level-item>

            <vb-level-item element="p">
              <a>Deleted</a>
            </vb-level-item>

            <vb-level-item element="p">
              <a class="button is-success">New</a>
            </vb-level-item>
          </div>
        </vb-level>
      </vb-container>
    </div>

    <span id="align" class="title">Align:</span>
    <div class="field">
      <vb-level>
        <vb-level-item align="centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </vb-level-item>
      </vb-level>
    </div>

    <span id="mobile" class="title">Mobile:</span>
    <div class="field">
      <vb-level mobile>
        <vb-level-item align="centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </vb-level-item>

        <vb-level-item align="centered">
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
  .title {
    margin-left: 1rem;
  }
}
</style>
