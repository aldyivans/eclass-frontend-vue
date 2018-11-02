<template>
	<div class="new-course">
	    <div class="container">
	      <div class="row my-5">
	        <div class="col-12">
	          <h1 class="font-weight-bold">New Course</h1>
	        </div>
	        <div class="col-12 p-0 justify-content-center">
		        <carousel :per-page-custom="[[375, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
		        	<slide v-for="course in courseData">
			          <router-link :to="{name:'course', params: {selected_course: course}}" class="text-dark">
                  <div class="card m-2">
                    <div style="height: 200px; position: relative; overflow: hidden ">
                        <img class="card-img-top" v-bind:src="course.thumbnail" style="position: absolute; left: 0; top: 50%; transform: translate(0, -50%);">
                    </div>
                    <div class="card-body">
                        <div style="overflow: hidden">
                          <h5 class="card-title">{{ course.title | hideText }}</h5>
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
			courses: null,
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
	      		this.courseData.push(data.courseData)
	      	})
	        console.log('data course:', res.data.courseData)
	      }
	    })
	},
	computed: {
    hideText() {

    	this.courseData.map(datatext => {
    		var char = datatext.title,
    				limit = 20;

    		var trimmedString = char.substring(0, limit)

    		console.log("ted", trimmedString)
    	})
    }
	}
}
</script>