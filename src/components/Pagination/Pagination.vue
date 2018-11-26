<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper my-3 text-center justify-content-center d-flex">
    <div class="d-inline-flex align-items-center">
      <span v-if="showPreviousLink()" class="btn btn-white rounded-0 pagination-btn border-0" v-on:click="updatePage(currentPage - 1)"> &#xab; </span>
      <span v-else class="btn disabled rounded-0 pagination-btn border-0"> &#xab; </span>

      <span class="mx-2">
        {{ currentPage | paging}} of {{ totalPages() }}
      </span>

      <span v-if="showNextLink()" class="btn btn-white rounded-0 pagination-btn border-0" v-on:click="updatePage(currentPage + 1)"> &#xbb; </span>
      <span v-else class="btn disabled rounded-0 pagination-btn border-0"> &#xbb; </span>
    </div>
    
    <div class="d-inline-flex justify-content-center">
      <input class="ml-3 pl-1 w-50" id="inputNumPage" type="number" value="numPage" v-model="inputedPage" min="1">
      <button class="btn btn-dark btn-sm rounded-0" v-on:click="gotoPage()">Go!</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    props: ['datas', 'currentPage', 'pageSize'],
    data() {
      return {
        inputedPage: 0
      }
    },
    methods: {
      updatePage(pageNumber) {
        this.$emit('page:update', pageNumber);
      },
      totalPages() {
        return Math.ceil(this.datas.length / this.pageSize);
      },
      showPreviousLink() {
        return this.currentPage == 0 ? false : true;
      },
      showNextLink() {
        return this.currentPage == (this.totalPages() - 1) ? false : true;
      },
      gotoPage() {
        if(this.inputedPage>0){
          this.$emit('page:update', this.inputedPage - 1);
          this.inputedPage = 1;
        }else{
          this.inputedPage = 1;OA
        }
      }
    },
    filters: {
      paging(val){
        return parseInt(val) + 1;
      }
    }
  }
</script>

<style scoped>
  .pagination-btn {
    padding: 3px;
    cursor: pointer;
    user-select: none;
  }
  .pagination-btn:active {
    transform: scale(0.95);
  }
  
</style>
