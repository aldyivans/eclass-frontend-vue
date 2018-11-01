<template>
	<div class="new-course">
	    <div class="container">
	      <div class="row my-5">
	        <div class="col-12">
	          <h1 class="font-weight-bold">New Course</h1>
	        </div>
	        <div class="col-12 p-0 justify-content-center">
		        <carousel :per-page-custom="[[375, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
		        	<slide v-for="(course, index) in courseData">
			          <div class="card m-2">
			            <img class="card-img-top" alt="Card image cap" v-bind:alt="course">
			            <div class="card-body">
			              <h5 class="card-title">{{ course[index] }}</h5>
			              <p class="card-text">{{ course[index] }}</p>
			              <div class="view-counter mt-4 text-right">
			                <i class="fa fa-eye"></i>
			                <span>
			                	<font-awesome-icon icon="eye" />
			                	{{ course[index] }} views
			                </span>
			              </div>
			            </div>
			          </div>
		        	</slide>
		        </carousel>
			</div>
	    </div>
	  </div>
	</div>
</template>

<script>

import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel';

export default {
	name: 'new-course',
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			courses: [],
			courseData: [],
			courseUrl: 'http://192.168.2.231:3000/v2/courses/'
			
		}

	},
	mounted() {
	
	    var courseId = "H3RAI8dHUMYSkvCmIPGa"
	    
	    const headers = {
	      'x-access-token': localStorage.getItem('EClassToken'),
	      'Content-Type':'application/json',
	      'Accept': 'application/json',
	      'Access-Control-Allow-Origin': '*',
	      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
	    }

	    axios.get(this.courseUrl, headers).then(res => {
	      if(res.status === 200) {
	      	this.courses = res.data.courseData;
	      	this.courses.map(data => {
	      		this.courseData = data
	      		console.log('ini data nya',this.courseData)
	      	})
	        console.log('data course:', res.data.courseData)
	      }
	    })
	}
}
</script>