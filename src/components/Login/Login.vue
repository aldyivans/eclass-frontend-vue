<template>
    <div class="container-fluid">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 col-md-6 col-sm-8 p-0">
            <h3 class="font-weight-bold text-center">Log In</h3>
            <hr class="w-100">
            <div class="text-center">
	            <span class="text-danger" ref="invalid"></span>
            </div>
            <form>
            	<!-- Deactive Alert -->
            	<div class="mb-4">
							  <div class="alert alert-warning alert-dismissible fade show text-center m-0" role="alert" v-if="deactiv">
								  <strong>Hallo!</strong><br> Welcome back! We sent you an email to reactivate your account
								</div>
            		
            	</div>
							<!--  -->
              <div class="form-group">
                <label for="exampleInputEmail1" class="m-0">Email/Username</label>
                <input type="text" class="form-control rounded-0 shadow-none" aria-describedby="emailHelp" name="username" ref="loginUsername" v-model="login.username">
                <span class="text-danger" style="font-size: 12px" ref="inputWarning1"></span>
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1" class="m-0">Password</label>
                <input type="password" class="form-control rounded-0 shadow-none" name="password" ref="loginPassword" v-model="login.password">
                <span class="text-danger" style="font-size: 12px" ref="inputWarning2"></span>
              </div>

