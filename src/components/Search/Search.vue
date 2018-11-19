<template>
	<div class="search bg-light">
		<div class="container p-0" v-if="data">
      <div class="row m-0 py-5"  v-if="data.length >0">
        <div class=" col-12 p-3">
            <h5 class="m-0 font-weight-bold">{{data.length}} Result for {{dataKeyword}}</h5>
        </div>
        
        <div class="col-12 col-lg-8 p-2" v-for="list in data">
          <router-link class="text-dark" :to="{name:'course' , params:{id:list.aid}}">
          <div class="media border p-2 d-inline-block d-md-flex bg-white">
            <div class="col-12 col-md-3 col-lg-3 p-0">
              <img class="m-0 w-100" v-bind:src="list.thumbnail">
            </div>
            <div class="media-body mb-2 mb-md-0 ml-md-2">
              <p class="m-0 pb-3 pb-lg-0">{{list.description}}</p>
              <div class="align-self-end text-right">
                <font-awesome-icon icon="eye" /><p class="d-inline-block m-0 ml-1">{{list.view_count}} views</p>
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
	</div>
</template>

<script>
    import axios from 'axios'
    import App from '../../App.vue'

  
  export default{
    name: 'search',
    data(){
      return {
        data: null,
        dataKeyword: null,
        url: App.data().ListUrl.urlCourses
      }
    },
    mounted() {

      this.dataKeyword = this.$route.params.selected_keyword;
      console.log("key", this.dataKeyword)
      this.get()

      this.$root.$on('search', (keyword) => {
        this.dataKeyword = keyword;
        this.get()
      })
    },
    methods: {
      get(){
        var arr =[]
        axios.get(this.url).then(res => {
          res.data.result.map(data=>{
            if(this.dataKeyword != ''){
              if(this.dataKeyword == data.title.toLowerCase() || data.title.toLowerCase().indexOf(this.dataKeyword)!== -1){
                arr.push(data)
              }
            }
          })
        })
        this.data = arr
        console.log("HASIL", this.data)
      },
    }
  }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
</style>