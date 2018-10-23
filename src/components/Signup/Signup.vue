<template>
	<div class="container-fluid" id="signuppage">
		<div class="container py-5">
			<div class="row justify-content-center">
				<div class="col-12 col-lg-4 col-md-6 col-sm-8 p-0">
					<h3 class="font-weight-bold text-center">Sign Up</h3>
					<hr class="w-100">
					<form class="form-group text-left">
						<div class=" p-0 mb-2">
							<label for="username" class="font-weight-bold m-0">Username</label>
							<input v-model="input.username" type="text" class="form-control rounded-0 shadow-none border" name="username" autocomplete="off" id="username">
							<span id="user"></span>
						</div>
						<div class="p-0 mb-2">
							<label for="fullname" class="font-weight-bold m-0">Fullname</label>
							<input v-model="input.fullname" type="text" class="form-control rounded-0 shadow-none border" name="fullname" autocomplete="off" id="full">
							<span id="fullname"></span>
						</div>
						<div class=" p-0 mb-2">
							<label for="example-date-input" class="font-weight-bold m-0">Birthday</label>
							<input v-model="input.birthday" class="form-control rounded-0 shadow-none border" type="date" data-provide="datepicker" id="example-date-input" name="birthday" autocomplete="off">
							<span id="birthday"></span>
						</div>
						<div class=" p-0 mb-2">
							<label for="gender" class="font-weight-bold m-0">Gender</label>
							<select v-model="input.gender" class="custom-select form-control rounded-0 shadow-none border" name="gender" autocomplete="off" id="gen">
							  <option>Male</option>
							  <option>Female</option>
							</select>
							<span id="gender"></span>
						</div>
					  <div class=" p-0 mb-2">
							<label for="exampleInputEmail1" class="font-weight-bold m-0">Email</label>
							<input v-model="input.email" type="email" class="form-control rounded-0 shadow-none border" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" autocomplete="off">
						  <span id="email"></span>
					  </div>
					  <div class=" form-group p-0 mb-2">
							<label for="exampleInputPassword1" class="font-weight-bold m-0">Password</label>
							<div class="input-group">
								<input v-model="input.password" type="password" class="form-control rounded-0 shadow-none border" id="exampleInputPassword1" name="password" autocomplete="off"/>
								<div class="input-group-append">
									<span class="input-group-text border-0" id="eyes" v-on:click="showPassword"><font-awesome-icon icon="eye"/></span>
							  </div>	
							</div>
					  	<span id="password"></span>
					  </div>
					  <div class="form-group p-0 mb-3">
							<label for="exampleInputConfirmPassword1" class="font-weight-bold m-0">Confirm Password</label>
							<div class="input-group">
								<input v-model="input.confirmpassword" type="password" class="form-control rounded-0 shadow-none border" id="exampleInputConfirmPassword1" name="ConfirmPassword" autocomplete="off">
								<div class="input-group-append">
									<span class="input-group-text border-0" id="eyes" v-on:click="showConfirm"><font-awesome-icon icon="eye"/></span>
							  </div>
							</div>
						  <span id="confirmpassword"></span>
					  </div>
					  <button type="button" class="btn btn-primary btn-md btn-block rounded-0 font-weight-bold" id="buttonSignup" v-on:click="signup">Sign Up</button>
					  <div class="py-2">
							<h5 class="text-center p-2 m-0" id="magic">or</h5>
					  </div>
					  <button class="btn btn-block p-0 rounded-0 font-weight-bold" id="google-signin-btn"></button>
					  <div  class="text-center p-2">
							<h6 class="font-weight-bold">Already Joined?<router-link to="/login" class="mr-1 ml-1">Log In</router-link>Now</h6>
					  </div>
					</form>
		  		</div>
			</div>
	  </div>
	</div>
</template>

