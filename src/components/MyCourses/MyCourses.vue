
<!-- MY COURSES NGAMBIL DARI COMPONENT HOME MY COURSES -->

<!-- <template>
	<div class="my-course">
	    <div class="container">
	      <div class="row my-5">
	        <div class="col-12">
	          <h1 class="font-weight-bold">My Courses</h1>
	        </div>
	        <div class="col-12 p-0 py-5 d-flex">
	        	<div v-for="data in myCourse">
	        		<router-link :to="{name:'course', params:{id: data.aid}}">
	            <div class="card mr-2" style="width: 18rem;">
	            	<div class="poto">
								  <img class="card-img-top" v-bind:src="data.thumbnail">
	            	</div>
							  <div class="card-body text-dark">
							  	<div>
							  		<h5 class="card-title">{{data.title}}</h5>
							  	</div>
							    <p class="card-text">{{data.subtitle}}...</p>
							    <div class="view-counter mt-4">
	                  <div class="progress">
										  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
										</div>
	                </div>
							  </div>
							</div>
							</router-link>
	        	</div>
		        <div class="col-12 p-0 pb-5 mb-5" v-if="myCourse == 0">
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
	import App from '../../App.vue'
	import axios from 'axios'

	export default{
		name: 'mycourse',
		data(){
			return {
				url: App.data().ListUrl.urlUser,
				myCourse: []
				
			}
		},
		mounted(){
			this.getUser();
		
		},

		methods: {
			getUser(){
				
				var EclassId = localStorage.getItem('ECLASS-id');

				axios.get(this.url + EclassId).then(res=>{
					for (var i = 0; i < res.data.userData.my_course.length; i++) {
						this.myCourse.push(res.data.userData.my_course[i])
					}

					for (var i = 0; i < this.myCourse.length; i++) {
			    	if(this.myCourse[i].subtitle.length > 25){
			    		var x = this.myCourse[i].subtitle.slice(0, 23);
			    		this.myCourse[i].subtitle = x
			    	}
		    	}
				
				})
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
</style> -->