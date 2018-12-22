<template>
  <nav class="panel">
  <p class="panel-heading">
    repositories
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fa fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">all</a>
    <a>public</a>
    <a>private</a>
    <a>sources</a>
    <a>forks</a>
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fa fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fa fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fa fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fa fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fa fa-code-branch" aria-hidden="true"></i>
    </span>
    daniellowtw/infboard
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fa fa-code-branch" aria-hidden="true"></i>
    </span>
    mojs
  </a>
  <label class="panel-block">
    <input type="checkbox">
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
</nav>
</template>

<script>
export default {
  name: 'VbPanel'
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/panel.sass';
</style>
