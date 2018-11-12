<template>
  <div class="container-fluid bg-light p-0">
    <div class="bg-dark text-white">
      <div class="container">
        <div class="row m-0">
          <div class="col-12 p-0">
            <div class="d-block d-sm-flex align-items-center my-4">
              <div class="d-inline-block col-12 col-sm-5 col-md-4 col-lg-3 p-0" v-if="datacourse">
                <img class="w-100" v-bind:src="datacourse.thumbnail" >
              </div>
             	<div class="d-inline-block ml-0 mt-4 ml-sm-4 mt-sm-0" v-if="datacourse">
                <h4 class="text-uppercase font-weight-bold">{{datacourse.title}}</h4>
                <p class="m-0 ">{{datacourse.subtitle}}</p>
                <p class="m-0" >Instructor :<br>
                	<span v-for="ins in datacourse.instructor">{{ins.name}}</span></p>
                <div class="mt-2">
                  <button class="btn btn-warning rounded-0 font-weight-bold" type="button">Join Course</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="datacourse">
      <div class="row flex-column">
        <div class="col-12 col-md-8 my-5">
          <h5 class="font-weight-bold">Descriptions:</h5>
          <p>{{datacourse.description}}</p>
        </div>
        <div class="col-12 col-md-8" v-for="data in datasection">
          <div class="shadow bg-white">
            <button class="btn rounded-0 bg-white w-100 text-left border-0 p-3 font-weight-bold d-flex align-items-center" type="button" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample" aria-expanded="false"><font-awesome-icon icon="minus" class="mr-2"></font-awesome-icon>
            <h6 class="font-weight-bold m-0">{{data.title}}</h6>
            </button>
            <div class="collapse w-100 rounded-0 bg-white border-top" id="collapseExample">
              <ul class="p-0 m-0" >
                <div class="w-100 bg-white border-bottom" v-for="video in data.data_video">
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
                	
                	  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" v-if="preview">
								      <div class=" row modal-dialog modal-dialog-centered modal-lg " role="document">
								        <div class="modal-content border-0 col-12">
								          <div class="modal-header border-0">
								            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
								            <font-awesome-icon icon="times" id="close"></font-awesome-icon>
								            </button>
								          </div>
								          <div class="modal-body">
								            <iframe width="100%" height="400" v-bind:src="video.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
	      <div class="col-12 col-md-8 py-5">
	        <div class="shadow bg-white">
	          <div class="text-center p-3 bg-dark text-white border-bottom">
	            <h6 class="font-weight-bold m-0">Question & Answer</h6>
	          </div>
	          <div class="p-4">
	            <button class="btn btn-primary rounded-0 border-0 font-weight-bold" data-toggle="collapse" data-target="#send" aria-controls="send" aria-expanded="false"><font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>Ask a new question</button>
	          </div>
	          <div class="row m-0">
	            <div class="col-12 col-lg-8 mb-3">
	              <div>
	                <div class="ques d-inline-block">
	                  <img v-bind:src="images2" alt="Generic placeholder image" id="quesimg">
	                </div>
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
	            </div>

	            <!-- Collapse Answer -->
	            <div class="w-100 d-flex justify-content-center">
	                <div class="collapse col-12 col-lg-8"  id="answer" >
	                    <div class="px-0 px-lg-1 align-items-center">
	                        <div class="ques">
	                          <img v-bind:src="images2" alt="Generic placeholder image" id="quesimg">
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
	          </div>

	          <!-- Collapse New Question-->
	          <div class=" collapse m-0" id="send">
	            <div class="w-100 py-4">
	              <div class="col-lg-8">
	                <div class="media px-0 px-lg-1 align-items-center">
	                  <div class="ques">
	                    <img v-bind:src="images2" alt="Generic placeholder image" id="quesimg">
	                  </div>
	                  <div class="media-body px-3">
	                    <div class="speech-bubble-send">
	                      <div class="p-2">
	                        <textarea type="text" name="send" rows="4" class="border-0 w-100 p-0 m-0" id="sendTextarea"> 
	                        </textarea>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	                <div class="text-right p-3">
	                  <button class="btn btn-warning border-0" type="button">Send</button>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'course',
		data(){
			return {
				images2 : require('../../assets/tes.jpg'),
				datacourse: null,
				data: null,
				datavideo: [],
				preview: false,
				loopcourse: null,
				locking: null,
				datasection: [],
			}
		},
		mounted() {
			var self = this;

			this.datacourse = this.$route.params.selected_course;
			this.data = this.datacourse.section;

			this.data.map( data => {
				self.datavideo.push(data.data_video)
			})

			this.loopcourse = this.course(this.datacourse)
			this.locking = this.locked(this.datavideo)
		},
		methods: {
			course(dataSection) {
				dataSection.section.map(data=>{
				this.datasection.push(data)
					})
			},
			locked(dataLocked) {
				var self = this;

				dataLocked.map(locking=>{
					locking.map(lock=>{
						if(lock.locked === false){
							console.log(lock.locked)

							self.preview = true;
						}
					})
				})
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