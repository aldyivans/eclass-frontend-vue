<template>
		<div class="top-topic bg-light">
				<div class="container">
					<div class="row py-5">
						<div class="col-12">
							<h1 class="font-weight-bold">Top Topic</h1>
						</div>
						<div class="col-12 col-sm-4 col-lg-2 p-0 justify-content-center" v-for="(data, i) in dataTopic" :key="i">
							<div class="col-course p-2">
									<p class="m-0">{{data}}</p>
							</div>
						</div>
					</div>
				</div>
		</div>
</template>

<script>

// import App from '../../App.vue'
// import axios from 'axios'
import router from '../../router'

export default {
	name: 'top-topic',
	data() {
			return {
					dataTopic: [],
					dataEmit: null
			}
	},
	mounted(){
		this.$root.$on('categorySelected', (category) => {
			this.dataEmit = category.name;
			console.log("DATA EMIT TOP TOPIC", this.dataEmit)
			this.getTopic()
		})
		
		this.dataEmit = this.$route.params.name
		this.getTopic()
	},

	methods: {
		getTopic(){
			var category = router.app.category

			this.filterTopic(category)
		},
		filterTopic(category){
			this.dataTopic = [];

			category.map(data => {
				if(data.name == this.dataEmit){
					data.subs.map(e => {
						e.topics.map(i => {
							this.dataTopic.push(i)
						})
					})	
				}
			})
		}
	}
}
</script>

<style>
</style>