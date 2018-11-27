<template>
  <div class="wrapper">
  	<div class="container">
	  	<div class="row m-0">
				<div class="col-12">
				 <router-link class="text-dark" :to="{name:'course', path:'course/', params:{id:database.id}}">
	       		<div class="media border p-2 d-inline-block d-md-flex bg-white">
	          	<div class="col-12 col-md-3 col-lg-3 p-0" id="tes">
	            	<img class="m-0 w-100" v-bind:src="database.thumbnail">
	          	</div>
	          		<div class="media-body mb-2 mb-md-0 ml-md-2">
	            		<p class="m-0 pb-3 pb-lg-0">{{database.description}}</p>
	            	<div class="align-self-end text-right">
	              	<font-awesome-icon icon="eye" /><p class="d-inline-block m-0 ml-1">{{database.view_count}} views</p>
	            	</div>
	          	</div>
		        </div>
	        </router-link>
				</div>
	  	</div>
  	</div>
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
	  text-align: left;
	  margin-bottom: 10px;
	  margin-top: 20px;
	}

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