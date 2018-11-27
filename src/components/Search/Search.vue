<template>
  <div class="search bg-light">
    <Pagination :searchresult="data" v-if="data.length>0"/>
    <div class="w-100 bg-light py-5" v-else>
      <div class="" v-if="!loading">
        <div class="jumbotron m-0 bg-light">
          <h1 class="display-4 bg">Hello Student</h1>
          <p class="lead">the word you entered does not match</p>
          <hr class="my-4">
          <div class="text-right">
            <router-link class="btn btn-primary rounded-0" to="/" role="button">Back</router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center py-5" v-if="loading">
        <div class="py-5">
          <h1 class="font-weight-bold py-5 my-5">Please Wait. . .</h1>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
    import axios from 'axios'
    import App from '../../App.vue'
    import Pagination from '../../views/PaginationSearch.vue'

  
  export default{
    name: 'search',
    components: {Pagination},
    data(){
      return {
        loading: false,
        data: null,
        dataKeyword: null,
        url: App.data().ListUrl.urlCourses,
        pageSize: 2,
        currentPage: 0,
      }
    },
    mounted() {

      this.$root.$on('search', (keyword) => {
        this.dataKeyword = keyword;
        this.get()
      })

      this.dataKeyword = this.$route.query.keyword;
      console.log("key", this.dataKeyword)
      this.get()

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
      },
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