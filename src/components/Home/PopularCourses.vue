<template>
	<div class="popular-course">
		<div class="container">
		  <div class="row my-5">
		    <div class="col-12">
		      <h1 class="font-weight-bold">Popular Courses</h1>
		    </div>
		    <div class="col-12 p-0 justify-content-center">
		    	<div class="px-5 py-0 px-sm-0">
		      	<carousel :per-page-custom="[[320, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
		        	<slide v-for="x in dataSort">

		        		<router-link :to="{name:'course', path:'course/', params:{id: x.aid}}">
				          <div class="card m-2">
				          	<div class="poto">
					            <img class="card-img-top" v-bind:src="x.thumbnail" >
				          	</div>
				            <div class="card-body text-dark">
				            	<div>
					              <h5 class="card-title">{{ x.title }}</h5>
				            	</div>
				              <p class="card-text">{{ x.subtitle }}</p>
				              <div class="view-counter mt-4 text-right">
				                <i class="fa fa-eye"></i>
				                <span>
				                	<font-awesome-icon icon="eye" />
				                	{{ x.view_count }} views
				                </span>
				              </div>
				            </div>
				          </div>
				        </router-link>

		        	</slide>
		        </carousel>
		    	</div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
import router from '../../router.js'
import App from '../../App.vue'

export default {
	name: 'popular-course',
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			url: App.data().ListUrl.urlCourses,
			dataCourse: null,
			dataSort : [],
			dataSortResult : []
		}	 
	},
	mounted(){
	    axios.get(this.url).then(res=>{
	    	if(res.status === 200){
	    		console.log("[HEROKU POPULAR COURSES]:",res.data.result)
	    		this.dataCourse = res.data.result
	    		this.sortData(this.dataCourse);
	    	}
	    })
	},
	methods: {
		sortData(e){
			var self = this;
			e.map(data=>{
				console.log(data.view_count)
				self.dataSort.push(data)
			})
			self.dataSort.sort(function(a,b){
				return b.view_count - a.view_count
			})
			console.log("SORT", self.dataSort)
		}
	}
}
</script>
<style scoped>
	.poto{
		height: 200px;
		position: relative;
		overflow: hidden;	
	}
	.poto img{
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	a:hover {
		text-decoration: none;
	}
</style>