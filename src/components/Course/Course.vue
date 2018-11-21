<template>
	<div class="container-fluid bg-light p-0">

		<div class="bg-dark text-white" v-if="datacourse">
			<div class="container">
				<div class="row m-0">
					<div class="col-12 p-0">
						<div class="d-block d-sm-flex align-items-center my-4">

							<!-- Course Thumbnail -->
							<div class="d-inline-block col-12 col-sm-5 col-md-4 col-lg-3 p-0">
								<img class="w-100" v-bind:src="datacourse.thumbnail" >
							</div>

							<div class="d-inline-block ml-0 mt-4 ml-sm-4 mt-sm-0">
								<!-- Course Information -->
								<h4 class="text-uppercase font-weight-bold">{{datacourse.title}}</h4>
								<p class="m-0 ">{{datacourse.subtitle}}</p>
								<p class="m-0" >Instructor :<br>
								<span class="mr-2" v-for="(ins, i) in datacourse.instructors" v-bind:key="i">{{ins.name}}</span></p>

								<!-- JOIN BUTTON - belum selesai -->
								<div class="mt-2" v-if="!joined(datacourse)">
									<button v-if="join" class="btn btn-warning rounded-0 font-weight-bold" type="button" v-on:click="joinCourse(datacourse.aid)">Join Course</button>
									<button v-else class="btn btn-warning rounded-0 font-weight-bold" type="button" data-toggle="modal" data-target="#buttonModal">Join Course</button>
								</div>
								<div class="mt-2" v-else>
									<button class="btn btn-danger rounded-0 font-weight-bold" type="button" v-on:click="unjoin(datacourse.aid)">Unjoin Course</button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container" v-if="datacourse">
			<div class="row flex-column">
			<div class="col-12 col-md-8 mt-5">
				<h5 class="font-weight-bold">Description:</h5>
				<p>{{datacourse.description}}</p>
			</div>
			<div class="col-12 col-md-8 py-5" v-for="(data, i) in datacourse.sections" v-bind:key="i">
				<div class="shadow bg-white">
				<button class="btn rounded-0 bg-white w-100 text-left border-0 p-3 font-weight-bold d-flex align-items-center" type="button" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample" aria-expanded="false"><font-awesome-icon icon="minus" class="mr-2"></font-awesome-icon>
				<h6 class="font-weight-bold m-0">{{data.title}}</h6>
				</button>
				<div class="collapse w-100 rounded-0 bg-white border-top" id="collapseExample">
					<ul class="p-0 m-0" >
					<div class="w-100 bg-white border-bottom" v-for="(video, j) in data.videos" v-bind:key="j">
						<li>
							<div v-if="video.locked" class="row text-muted  justify-content-around align-items-center text-left p-3">

								<font-awesome-icon icon="play-circle" class="col-1"></font-awesome-icon>

								<span class="col-7">{{video.title}}</span>

								<font-awesome-icon icon="lock" class="col-2 text-center"></font-awesome-icon>

								<span class="col-2">{{ video.duration}}</span>
							</div>
							<div class="row text-primary justify-content-around align-items-center text-left p-3" v-else>
								<font-awesome-icon icon="play-circle" class="col-1"></font-awesome-icon>

								<span class="col-7" data-toggle="modal" data-target="#exampleModalCenter">{{video.title}}</span>

								<span class="col-2 text-center">Preview</span>
								

								<span class="col-2">{{ video.duration}}</span>
							</div>
							<!-- modal -->
							<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" v-if="!video.locked" v-on:click="stopVideo">
								<div class=" row modal-dialog modal-dialog-centered modal-lg " role="document">
								<div class="modal-content border-0 col-12">
									<div class="modal-header border-0">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="stopVideo">
									<font-awesome-icon icon="times" id="close"></font-awesome-icon>
									</button>
									</div>
									<div class="modal-body">
									<iframe width="100%" height="400" v-bind:src="video.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="iframeCourse"></iframe>
									</div>
								</div>
								</div>
							</div>
						</li>
					</div>
					</ul>
				</div>
				</div>
			</div>
				<div class="col-12 col-md-8 py-5" v-if="join">
					<div class="shadow bg-white">
						<div class="text-center p-3 bg-dark text-white border-bottom">
							<h6 class="font-weight-bold m-0">Question & Answer</h6>
						</div>

						<!-- Ask new question btn wrapper -->
						<div class="p-4">
							<button class="btn btn-primary rounded-0 border-0 font-weight-bold" data-toggle="collapse" data-target="#send" aria-controls="send" aria-expanded="false"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Ask a new question</button>
						</div>

						<!-- Collapse New Question-->
						<div class=" collapse m-0" id="send" v-if="user">
							<div class="w-100 py-4">
								<div class="col-lg-8">
									<div class="media px-0 px-lg-1 align-items-center">
										<div class="ques">
										<img v-bind:src="user.avatar" alt="Generic placeholder image" id="quesimg">
										</div>
										<div class="media-body px-3">
										<div class="speech-bubble-send">
											<div class="p-2">
											<textarea type="text" name="send" rows="4" class="border-0 w-100 p-0 m-0" id="sendTextarea" v-model="newcomment">
											</textarea>
											</div>
										</div>
										</div>
									</div>
									<div class="text-right p-3">
										<button class="btn btn-warning border-0" type="button" @click="sendComment">Send</button>
									</div>
								</div>
							</div>
						</div>

						<div class="row m-0">

							<div class="col-12 col-lg-8 mb-3">

								<!-- Single Comment (dummy) -->
								<div>
									<!-- User Avatar -->
									<div class="ques d-inline-block">
										<img v-bind:src="images2" alt="Generic placeholder image" id="quesimg">
									</div>
									<!-- Text -->
									<div class="px-3 d-inline-block">
										<div class="speech-bubble">
										<div class="p-2">
											<p class="m-0">Hy Guys apa kabar ?</p>
										</div>
										</div>
										<div class="date">
										<p class="d-inline-block m-0 mr-1 mr-lg-3">10.22, 9 October 2018</p>
										<span class="text-primary" data-toggle="collapse" data-target="#answer" aria-controls="answer" aria-expanded="false">Answer</span>
										</div>
									</div>
								</div>

								<!-- Single Comment -faris -->
								<div v-for="(comment, index) in datacourse.comments" v-if="comment" :key="index">

									<!-- MAIN COMMENT -->
									<!-- {{comment}} -->
									<div>
										<!-- User Avatar -->
										<div class="ques d-inline-block">
											<img v-if="comment.user" v-bind:src="comment.user.avatar" alt="Generic placeholder image" id="quesimg">
										</div>
										<!-- Text -->
										<div class="px-3 d-inline-block">
											<div class="speech-bubble">
												<div class="p-2">
													<p class="m-0">{{comment.text}}</p>
												</div>
											</div>
											<div class="date">
												<p class="d-inline-block m-0 mr-1 mr-lg-3" v-if="comment.created_at">{{comment.created_at._seconds | date}}</p>
												<span class="text-primary" data-toggle="collapse" :data-target="'#answer' + index" aria-controls="answer" aria-expanded="false">Answer</span>
											</div>
										</div>
									</div>

									<!-- Collapse Answer -->
									<div class="w-100 d-flex justify-content-center" v-if="user">
										<div class="collapse col-12 col-lg-8"  v-bind:id="['answer'+index]" >
											<div class="px-0 px-lg-1 align-items-center">
												<div class="ques">
													<img v-bind:src="user.avatar" alt="Generic placeholder image" id="quesimg">
												</div>
												<div class="media-body px-3">
													<div class="speech-bubble">
														<div class="p-2">
															<textarea type="text" name="answer" rows="4" class="border-0 w-100 p-0 m-0"> 
															</textarea>
														</div>
													</div>
												</div>
											</div>
											<div class="text-right p-3">
												<button class="btn btn-warning border-0" type="button">Reply</button>
											</div>
										</div>
									</div>

									<!-- REPLIES -->
									<div class="ml-5" v-for="(reply, replyIndex) in comment.replies" :key="replyIndex">
										<!-- User Avatar -->
										<div class="ques d-inline-block">
											<img v-if="reply.user" v-bind:src="reply.user.avatar" alt="Generic placeholder image" id="quesimg">
										</div>
										<!-- Text -->
										<div class="px-3 d-inline-block">
											<div class="speech-bubble">
												<div class="p-1">
													<p class="m-0">{{reply.text}}</p>
												</div>
											</div>
											<div class="date">
												<p class="d-inline-block m-0" v-if="reply.created_at">{{reply.created_at._seconds | date}}</p>
												<!-- <span class="text-primary" data-toggle="collapse" :data-target="'#answer' + index" aria-controls="answer" aria-expanded="false">Answer</span> -->
											</div>
										</div>
									</div>

								</div>

							</div>

							<!-- Collapse Answer (dummy) -->
							<!-- <div class="w-100 d-flex justify-content-center" v-if="user">
								<div class="collapse col-12 col-lg-8"  id="answer" >
									<div class="px-0 px-lg-1 align-items-center">
										<div class="ques">
											<img v-bind:src="user.avatar" alt="Generic placeholder image" id="quesimg">
										</div>
										<div class="media-body px-3">
											<div class="speech-bubble">
												<div class="p-2">
													<textarea type="text" name="answer" rows="4" class="border-0 w-100 p-0 m-0"> 
													</textarea>
												</div>
											</div>
										</div>
									</div>
									<div class="text-right p-3">
										<button class="btn btn-warning border-0" type="button">Reply</button>
									</div>
								</div>
							</div> -->

						</div>

						

					</div>
				</div>
			</div>
		</div>

		<!-- MODAL -->
		<div class="modal fade" id="buttonModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content bg-light">
					<div class="modal-header border-0">
						<h5 class="modal-title text-dark" id="exampleModalLabel"></h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p class="text-dark text-center m-0">Silahkan melakukan login terlebih dahulu untuk join course ini.</p>
					</div>
					<div class="modal-footer border-0">
						<router-link to="/login">
							<button type="button" class="btn btn-primary rounded-0" data-dismiss="modal" aria-label="Close">Login</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- Sampai sini batesnya -->
	</div>
