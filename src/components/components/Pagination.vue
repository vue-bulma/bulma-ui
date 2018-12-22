<template>
<nav :class="classes" role="navigation" aria-label="pagination">
  <button class="pagination-previous" @click="prePage" :disabled="!hasPrevPage">上一页</button>
  <button class="pagination-next" @click="nextPage" :disabled="!hasNextPage">下一页</button>

  <ul class="pagination-list">
    <li>
      <a class="pagination-link" aria-label="Goto page 1" :class="{ 'is-current': currentPage === 1 }" @click="goPage(1)">1</a>
    </li>

    <li v-if="pages.showPrevMore">
      <span class="pagination-ellipsis">&hellip;</span>
    </li>

    <li v-for="page in pages.ret" :key="page">
      <a class="pagination-link" :class="{ 'is-current': currentPage === page }" :aria-label="`Goto page ${page}`" @click="goPage(page)">
        {{page}}
      </a>
    </li>

    <li v-if="pages.showNextMore">
      <span class="pagination-ellipsis">&hellip;</span>
    </li>

    <li v-if="pageCount > 1">
      <a class="pagination-link" :class="{ 'is-current': currentPage === pageCount }" :aria-label="`Goto page ${pageCount}`" @click="goPage(pageCount)">
        {{pageCount}}
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
import alignProps from '../../mixins/align'
import sizeProps from '../../mixins/size'

export default {
  name: 'VbPagination',
  mixins: [alignProps, sizeProps],
  props: {
    current: {
      type: Number,
      default: 1
    },
    pageCount: {
      type: Number,
      default: 1
    },
    // Items count in prevMore and nextMore
    pagerCount: {
      type: Number,
      default: 3
    },
    rounded: Boolean
  },
  data() {
    return {
      currentPage: this.current
    }
  },
  computed: {
    classes() {
      const { align, rounded, size } = this
      return {
        pagination: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        'is-rounded': rounded
      }
    },
    hasPrevPage() {
      return this.currentPage > 1
    },
    hasNextPage() {
      const { currentPage, pageCount } = this
      return currentPage < pageCount && currentPage > 0
    },
    pages() {
      const { currentPage, pageCount, pagerCount } = this
      const showMore = pageCount > pagerCount

      const min = 2
      const max = pageCount - 1
      const offset = (pagerCount - 1) / 2
      const start = currentPage - offset
      const end = currentPage + offset

      const showPrevMore = showMore && start > min
      const showNextMore = showMore && end < max

      let pages = []
      const startPage = showPrevMore ? start : min
      const endPage = showNextMore ? end : max

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      return {
        ret: pages,
        showPrevMore,
        showNextMore
      }
    }
  },
  methods: {
    goPage(index) {
      if (index !== this.currentPage) {
        this.currentPage = index
        this.$emit('change', index)
      }
    },
    prePage() {
      this.currentPage--
      this.$emit('change', this.currentPage)
    },
    nextPage() {
      this.currentPage++
      this.$emit('change', this.currentPage)
    }
  },
  watch: {
    current(newVal) {
      this.currentPage = newVal
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/pagination.sass';
</style>
