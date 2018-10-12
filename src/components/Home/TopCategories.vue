<template>
	<div class="top-categories bg-light">
		<div class="container">
		  <div class="row py-5">
		    <div class="col-12">
		      <h1 class="font-weight-bold">Top Categories</h1>
		    </div>
		    <div v-for="category in categories" class="col-12 col-sm-4 col-lg-2 p-0 justify-content-center">
		      <div class="col-course p-2">
		          <p class="m-0">{{ category.name }}</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'top-categories',
	data() {
		return {
			categories: [
				{
					name: 'Development'
				},
				{
					name: 'Design'
				},
				{
					name: 'Music'
				},
				{
					name: 'Video'
				},
				{
					name: 'Animation'
				},
				{
					name: 'Business'
				},
				{
					name: 'Development'
				},
				{
					name: 'Design'
				},
				{
					name: 'Music'
				},
				{
					name: 'Video'
				},
				{
					name: 'Animation'
				},
				{
					name: 'Business'
				}
			]
		}
	}
}
</script>

<style>
</style>