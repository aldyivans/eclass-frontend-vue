<template>
	<div class="search bg-light" v-if="dataSearch">
		<div class="container p-0" v-if="dataSearch.length > 0">
      <div class="row m-0 py-5" >
        <div class=" col-12 p-3">
            <h5 class="m-0 font-weight-bold">{{dataSearch.length}} Result For {{dataKeyword}} </h5>
        </div>
        
        <div class="col-12 col-lg-8 p-2" v-for="data in dataSearch">
          <router-link class="text-dark" :to="{name:'course', params:{id: data.aid}}">
          <div class="media border p-2 d-inline-block d-md-flex bg-white">
            <div class="col-12 col-md-3 col-lg-3 p-0">
              <img class="m-0 w-100" v-bind:src="data.thumbnail">
            </div>
            <div class="media-body mb-2 mb-md-0 ml-md-2">
              <p class="m-0 pb-3 pb-lg-0">{{data.description}}</p>
              <div class="align-self-end text-right">
                <font-awesome-icon icon="eye" /><p class="d-inline-block m-0 ml-1">{{data.view_count}} views</p>
              </div>
            </div>
          </div>
          </router-link>
        </div>
        
        <div class="d-flex justify-content-center col-lg-12 px-2 m-0">
          <nav aria-label="Page navigation example">
            <ul class="pagination py-5 m-0">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-light" v-else>
      <div class="container py-5">
        <div class="jumbotron m-0 bg-light">
          <h1 class="display-4 bg">Hallo, Student</h1>
          <p class="lead">Apa yang kamu cari tidak tersedia silahkan rubah keyword kamu </p>
          <hr class="my-4">
          <div class="text-right">
            <router-link class="btn btn-primary rounded-0" to="/" role="button">Back</router-link>
          </div>
        </div>
        
      </div>
    </div>
	</div>
</template>

<script>
  
  export default{
    name: 'search',
    data(){
      return {
        dataSearch: null,
        dataKeyword: null
      }
    },
    mounted() {
      this.dataSearch = this.$route.params.selected_search;
      console.log("data search dari home", this.dataSearch);

      this.dataKeyword = this.$route.params.selected_keyword;
      console.log("key", this.dataKeyword)
    }
  }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
</style>