<template>
	<div class="top-topic bg-light">
		<div class="container">
		  <div class="row py-5">
		    <div class="col-12">
		      <h1 class="font-weight-bold">Top Topic</h1>
		    </div>
		    <div v-for="category in topic" class="col-12 col-sm-4 col-lg-2 p-0 justify-content-center">
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
	name: 'top-topic',
	data() {
		return {
			topic: [
				{
					name: 'HTML'
				},
				{
					name: 'CSS'
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
					name: 'Menyelam'
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