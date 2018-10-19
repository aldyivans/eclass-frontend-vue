<template>
	<div class="new-course">
	    <div class="container">
	      <div class="row my-5">
	        <div class="col-12">
	          <h1 class="font-weight-bold">New Course</h1>
	        </div>
	        <div class="col-12 p-0 justify-content-center">
		        <carousel :per-page-custom="[[375, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
		        	<slide v-for="course in courses">

				          <div class="card m-2">
				            <img class="card-img-top" v-bind:src="course.thumb" alt="Card image cap">
				            <div class="card-body">
				              <h5 class="card-title">{{ course.title }}</h5>
				              <p class="card-text">{{ course.desc }}</p>
				              <div class="view-counter mt-4 text-right">
				                <i class="fa fa-eye"></i>
				                <span>
				                	<font-awesome-icon icon="eye" />
				                	{{ course.view }} views
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

import { Carousel, Slide } from 'vue-carousel';

export default {
	name: 'new-course',
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			courses: [
				{
					thumb: require('@/assets/js.jpg'),
					title: 'JavaScript',
					desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
					view: 13
				},
				{
					thumb: require('@/assets/js.jpg'),
					title: 'JavaScript',
					desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
					view: 13
				},
				{
					thumb: require('@/assets/js.jpg'),
					title: 'JavaScript',
					desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
					view: 13
				},
				{
					thumb: require('@/assets/js.jpg'),
					title: 'JavaScript',
					desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
					view: 13
				},
				{
					thumb: require('@/assets/js.jpg'),
					title: 'JavaScript',
					desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
					view: 13
				}

			]
			
		}
	}
}
</script>