</template>

<script>
	import axios from 'axios'
	import App from '../../App.vue'

	$("#exampleModalCenter").on('hidden.bs.modal', function (e) {
    $("#exampleModalCenter iframe").attr("src", $("#exampleModalCenter iframe").attr("src"));
	});

	export default {
		name: 'course',
		data(){
			return {
				images2 : require('../../assets/tes.jpg'),
				datacourse: null,
				join: false,
				dataData: null,
				user: null,
				newcomment: ''

			}
		},
		mounted() {
			var EclassId = localStorage.getItem('ECLASS-id');

			if(EclassId){
				axios.get(App.data().ListUrl.urlUser + EclassId).then(res=>{
					this.user = res.data.userData
				})
			}
	
			this.dataData = this.$route.params.id
			console.log("data dari id", this.dataData)

			this.getCourse();
		
			if(localStorage.getItem('EClassToken')) {
			this.join = true
			}
		},
		methods: {
			getCourse(){
				this.datacourse = null;
				console.log('get course...')

				// Get selected course by id
				axios.get( App.data().ListUrl.UrlCoursesByid + this.dataData).then(res=>{
					console.log('sukses get course')
					if(res.status == 200){
						var cloned = JSON.parse(JSON.stringify(res.data.result))
						this.datacourse = cloned;
						
						// Convert user_id to user and get the user avatar
						var comments = [];
						cloned.comments.map(comment => {
							if(comment.user_id){
								axios.get( App.data().ListUrl.urlUser + comment.user_id).then(res=>{
									if(res.status == 200){
										// console.log('USER YANG COMMENT', res.data.userData)
										comment.user = res.data.userData
										comments.push(comment);
										comments.sort((a, b) => a.created_at._seconds < b.created_at._seconds);
										this.datacourse.comments = comments;
										console.log('asolleee', this.datacourse)
									}
								});
							}
						});
						
					}
				});
			},
			stopVideo(){
				document.getElementById('iframeCourse').src = document.getElementById('iframeCourse').src;
			},
			joinCourse(id){
				console.log(id)
				var token = localStorage.getItem('EClassToken');
				console.log(token)

				const params = {
					headers: {
						'x-access-token': token,
						'Content-Type':'application/json',
						'Accept': 'application/json',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
					}
				}

				axios.post(App.data().ListUrl.UrlJoinCourse + id, {}, params).then(response => {
					if(response.status === 200) {
						alert('Sukses')
						console.log('SUKSES JOIN COURSE', response)
						this.$router.push('/')
					} else {
						alert('Gagal')
						console.log('GAGAL JOIN COURSE')
					}
				}).catch(e => {
					alert('Gagal')
					console.log('GAGAL JOIN COURSESS', e.response)
				})
			},
			joined(datacourse){
				if(this.user){
					var joined = false;
					this.user.my_course.map(c => {
						if(c.aid === datacourse.aid){
							joined = true;
						}
					})
					return joined;
				}
			},
			unjoin(id){
				console.log('unjoin' + id)

				console.log(id)
				var token = localStorage.getItem('EClassToken');
				console.log(token)

				const params = {
					headers: {
						'x-access-token': token,
						'Content-Type':'application/json',
						'Accept': 'application/json',
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
					}
				}
				
				axios.post(App.data().ListUrl.UrlUnjoinCourse + id, {}, params).then(response => {
					if(response.status === 200) {
						alert('Sukses')
						console.log('SUKSES UNJOIN COURSE', response)
						this.$router.push('/')
					} else {
						alert('Gagal')
						console.log('GAGAL UNJOIN COURSE')
					}
				}).catch(e => {
					alert('Gagal')
					console.log('GAGAL UNJOIN COURSESS', e.response)
				})

			},
			sendComment(){
				var data = {
					user_id: localStorage.getItem('ECLASS-id'),
					text: this.newcomment,
					course_id: this.datacourse.id
				}

				console.log('send new comment: ', data)
				console.log('please wait...')

				axios.post(App.data().ListUrl.urlComment, data).then(res => {
					alert('ok');
					console.log(res)
					setTimeout(()=>{
						this.getCourse();
					}, 1000)
				})
				.catch(err => {
					alert('failed')
					console.log(err)
				})
			}
		},
		filters: {
			date(secs){
				const options = {
					year: 'numeric', month: 'short', day: 'numeric',
					hour: 'numeric', minute: 'numeric',
					hour12: false
				};

				var t = new Date(1970, 0, 1); // Epoch
				t.setSeconds(secs);
				var dt = new Date(t);
				return new Intl.DateTimeFormat('en-GB', options).format(dt);
			}
		}
	}
