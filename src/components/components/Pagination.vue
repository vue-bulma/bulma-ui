<template>
  <nav
    :class="classes"
    role="navigation"
    aria-label="pagination"
  >
    <button
      class="pagination-previous"
      @click.stop.prevent="prePage"
      :disabled="this.currentPage === 1"
    >上一页</button>
    <button
      class="pagination-next"
      @click.stop.prevent="nextPage"
      :disabled="this.pageCount === this.currentPage || this.pageCount ===0"
    >下一页</button>
    <ul class="pagination-list">
      <li>
        <a
          v-if="pageCount !== 1"
          class="pagination-link"
          :class="{'is-current':currentPage===(1||0)}"
          aria-label="Goto page 1"
          @click.stop.prevent="goPage(1)"
        >1</a>
      </li>
      <li>
        <span
          v-if="pages.preClipped"
          class="pagination-ellipsis"
          @click.stop.prevent="pagerCountOffset('left')"
        >&hellip;</span>
      </li>

      <li>
        <a
          v-for="(page,index) in pages.ret"
          :key="index"
          class="pagination-link"
          :class="{'is-current':currentPage===page}"
          :aria-label="'Goto page'+ index"
          @click.stop.prevent="goPage(page)"
        >{{page}}</a>
      </li>
      <li>
        <span
          v-if="pages.nextClipped"
          class="pagination-ellipsis"
          @click.stop.prevent="pagerCountOffset('right')"
        >&hellip;</span>
      </li>
      <li>
        <a
          v-if="pageCount!=0"
          class="pagination-link"
          :class="{'is-current':currentPage===pageCount}"
          aria-label="Goto page 86"
          @click.stop.prevent="goPage(pageCount)"
        >{{pageCount}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
const ALIGNS = ['centered', 'right']
const SIZE = ['small', 'medium', 'large']
export default {
  name: 'VbPagination',
  props: {
    pageCount: {
      type: Number,
      default: 1
    },
    align: {
      type: String,
      validator(value) {
        return ALIGNS.includes(value)
      }
    },
    size: {
      type: String,
      validator(value) {
        return SIZE.includes(value)
      }
    },
    rounded: Boolean
  },
  data() {
    return {
      // 当前页
      currentPage: 1
    }
  },
  computed: {
    classes() {
      const { align, rounded, size } = this
      const obj = {
        pagination: true,
        [`is-${align}`]: !!align,
        [`is-${size}`]: !!size,
        'is-rounded': rounded
      }
      return obj
    },

    disabled() {
      if (this.pageCount <= 1) {
        return true
      } else {
        return false
      }
    },
    // 使用计算属性来得到每次应该显示的页码
    pages() {
      let getPages = { ret: [], nextClipped: true, preClipped: false }
      if (this.currentPage > 3) {
        // 当前页码大于三时，显示当前页码的前2个
        // ret.push(this.currentPage - 2)
        getPages.ret.push(this.currentPage - 1)
        if (this.currentPage > 2) {
          // 当前页与第一页差距4以上时显示省略号
          getPages.preClipped = true
        }
      } else {
        getPages.preClipped = false
        for (let i = 2; i < this.currentPage; i++) {
          getPages.ret.push(i)
        }
      }
      if (this.currentPage !== this.pageCount && this.currentPage !== 1) {
        getPages.ret.push(this.currentPage)
      }
      if (this.currentPage < this.pageCount - 2) {
        // 显示当前页码的后2个
        getPages.ret.push(this.currentPage + 1)
        // ret.push(this.currentPage + 2)
        if (this.currentPage <= this.pageCount - 3) {
          //  当前页与最后一页差距3以上时显示省略号
          getPages.nextClipped = true
        }
      } else {
        getPages.nextClipped = false
        for (let i = this.currentPage + 1; i < this.pageCount; i++) {
          getPages.ret.push(i)
        }
      }
      // 返回整个页码组
      return getPages
    }
  },
  methods: {
    goPage(index) {
      // 跳转到相应页面
      if (index !== this.currentPage) {
        this.currentPage = index
        this.$emit('topage', this.currentPage)
      }
    },
    prePage() {
      // 上一页
      this.currentPage--
      this.$emit('topage', this.currentPage)
    },
    nextPage() {
      // 下一页
      this.currentPage++
      this.$emit('topage', this.currentPage)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/components/pagination.sass';
</style>
