<template>
  <div class="wrapper">
  	<div class="container">
	  	<div class="row m-0">
		  	<router-link class="text-dark" :to="{name:'course',path:'course/', params:{id: database.id}}">
		    	<div class="col-12 col-lg-10 p-2">
		        <div class="media border p-2 d-inline-block d-md-flex">
		        	<div class="col-12 col-md-3  col-lg-2 p-0">
								<img class="m-0 w-100" v-bind:src="database.thumbnail">
		        	</div>
						  <div class="media-body mb-2 mb-md-0 ml-md-3">
						    <p class="m-0 pb-3 pb-lg-0">{{database.description}}</p>
							  <div class="align-self-end text-right">
								  <font-awesome-icon icon="eye" /><p class="d-inline-block m-0 ml-1">{{database.view_count}} views</p>
							  </div>
						  </div>
						</div>
		    	</div>
				</router-link>
	  	</div>
  	</div>
    <!-- {{database.title}} -->
  </div>
</template>

<script>
	export default {
	  name: 'item',
	  props: ['database']
	}

</script>

<style scoped>
	.wrapper {
	  border-bottom: 1px solid #efefef;
	  text-align: left;
	  margin-bottom: 10px;
	  margin-top: 20px;
	}
</style>