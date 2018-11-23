<template>
	<div class="listSelected">
		<div class="container p-0">
			<div class="row m-0">
		    <div class="p-3">
		        <h5 class="m-0 font-weight-bold">{{dataCategory.length}} Courses for {{$route.params.name}}</h5>
		    </div>
			  <div class="col-12 p-2" v-for="data in dataCategory">
	        <router-link class="text-dark" :to="{name:'course', path:'course/', params:{id:data.aid}}">
	       		<div class="media border p-2 d-inline-block d-md-flex bg-white">
	          	<div class="col-12 col-md-3 col-lg-3 p-0" id="tes">
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

	        <!-- <div class="d-flex justify-content-center col-lg-12 px-2 m-0">
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
			</div>
	  </div>
  </div>
</template>

<script>
	import App from '@/App.vue'
	import axios from 'axios'

	export default {
		data(){
			return{
				urlCourse: App.data().ListUrl.urlCourses,
				dataCategory: []
			}
		},
		mounted(){
			console.log(this.$route.params.id)
			this.getCategory(this.$route.params.id)
		},
		methods: {
			getCategory(dataCat){
				var self =this
				axios.get(this.urlCourse).then(res =>{
					res.data.result.map(data =>{
					data.categories.map(e=>{
						if(e == dataCat){
							self.dataCategory.push(data)
						}
						})
					})
				})
			}
		}
	}
</script>    

<style scoped>

	#img {
	  max-width: 200px;
	}
	a:hover{
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