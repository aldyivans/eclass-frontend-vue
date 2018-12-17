<template>
	<div class="hero">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		</ol>
			<div class="carousel-inner">
				<div class="carousel-item active" v-for="(carousel, i) in dataCarousel" v-bind:key="i" v-if="i == 0">
					<img class="d-block w-100" v-bind:src="carousel.background" alt="First slide" />
					<div class="hero-caption text-center d-none d-lg-block">
						<h1 class="font-weight-bold">{{ carousel.background_desc }}</h1>
					</div>
				</div>
				<div class="carousel-item" v-for="(carousel, i) in dataCarousel" v-bind:key="i" v-if=" i > 0">
					<img class="d-block w-100" v-bind:src="carousel.background" alt="First slide" />
					<div class="hero-caption text-center d-none d-lg-block">
						<h1 class="font-weight-bold">{{ carousel.background_desc }}</h1>
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
	import router from '../../router'

	export default {
		data() {
			return {
				dataSortDate : [],
				dataCarousel: [],
			}
		},
		mounted() {
			this.getCourses()
		},

		methods:{
			getCourses(){
				var courses = router.app.courses

				for (var i = 0; i < courses.length; i++) {
					var dataDate = timeConverter(courses[i].created_at._seconds)
					courses[i].created_at._seconds = dataDate
					this.dataSortDate.push(courses[i])
					this.dataSortDate.sort(function(a,b){
					return new Date(b.created_at._seconds) - new Date(a.created_at._seconds);
					});
				}

				for (var j = 0; j < this.dataSortDate.length; j++) {
					if(j < 3){
						this.dataCarousel.push(this.dataSortDate[j])
					}
				}


				function timeConverter(UNIX_timestamp){
					var a = new Date(UNIX_timestamp * 1000);
					var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
					var year = a.getFullYear();
					var month = months[a.getMonth()];
					var date = a.getDate();
					var hour = a.getHours();
					var min = a.getMinutes();
					var sec = a.getSeconds();
					var time = date + ' ' + month + ' ' + year + ' ' + hour  + ':' + min + ':' + sec;
					return time;
				}

			},
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

.carousel-item .active, .carousel-item {
	max-height: 550px;
	overflow: hidden;
	background-size: cover;
	background-position: 50%;
}
</style>