<!--               <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="RememberMe">
                <label class="form-check-label" for="RememberMe">Remember Me</label>
              </div> -->

              <button type="button" class="btn btn-primary btn-md btn-block rounded-0 font-weight-bold shadow-none" id="buttonSignup" v-on:click="save">Login</button>

              <div class="py-2">
                <h5 class="text-center p-2 m-0" id="magic">or</h5>
              </div>

              <button type="submit" class="btn btn-block border p-0 rounded-0" id="tes"  v-on:click="onSignIn" v-show="gRendered">
              </button>

              <div class="text-center">
	              <button type="button" style="color: #007bff;" class="btn bg-white border-0 mt-2 shadow-none" data-toggle="modal" data-target="#exampleModalCenter">
	                Forgot Password?
	              </button>
              </div>


              <div  class="text-center">
                <h6 class="font-weight-bold">Not Yet Joined?<router-link to="/signup"> Sign Up</router-link> First</h6>
              </div>
			  <!-- Forgot Password Pop-up -->

						  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						    <div class="modal-dialog modal-dialog-centered" role="document">
						      <div class="modal-content">
						        <div class="modal-header align-items-center">
						          <h5 class="modal-title" id="exampleModalCenterTitle">Forget Password?</h5>
						          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
							        <span aria-hidden="true">&times;</span>
						          </button>
						        </div>
						        <div class="modal-body">
						          <span class="text-danger" style="font-size: 12px" ref="invalid2"></span>
						          <span class="text-success" style="font-size: 12px" ref="success"></span>
						          <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="login.email">
						          <button type="button" class="col-sm-2 btn btn-warning" v-on:click="send">Send</button>
						          <small id="emailHelp" class="form-text text-muted">We're going to Send you an information link to verify your password</small>
						        </div>
						      </div>
						    </div>
						  </div>
			  
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
	name: 'login',
	data() {
		return {
			login : {
				username: '',
				password: ''
			},
			deactiv :false,
			gRendered : false,
			googleUser: null,
			url: 'http://192.168.2.231:3000/v1/login',
			loginGoogleUrl: 'http://192.168.2.231:3000/v1/logingoogle',
			forgotPasswordUrl: 'http://192.168.2.225:3000/v1/forgotpassword'
		}
	},
	mounted() {
		gapi.signin2.render('tes', { // this is the button "id"
	      'onsuccess': this.gSuccess,
	      'width': 'none',
	      'longtitle': true
	    })

		// pengaman fiesta
	    if(localStorage.getItem('EClassToken')){
	    	this.$router.push('/')
	    }
	},
	methods : {
		save() {
			
			var loginUsername = this.$refs.loginUsername;
			var loginPassword = this.$refs.loginPassword;
			var inpWarning1 = this.$refs.inputWarning1;
			var inpWarning2 = this.$refs.inputWarning2;
			var inpWarning3 = this.$refs.inputWarning3;
			var invalid2 = this.$refs.invalid2;
			var invalid = this.$refs.invalid;
			var success = this.$refs.success;
			var self = this;

			if(this.login.username == "") {
				loginUsername.style.borderBottom = "3px solid red"
				inpWarning1.innerHTML = "field cannot be empty!"
			} else {
				loginUsername.style.borderBottom = "1px solid #ccc"
		        inpWarning1.innerHTML = ""
			}

			if(this.login.password == "") {
				loginPassword.style.borderBottom = "3px solid red"
				inpWarning2.innerHTML = "field cannot be empty!"
			} else {
				loginPassword.style.borderBottom = "1px solid #ccc"
		        inpWarning2.innerHTML = ""
			}

			if(this.login.username != "" && this.login.password != "") {
				const headers = {
					'Authorization': localStorage.getItem('EClassToken'),
					'Content-Type':'application/json',
					'Accept': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
					// 'withCredentials': true,
				}

				var dataUser = {
					username: this.login.username.toLowerCase(),
					email: this.login.username.toLowerCase(),
					password: this.login.password
				}

				axios.post(this.url, dataUser, headers).then(response => {
					if(response.status === 200){
						localStorage.setItem('EClassToken', response.data.tokens)
						localStorage.setItem('ECLASS-id', response.data.ID)
						console.log(response)

						self.$root.$emit('isLoggedIn');
					}
				}).catch(e=>{
					console.log('errir', e.response);
					if(e.response.data.message == 'User not exists') {
						invalid.innerHTML = "Invalid Username or Password!"
					}
					if(e.response.data.message == 'User deactive') {
						this.deactiv = true;


					}
				})
			}
		},
		gSuccess(googleUser) {
				this.googleUser = googleUser;
				this.gRendered = true;
			},
		onSignIn() {
			var self = this
			var googleUser = this.googleUser

			const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      const id = profile.getId();
      const name = profile.getName();
      const imageUrl = profile.getImageUrl();
      const email = profile.getEmail();

		  console.log('TOKEN: ' + googleUser.getAuthResponse().id_token);
		  console.log('ID: ' + profile.getId());
		  console.log('Name: ' + profile.getName());
		  console.log('Image URL: ' + profile.getImageUrl());
		  console.log('Email: ' + profile.getEmail());
		  console.log('Profile', profile)

		  const params = {
		  		headers : {
						'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
		  			
		  		}
			}
			const dataUser = {
						username: "",
						fullname: name,
						email: email,
						avatar: imageUrl,
						role: "student",
						token_expired:"",
						google_id: id,
						active: true,
						token: token,
						verified: true,
				}
				console.log('data uyserrr', dataUser)

		  axios.post(this.loginGoogleUrl, dataUser, params).then(response =>{
		  	if(response.status == 200) {
		  		console.log('respon signin google',response)
		  		localStorage.setItem('EClassToken', response.data.tokens)
					localStorage.setItem('ECLASS-id', response.data.ID)

					self.$root.$emit('isLoggedIn');

		  	}
		  }).catch(e =>{
		  	console.log('error google:', e)
		  })


		},
		send() {

			const theemail = {
				email: this.login.email
			}

			console.log(theemail)

			const headers = {
				'Content-Type':'application/json',
				'Accept': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
			}

			axios.post(this.forgotPasswordUrl, theemail, headers).then(response => {
				if(response.status === 200) {
					success.innerHTML = "Confirm link was sent to your Email"
					console.log('response', response)
					invalid2.innerHTML = ""
				} else {
					success.innerHTML = ""
				}
			}).catch(e => {
				invalid2.innerHTML = "The Email is not registered!"
				success.innerHTML = ""
				console.log('erorrrr', e.response)
			})
		}
	}
}
</script>

<style scoped>

	.signup {
	  border-bottom: .05rem solid #e5e5e5;
	}

	#google {
	  background-color: #fff; 
	}
	#googleImg {
	  width: 25px;
	  margin-right: 15px;

	}
	#buttonSignup {
	  background-color: #5384bc;
	}

	/* Custom page footer */
	.footer {
	  padding-top: 1.5rem;
	  color: #777;
	  border-top: .05rem solid #e5e5e5;
	}

	#magic {
	  position: relative;
	}

	#magic:before,
	#magic:after {
	  content: '';
	  height: 1px;
	  background-color: #aaa;
	  width: 45%;
	  position: absolute;
	  top: 50%;
	  transform: translateY(-50%);
	}

	#magic:before {
	  left: 0;
	}

	#magic:after {
	  right: 0;
	}

</style>