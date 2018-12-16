
<template>
	<div class="new-course">
		<div class="container">
			<div class="row my-5">
				<div class="col-12">
					<h1 class="font-weight-bold">New Courses</h1>
				</div>
				<div class="col-12 p-0 justify-content-center">
					<div class="px-5 py-0 px-sm-0" v-if="dataFix.length > 0">
						<carousel :per-page-custom="[[320, 1],[480, 2], [768, 3], [1440, 4]]" :paginationEnabled="false" :navigationEnabled="true" navigationNextLabel="<h1>&#8250;</h1>" navigationPrevLabel="<h1>&#8249;</h1>">
							<slide v-for="course in dataFix" :key="course.aid">

								<router-link :to="{name:'course', path:'course/', params:{id: course.aid}}">
									<div class="card m-2">
										<div class="poto">
											<img class="card-img-top" v-bind:src="course.thumbnail">
										</div>
										<div class="card-body text-dark">
											<div style="overflow: hidden">
												<h5 class="card-title">{{ course.title}}</h5>
											</div>
											<p class="card-text">{{ course.subtitle }}...</p>
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
	</div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import router from '../../router'


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
				dataFix: [],
			}
		},
		mounted() {
			this.getData();

			for (var i = 0; i < this.dataFix.length; i++) {

				if(this.dataFix[i].subtitle.length > 25){
					var x = this.dataFix[i].subtitle.slice(0, 19);
					this.dataFix[i].subtitle = x
				}
			}
		},
		methods: {
			getData(){
				var route = router.app.courses
				this.courses = route

				for (var i = 0; i < this.courses.length; i++) {
					if(i < 10){
						this.dataFix.push(this.courses[i])
					}
				}
				this.sortCourses();
			},
			sortCourses(){
				this.dataFix.sort(function(a,b){
					return new Date(b.created_at._seconds) - new Date(a.created_at._seconds);
				});
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