<template>
	<div class="hero">
	  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	    <ol class="carousel-indicators">
	      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	    </ol>
	    <div class="carousel-inner">
			<div class="carousel-item active">
				<img class="d-block w-100" v-bind:src="carousels[0].src" alt="First slide" />
				<div class="hero-caption text-center d-none d-lg-block">
				  <h1 class="font-weight-bold">{{ carousels[0].quote }}</h1>
				</div>
			</div>
			<div v-for="(carousel, i) in carousels" class="carousel-item" v-if="i !== 0">
				<img class="d-block w-100" v-bind:src="carousel.src" alt="First slide" />
				<div class="hero-caption text-center d-none d-lg-block">
				  <h1 class="font-weight-bold">{{ carousel.quote }}</h1>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			  <span class="carousel-control-next-icon" aria-hidden="true"></span>
			  <span class="sr-only">Next</span>
			</a>
	      </div>
	  </div>
	</div>
</template>

<script>

export default {
	data() {
	  	return {
	  		carousels: [
		  		{
		  			src: require('@/assets/hero.jpeg'),
			  		quote: 'TAKING CLASSES AND BECOME A PERSON WHO KNOWS EVERYTHING 1'
		  		},
		  		{
		  			src: require('@/assets/hero.jpeg'),
			  		quote: 'TAKING CLASSES AND BECOME A PERSON WHO KNOWS EVERYTHING 2'
		  		},
		  		{
		  			src: require('@/assets/hero.jpeg'),
			  		quote: 'TAKING CLASSES AND BECOME A PERSON WHO KNOWS EVERYTHING 3'
		  		}
	  		]

	  	}
	}
}
</script>

<style scoped>
	
.hero-caption {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.hero-caption h1 {
	color: #fff;
	text-shadow: 0 0 10px #00000080
}

</style>