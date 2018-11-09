<template>
	<div class="popular-course">
		<div class="container">
		  <div class="row my-5">
		    <div class="col-12">
		      <h1 class="font-weight-bold">Popular Course</h1>
		    </div>
			    <div class="col-12 p-0 justify-content-center">
			      	<carousel :per-page-custom="[[375, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
			        	<slide v-for="x in dataCourse">
			        		<router-link :to="{name:'course', params: {selected_course: x}}" class="text-dark">
					          <div class="card m-2">
					          	<div style="height: 200px; position: relative; overflow: hidden ">
						            <img class="card-img-top" v-bind:src="x.thumbnail" style="height:100%; position: absolute; left: 0; top: 50%; transform: translate(0, -50%); ">
					          	</div>
					            <div class="card-body">
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
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
import router from '../../router.js'

export default {
	name: 'popular-course',
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			urlcourse: 'http://192.168.2.225:3000/courses',
			dataCourse: null,
			
		}	 
	},
	mounted(){
		var self = this
		const headers = {
	      'x-access-token': localStorage.getItem('EClassToken'),
	      'Content-Type':'application/json',
	      'Accept': 'application/json',
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
	    }

	    axios.get(this.urlcourse, headers).then(res=>{
	    	if(res.status === 200){
	    		console.log("data adari topan",res.data.result)
	    		this.dataCourse = res.data.result
		    console.log("coba", this.dataCourse)
	    	}
	    })
	},
}
</script>
<style scoped>
	a:hover {
		text-decoration: none;
	}
</style>