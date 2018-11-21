<template>
	<div class="SelectCategory bg-light">
		<div id="banner" class="p-0 ">
			<div class="container">
	      <div class="py-3">
	        <div class=" col-12 col-lg-6 p-0">
	          <h2 class="font-weight-bold p-0">{{$route.params.name}}</h2>
	          <p class="p-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
	        </div>
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
			this.sortir(this.$route.params.id)
		},
		methods: {
			sortir(datacat){
				var self =this
				axios.get(this.urlCourse).then(res =>{
					res.data.result.map(data =>{
					data.categories.map(e=>{
						if(e == datacat){
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
	#banner {
  color: #fff;
  height: auto;
  background-image: linear-gradient(-90deg, #27d4fe ,#6678ff );
	}

</style>
