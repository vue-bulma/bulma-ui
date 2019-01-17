<template>
  <nav role="navigation" aria-label="pagination" :class="classes">
    <a class="pagination-previous" :disabled="!hasPrevPage" @click="prePage">
      上一页
    </a>

    <a class="pagination-next" :disabled="!hasNextPage" @click="nextPage">
      下一页
    </a>

    <ul class="pagination-list">
      <li>
        <a
          class="pagination-link"
          aria-label="Goto page 1"
          :class="{ 'is-current': currentPage === 1 }"
          @click="goPage(1)"
        >
          1
        </a>
      </li>

      <li v-if="pagintaion.showPrevMore">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <li v-for="page in pagintaion.pages" :key="page">
        <a
          class="pagination-link"
          :class="{ 'is-current': currentPage === page }"
          :aria-label="`Goto page ${page}`"
          @click="goPage(page)"
        >
          {{page}}
        </a>
      </li>

      <li v-if="pagintaion.showNextMore">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <li v-if="pageCount > 1">
        <a
          class="pagination-link"
          :class="{ 'is-current': currentPage === pageCount }"
          :aria-label="`Goto page ${pageCount}`"
          @click="goPage(pageCount)"
        >
          {{pageCount}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import alignProps from '@/mixins/align'
import sizeProps from '@/mixins/size'

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
      default: 5
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
    pagintaion() {
      const { currentPage, pageCount, pagerCount } = this
      const showMore = pageCount > pagerCount

      const min = 2
      const max = pageCount - 1
      const offset = (pagerCount - 3) / 2
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
        pages,
        showPrevMore,
        showNextMore
      }
    }
  },
  methods: {
    goPage(index) {
      if (index !== this.currentPage) {
        this.setCurrent(index)
      }
    },
    prePage() {
      if (this.hasPrevPage) {
        this.setCurrent(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.hasNextPage) {
        this.setCurrent(this.currentPage + 1)
      }
    },
    setCurrent(page) {
      this.currentPage = page
      this.$emit('change', page)
      this.$emit('update:current', page)
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