<script>
	import router from '../../router.js'
	import VueAxios from 'vue-axios'
	import axios from 'axios'
	import Vue from 'vue'
	Vue.use(VueAxios, axios)
	export default {
		data() {
			return {
				input: {
					username: "",
					fullname: "",
					birthday: "",
					gender: "",
					email: "",
					password: "",
					confirmpassword: ""
				},
        register: 'http://192.168.2.225:3000/register',

        registerGoogle: 'http://192.168.2.225:3000/registergoogle'
			}
		},
		mounted() {
			gapi.signin2.render('google-signin-btn',{
				'onsuccess': this.onSignIn,
				'width':'none',
				'longtitle':true,
				'height': 40
				})
		},
		methods: {
			showPassword() {
				var x = document.getElementById('exampleInputPassword1');
				if (x.type === "password") {
					x.type = "text"
				}else {
					x.type = "password"
				}
			},
			showConfirm() {
				var x = document.getElementById('exampleInputConfirmPassword1');
				if (x.type === "password") {
					x.type = "text"
				}else {
					x.type = "password"
				}
					
			},
			signup() {
				var alphabets = /^[a-zA-Z-0-9]+$/;
				var space = /^[a-zA-Z-0-9\s]+$/;

				// Username
				// ---------------------------------------- 
				if(this.input.username == "") {
					document.getElementById('user').className ="text-danger font-weight-normal"
					document.getElementById('user').innerHTML = "please fill the username field"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-danger "
					return false;
				}else {
					document.getElementById('user').innerHTML = "Looks good!"
					document.getElementById('user').className ="text-success font-weight-normal"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-success"	
				}
				if(this.input.username.length <= 3 || this.input.username.length > 15){
					document.getElementById('user').innerHTML = "username must be between 4 and 15"
					document.getElementById('user').className ="text-danger font-weight-normal"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-danger "
					return false;
				}else {
					document.getElementById('user').innerHTML = "Looks good!"
					document.getElementById('user').className ="text-success font-weight-normal"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-success"	
				}
				if(!(alphabets.test(this.input.username))){
					document.getElementById('user').innerHTML = "name only alphabets and number not space and symbol"
					document.getElementById('user').className ="text-danger font-weight-normal"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-danger "
					return false;
				}else {
					document.getElementById('user').innerHTML = "Looks good!"
					document.getElementById('user').className ="text-success font-weight-normal"
					document.getElementById('username').className ="form-control rounded-1 shadow-none border-success"	
				}

				// Fullname
				// ----------------------------------------
				if(this.input.fullname == "") {
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('fullname').className ="text-danger font-weight-normal"
					document.getElementById('fullname').innerHTML = "please fill the fullname field"
					return false;
				}else {
					document.getElementById('fullname').innerHTML = "Looks good!";
					document.getElementById('fullname').className ="text-success font-weight-normal"
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-success"
				}
				if(this.input.fullname.length <= 3 || this.input.fullname.length > 15){
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('fullname').innerHTML = "fullname Must be between 5 and 12"
					document.getElementById('fullname').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('fullname').innerHTML = "Looks good!";
					document.getElementById('fullname').className ="text-success font-weight-normal"
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-success"
				}
				if(!(space.test(this.input.fullname))){
					document.getElementById('fullname').innerHTML = "name only alphabets and number"
					document.getElementById('fullname').className ="text-danger font-weight-normal"
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-danger "
					return false;
				}else {
					document.getElementById('fullname').innerHTML = "Looks good!"
					document.getElementById('fullname').className ="text-success font-weight-normal"
					document.getElementById('full').className ="form-control rounded-1 shadow-none border-success"	
				}

				// Birthday
				// ----------------------------------------
				if(this.input.birthday == "") {
					document.getElementById('birthday').innerHTML = "please fill the birthday field"
					document.getElementById('example-date-input').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('birthday').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('birthday').innerHTML = "Looks good!";
					document.getElementById('birthday').className ="text-success font-weight-normal"
					document.getElementById('example-date-input').className ="form-control rounded-1 shadow-none border-success"
				}

				// Gender
				// ------------------------------------
				if(this.input.gender == "") {
					document.getElementById('gender').innerHTML = "please fill the gender field"
					document.getElementById('gen').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('gender').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('gender').innerHTML = "Looks good!";
					document.getElementById('gender').className ="text-success font-weight-normal"
					document.getElementById('gen').className ="form-control rounded-1 shadow-none border-success"
				}

				// Email
				// -------------------------------------
				if(this.input.email == "") {
					document.getElementById('email').innerHTML = "please fill the email field"
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('email').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('email').innerHTML = "Looks good!";
					document.getElementById('email').className ="text-success font-weight-normal"
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-success"
				}
				if(this.input.email.indexOf('@')<= 0) {
					document.getElementById('email').innerHTML = "@ invalid position "
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('email').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('email').innerHTML = "Looks good!";
					document.getElementById('email').className ="text-success font-weight-normal"
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-success"
				}
				if((this.input.email.charAt(this.input.email.length-4)!='.') && (this.input.email.charAt(this.input.email.length-3)!='.')){
					document.getElementById('email').innerHTML = ". invalid position"
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('email').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('email').innerHTML = "Looks good!";
					document.getElementById('email').className ="text-success font-weight-normal"
					document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-success"
				}

				// Password
				// ----------------------------------
				if(this.input.password == "") {
					document.getElementById('password').innerHTML = "please fill the password field"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-danger "
					document.getElementById('password').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('password').innerHTML = "Looks good!";
					document.getElementById('password').className ="text-success font-weight-normal"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-success"
				}
				if(!(alphabets.test(this.input.password))) {
					document.getElementById('password').innerHTML = "only alphabets and number"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-danger "
					document.getElementById('password').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('password').innerHTML = "Looks good!";
					document.getElementById('password').className ="text-success font-weight-normal"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-success"
				}
				if(this.input.password.length < 8 ) {
					document.getElementById('password').innerHTML = "password length minimal 8 character"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-danger "
					document.getElementById('password').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('password').innerHTML = "Looks good!";
					document.getElementById('password').className ="text-success font-weight-normal"
					document.getElementById('exampleInputPassword1').className ="form-control rounded-1 shadow-none border border-success"
				}
				if(this.input.password != this.input.confirmpassword){
					document.getElementById('confirmpassword').innerHTML = "password not match "
					document.getElementById('exampleInputConfirmPassword1').className ="form-control rounded-1 shadow-none border border-danger "
					document.getElementById('confirmpassword').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('confirmpassword').innerHTML = "Looks good!";
					document.getElementById('confirmpassword').className ="text-success font-weight-normal"
					document.getElementById('exampleInputConfirmPassword1').className ="form-control rounded-1 shadow-none border border-success"
				}

				// Confirm Password
				// --------------------------------------
				if(this.input.confirmpassword == "") {
					document.getElementById('confirmpassword').innerHTML = "please fill the confirm password field"
					document.getElementById('exampleInputConfirmPassword1').className ="form-control rounded-1 shadow-none border-danger "
					document.getElementById('confirmpassword').className ="text-danger font-weight-normal"
					return false;
				}else {
					document.getElementById('confirmpassword').innerHTML = "Looks good!";
					document.getElementById('confirmpassword').className ="text-success font-weight-normal"
					document.getElementById('exampleInputConfirmPassword1').className ="form-control rounded-1 shadow-none border border-success"
				}

				this.post()
			},
			post() {
				var self = this
				var userText;
				var emailText;

        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        		}
				var dataUser = {
						username: this.input.username.toLowerCase(),
						fullname: this.input.fullname,
						birthday: this.input.birthday,
						gender: this.input.gender,
						password: this.input.password,
						email: this.input.email.toLowerCase(),
						avatar: "",
						role: "",
						token: "",
						token_expired:"",
						google_id: "",
						active: true,
						verified: false,
				}
				axios.post(this.register, dataUser, headers).then((response, err) => {
          if (response.status === 200) {
          	console.log('response:', response)
          	// Redirect Ke login Tinggal di Uncomment Code di bawah
          	this.$router.push('/login')
          	
          }else {
            throw new Error("Error");
             response.status = 200;
          } 
          
        }).catch(e => {
          console.log('tes: ', e.response);
        	if(e.response.data.message == 'Username exist'){
        		userText = e.response.data.message
        		document.getElementById('user').innerHTML = userText;
        		document.getElementById('user').className ="text-danger font-weight-normal"
						document.getElementById('username').className ="form-control rounded-1 shadow-none border-danger "
						return false;
        	} 
        	if( e.response.data.message == 'Email exist') {
        		emailText = e.response.data.message
        		document.getElementById('email').innerHTML = emailText
						document.getElementById('exampleInputEmail1').className ="form-control rounded-1 shadow-none border-danger "
						document.getElementById('email').className ="text-danger font-weight-normal"
						return false;
        	}
        });
			},
			onSignIn(googleUser) {
				const profile = googleUser.getBasicProfile();
        const token = googleUser.getAuthResponse().id_token;
        const id = profile.getId();
        const name = profile.getName();
        const imageUrl = profile.getImageUrl();
        const email = profile.getEmail();

				console.log('TOKEN: ' + token);
        console.log('ID: ' + id);
        console.log('Name: ' + name);
        console.log('Image URL: ' + imageUrl);
        console.log('Email: ' + email);

        const dataUser = {
        		id: id,
						username: "",
						fullname: name,
						email: email,
						avatar: imageUrl,
						role: "student",
						token_expired:"",
						google_id: token,
						active: true,
						verified: true,
				}
				console.log('tessss',dataUser)
				const params = {
					headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
						
					}
				}
      	axios.post(this.registerGoogle, dataUser, params).then((response, err) => {
          if (response.status === 200) {
          	console.log('response:', response)
          	// Redirect Ke login Tinggal di Uncomment Code di bawah
          	// this.$router.push('/login')
          }else {
            throw new Error("Error");
             response.status = 200;
          } 
          
        }).catch(e => {
          console.log('tes: ', e.response);
          if(e.response.data.message == 'id exist'){
          	alert('Anda Sudah Melakukakan Signup')
          }
        });
			}
		}
	}
</script>

<style scoped>
	.signupComponent {
		background-color: #f1f1f1;
	}
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
	span {
		cursor: pointer;
	}
	#google-signin-btn {
		width: 100%;
	}
</style>