</script>

<style scoped>

#question, #send{
	background-color: #d6dcdc;
}

li {
	list-style: none;
}
a:hover {
	text-decoration: none;
}
#buttonQuestion {
	background-color: #7faefe;
}
.ques {
	width: 60px;
	height: 60px;
	background-color: #fff;
	border-radius: 50%;
	border: 1px solid #ccc;
	display: inline-block;
	position: relative;
	overflow: hidden;
}
#quesimg {
	width: 100%;
	position: absolute;
	justify-content: center;
	display: flex;
	top: 0;
	left: 0;
}
textarea {
	background: #d6dcdc;
	outline: none;
	box-shadow:none !important;
}
 #sendTextarea {
	background: #fff;
 }
.speech-bubble {
	position: relative;
	background: #d6dcdc;
	border-radius: .4em;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 17px solid transparent;
	border-right-color: #d6dcdc;
	border-left: 0;
	border-bottom: 0;
	margin-top: -8.5px;
	margin-left: -17px;
}
.date {
	font-size: 12px;
	color: #6c757d;
}
#garisQuestion {
	border-bottom: 3px solid #f1f1f1;
}
.speech-bubble-send {
	position: relative;
	background: #fff;
	border-radius: .4em;
}

.speech-bubble-send:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 17px solid transparent;
	border-right-color: #fff;
	border-left: 0;
	border-bottom: 0;
	margin-top: -8.5px;
	margin-left: -17px;
}
span {
	cursor: pointer;
}
button {
	outline: none;
	box-shadow:none !important;
}

.modal-content {
	background-color: transparent;
}
#close {
	color: #fff;
	opacity: 1;
	font-size: 35px;
}



</style>