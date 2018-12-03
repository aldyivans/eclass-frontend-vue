<template>
	<div class="listSelected">
		<div class="container p-0">
			<div class="p-3">
				<h5 class="m-0 font-weight-bold">{{dataCategory.length}} Courses for {{$route.params.name}}</h5>
			</div>
			<Pagination :searchresult="dataCategory" v-if="dataCategory.length>0"/>
		</div>
	</div>
</template>

<script>
		// import App from '@/App.vue'
		// import axios from 'axios'
		import Pagination from '../../views/PaginationSearch.vue'
		import router from '../../router'


		export default{
			components: {
				Pagination
			},

			data(){
				return{
					dataCategory: [],
					dataID: null
				}
			},
			mounted(){
				this.dataID = this.$route.params.id;
				this.getCategory();

				this.$root.$on('categorySelected', (category) => {
					console.log('someone emited "selected" !', category.aid);
						
					this.dataID = category.aid;

					this.dataCategory = [];
					this.getCategory();
				});
			},
			methods: {
				getCategory(){
					var courses = router.app.courses;
					var result = [];

					courses.map( data => {
						data.categories.map(e => {
							if(e == this.dataID) {
								result.push(data)
							}	
						});
					});

					this.dataCategory = result;
					console.log('data kategori baru: ',this.dataCategory)
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