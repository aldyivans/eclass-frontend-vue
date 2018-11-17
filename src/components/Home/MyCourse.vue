<template>
	<div class="my-course" v-if="myCourse">
	    <div class="container">
	      <div class="row my-5">
	        <div class="col-12">
	          <h1 class="font-weight-bold">My Courses</h1>
	        </div>
	        <div class="col-12 p-0 justify-content-center">

		        <carousel :per-page-custom="[[375, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
		        	
		        	<slide v-for="course in myCourse">
		        			<router-link :to="{name:'course', params:{id: course.aid}}">
		                <div class="card m-2">
		                  <div class="poto">
		                      <img class="card-img-top" v-bind:src="course.thumbnail">
		                  </div>
		                  <div class="card-body text-dark">
		                      <div style="overflow: hidden">
		                        <h5 class="card-title">{{ course.title}}</h5>
		                      </div>
		                    <p class="card-text">{{ course.subtitle }}</p>
		                    <div class="view-counter mt-4 text-right">
		                      <i class="fa fa-eye"></i>
		                      <span>
		                          <font-awesome-icon icon="eye" />
		                          {{ course.view_count }} views
		                      </span>
		                    </div>
		                  </div>
		                </div>
		              </router-link>
		        	</slide>
		        </carousel>
	          <div v-if="myCourse.length == 0">
	          	<div class="text-center p-5">
		          	<h3>Anda Belum Join Course</h3>
	          	</div>
	          </div>
				</div>
	    </div>
	  </div>
	</div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import App from '../../App.vue'
import axios from 'axios'

export default {
	name: 'my-course',
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			url: App.data().ListUrl.urlUser,
			myCourse: null
			
		}
	},
	mounted(){
		var EclassId = localStorage.getItem('ECLASS-id');

		axios.get(this.url + EclassId).then(res=>{
			this.myCourse = res.data.userData.my_course
			console.log("[MY COURSE]", this.myCourse)
			
		})
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
		height: auto;
		width: auto;
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