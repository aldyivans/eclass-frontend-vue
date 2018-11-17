<template>
	<div class="top-categories bg-light">
		<div class="container">
		  <div class="row py-5">
		    <div class="col-12">
		      <h1 class="font-weight-bold">Top Categories</h1>
		    </div>
		    <div v-for="category in dataCategory" class="col-12 col-sm-4 col-lg-2 p-0 justify-content-center">
		      <div class="col-course p-2">
		          <p class="m-0">{{ category.name }}</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
import App from '../../App.vue'
import axios from 'axios'

export default {
	name: 'top-categories',
	data() {
		return {
			url: App.data().ListUrl.urlCategory,
			dataCategory: null
		}
	},
	mounted() {
		axios.get(this.url).then(res=>{
			this.dataCategory = res.data.result
			console.log("[HEROKU CATEGORIES]", this.dataCategory)
		})
	}
}
</script>
