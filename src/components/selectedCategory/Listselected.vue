<template>
	<div class="listSelected">
		<div class="container">
			<div class="row">
				<div class="col-12" v-if="$route.name == 'selected'">
					<h5 class="m-0 font-weight-bold">{{dataCategory.length}} Courses for {{$route.params.name}}</h5>
				</div>
				<Pagination :searchresult="dataCategory" v-if="dataCategory.length > 0"/>

				<div v-if="$route.name == 'selected-subcategory'">
					<div class="col-12">
						<h5 class="m-0 font-weight-bold">{{dataSub.length}} Courses for {{$route.params.name}}</h5>
					</div>
					<Pagination :searchresult="dataSub" v-if="dataSub.length > 0"/>
				</div>

				<div v-if="$route.name == 'selected-topic'">
					<div class="col-12">
						<h5 class="m-0 font-weight-bold"> {{dataTopic.length}} Courses for {{$route.params.name}}</h5>
					</div>
					<Pagination :searchresult="dataTopic" v-if="dataTopic.length > 0"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import Pagination from '../../views/PaginationSearch.vue'
	import router from '../../router'

	export default{
		components: {
			Pagination
		},

		data(){
			return{
				dataCategory: [],
				dataID: null,

				dataSubName: null,
				dataSub: [],

				dataTopicName: null,
				dataTopic: []

			}
		},
		mounted(){

			// data dari top topic
			this.dataTopicName = this.$route.params.name
			this.getTopic()
			if(this.$route.name == 'selected-topic'){
				this.$root.$on('topicSelected', (topic) =>{
					this.dataTopicName = topic
					this.dataTopic = [];
					this.getTopic();
				})
			}

			// data dari sub catgory
			this.dataSubName = this.$route.params.name
			this.getCategorySubcategory()
			if(this.$route.name == 'selected-subcategory'){
				this.$root.$on('subCategorySelected', (subcategory) => {
					this.dataSubName = subcategory.name
					this.dataSub = []
					this.getCategorySubcategory()
				})
			}

			// data dari category
			this.dataID = this.$route.params.id;
			this.getCategory();

			this.$root.$on('categorySelected', (category) => {
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
						if(e.id_category == this.dataID) {
							result.push(data)
						}	
					});
				});

				this.dataCategory = result;
			},
			getCategorySubcategory(){
				var courses = router.app.courses;
				var result = [];

				courses.map(data => {
					data.categories.map(e => {
						e.sub_category.map(a =>{
							a.name_sub.map(b =>{
								if(b == this.dataSubName){
									result.push(data)
								}
							});
						});
					});
				});
				this.dataSub = result
			},

			getTopic(){
				var courses = router.app.courses;
				var result = [];

				courses.map(data => {
					data.categories.map(e => {
						e.sub_category.map(a =>{
							a.topic.map(b =>{
								b.name_topic.map(c => {
									if(c == this.dataTopicName){
										result.push(data)
									}
								})
							});
						});
					});
				});
				this.dataTopic = result;
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