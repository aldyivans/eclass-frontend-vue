<template>
	<div class="search bg-light">
		<div class="container p-0" v-if="data">
      <div class="row m-0 py-5"  v-if="data.length >0">
        <div class=" col-12 p-3">
            <h5 class="m-0 font-weight-bold">{{data.length}} Result for {{dataKeyword}}</h5>
        </div>
        
        <div class="col-12 p-2" 
          v-for="list in data">
          <router-link class="text-dark" :to="{name:'course', path:'course/', params:{id:list.aid}}">
          <div class="media border p-2 d-inline-block d-md-flex bg-white">
            <div class="col-12 col-md-3 col-lg-3 p-0" id="tes">
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
<!--         <div class="d-flex justify-content-center col-lg-12 px-2 m-0">
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
        </div> -->
      </div>
      <div v-if="loading">
        <h1 class="font-weight-bold">Waith. . .</h1>
      </div>
      <div class="bg-light" v-else>
        <div class="container py-5">
          <div class="jumbotron m-0 bg-light">
            <h1 class="display-4 bg">Hello Student</h1>
            <p class="lead">the word you entered does not match</p>
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
        loading: false,
        data: null,
        dataKeyword: null,
        url: App.data().ListUrl.urlCourses,
        pageSize: 2,
        currentPage: 0,
        visibleCourses: [],
        // dataDummy: [
        //   {id: 1},
        //   {id: 2},
        //   {id: 3},
        //   {id: 4},
        //   {id: 5},
        //   {id: 6},
        //   {id: 7},
        //   {id: 8},
        //   {id: 9},
        //   {id: 10},
        //   {id: 11},
        // ]
      }
    },
    mounted() {

      this.$root.$on('search', (keyword) => {
        this.dataKeyword = keyword;
        this.get()
        this.updateVisibleCourses()
      })

      this.dataKeyword = this.$route.query.keyword;
      console.log("key", this.dataKeyword)
      this.get()
      this.updateVisibleCourses()

    },
    methods: {
      get(){
        this.loading = true;
        var arr = []

        axios.get(this.url).then(res => {
          res.data.result.map(data => {
            if(this.dataKeyword != ''){
              if(this.dataKeyword == data.title.toLowerCase() || data.title.toLowerCase().indexOf(this.dataKeyword)!== -1){
                arr.push(data)
              }
            }
            this.loading = false;
          })
        })

        this.data = arr;

        console.log('ini data hasil bro',this.data)
        // this.updateVisibleCourses();
      },
      // updatePage(pageNumber) {
      //   this.currentPage = pageNumber;
      //   this.updateVisibleCourses();
      // },
      updateVisibleCourses() {
        // this.visibleCourses;

        console.log('visible',this.visibleCourses)
      }
    }
  }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
  #tes {
    position: relative;
  overflow: hidden;
  height: 130px;
  }
  #tes img {
    height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
</style>