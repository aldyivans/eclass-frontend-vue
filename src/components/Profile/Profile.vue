<template>
	<div class="container-fluid">
	      <div class="container">
	        <div class="row border justify-content-center my-5">
	          <div class="profile col-12 text-center py-2">
	            <h4 class="font-weight-bold m-0">Profile</h4>
	            <p class="m-0">Add/Edit Informations About Your Profile</p>
	          </div>
	          <div class="border-right col-12 col-lg-3 p-0">
	            <div class="border-bottom border-top p-3">
	              <h5 class="font-weight-bold m-0">ATHIX MUBAROCK</h5>
	            </div>
	            <div class="p-3">
	              <ul class="list-unstyled font-weight-bold">
	                <li>
	                  <router-link to="/profile">Profile</router-link>
	                </li>
	                <li>
	                  <router-link to="/changepassword">Change Password</router-link>
	                </li>
	                <li>
	                  <router-link to="/deactive">Deactive Account</router-link>
	                </li>
	              </ul>
	            </div>
	          </div>
	          <div class="border-top col-lg-9 justify-content-center p-0">
	            <div class="container">
	              <div class="row justify-content-center">
	                <div class="col-12 col-sm-10 col-md-8 col-lg-9 py-5 px-3">
	                  <div class=" row justify-content-center">
	                    <div class="col-8 col-sm-6 col-md-6 col-lg-4 col-md-4  text-center">
	                      <div id="uploadImg">
	                        <img v-bind:src="user.profilePic">
	                      </div>
	                      <div class="custom-file">
	                        <input type="file" class="custom-file-input" id="customFile"  @change="onFilePicked">
	                        <label class="custom-file-label shadow-none" for="customFile">Choose file</label>
	                      </div>
	                    </div>
	                  </div>
	                  <form class=" form-group py-4">
	                    <div class="p-0 mb-2">
	                      <label for="username" class="font-weight-bold m-0">Username</label>
	                      <input type="text" class="form-control rounded-0 shadow-none" id="username" v-model="user.username">
	                      <span class="text-danger" id="inputWarning1" style="font-size: 12px"></span>
	                    </div>
	                    <div class=" p-0 mb-2">
	                      <label for="fullname" class="font-weight-bold m-0">Fullname</label>
	                      <input type="text" class="form-control rounded-0 shadow-none border-top border-left border-right" id="fullname" v-model="user.fullname">
	                      <span class="text-danger" id="inputWarning2" style="font-size: 12px"></span>
	                    </div>
	                    <div class=" p-0 mb-2">
	                      <label for="birthday" class="font-weight-bold m-0">Birthday</label>
	                      <input class="form-control rounded-0 shadow-none border-top border-left border-right" type="date" v-model="user.birthday" id="birthday">
	                      <span class="text-danger" id="inputWarning3" style="font-size: 12px"></span>
	                    </div>
	                    <div class=" p-0 mb-2">
	                      <label for="gender" class="font-weight-bold m-0">Gender</label>
	                      <select class="form-control rounded-0 shadow-none border-top border-left border-right" v-model="user.gender" id="gender">
	                        <option>Male</option>
	                        <option>Female</option>
	                      </select>
	                      <span class="text-danger" id="inputWarning4" style="font-size: 12px"></span>
	                    </div>
	                    <div class=" p-0 mb-2">
	                      <label for="email" class="font-weight-bold m-0">Email</label>
	                      <input type="email" class="form-control rounded-0 shadow-none border-top border-left border-right" id="email" aria-describedby="emailHelp" v-model="user.email">
	                      <span class="text-danger" id="inputWarning5" style="font-size: 12px"></span>
	                    </div>
	                  </form>
	                  <div class="row">
	                    <div class="col text-right">
	                      <button type="submit" style="margin-right: 7px" class="btn btn-success rounded-0 font-weight-bold shadow-none" v-on:click="save">Save</button>
	                      <button type="submit" class="btn btn-warning rounded-0 font-weight-bold shadow-none">Cancel</button>
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
	data() {
		return {
			user : {
				profilePic: '',
				username: '',
				fullname: '',
				birthday: '',
				gender: '',
				email: ''
			},
			
			url: 'http://192.168.2.231:3000/v1/users',
			userUrl: 'http://192.168.2.231:3000/v1/editprofile/',
			avatarUrl: 'http://192.168.2.231:3000/v1/upload/'
		}
	},
	mounted() {
		const headers = {
			'Content-Tipe':'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
		}

		axios.get(this.url, headers).then(res => {
			// console.log(res.data.userData[5].userData.gender)
			console.log('data get:',res)
			// id = res.data.userData[5].docID;
			this.user.profilePic = res.data.userData[5].userData.avatar;
			this.user.username = res.data.userData[5].userData.username;
			this.user.fullname = res.data.userData[5].userData.fullname;
			this.user.birthday = res.data.userData[5].userData.birthday;
			this.user.gender = res.data.userData[5].userData.gender;
			this.user.email = res.data.userData[5].userData.email;
		})
	},
	methods : {
		save() {

			var username = document.getElementById('username');
			var fullname = document.getElementById('fullname');
			var birthday = document.getElementById('birthday');
			var gender = document.getElementById('gender');
			var email = document.getElementById('email');
			var inpWarning1 = document.getElementById('inputWarning1')
			var inpWarning2 = document.getElementById('inputWarning2')
			var inpWarning3 = document.getElementById('inputWarning3')
			var inpWarning4 = document.getElementById('inputWarning4')
			var inpWarning5 = document.getElementById('inputWarning5')

			if(this.user.username == "") {
				username.style.borderBottom = "3px solid red"
				inpWarning1.innerHTML = "field cannot be empty!"
			} else {
				username.style.borderBottom = "3px solid #28a745"
				inpWarning1.innerHTML = ""
			}

			if(this.user.fullname == "") {
				fullname.style.borderBottom = "3px solid red"
				inpWarning2.innerHTML = "field cannot be empty!"
			} else {
				fullname.style.borderBottom = "3px solid #28a745"
				inpWarning2.innerHTML = ""
			}

			if(this.user.birthday == "") {
				birthday.style.borderBottom = "3px solid red"
				inpWarning3.innerHTML = "field cannot be empty!"
			} else {
				birthday.style.borderBottom = "3px solid #28a745"
				inpWarning3.innerHTML = ""
			}

			if(this.user.gender == "") {
				gender.style.borderBottom = "3px solid red"
				inpWarning4.innerHTML = "field cannot be empty!"
			} else {
				gender.style.borderBottom = "3px solid #28a745"
				inpWarning4.innerHTML = ""
			}

			if(this.user.email == "") {
				email.style.borderBottom = "3px solid red"
				inpWarning5.innerHTML = "field cannot be empty!"
			} else {
				email.style.borderBottom = "3px solid #28a745"
				inpWarning5.innerHTML = ""
			}

			if(this.user.username != "" && this.user.fullname != "" && this.user.birthday != "" && this.user.gender != "" && this.user.email != "") {
				
				
				const headers = {

					'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6InZhbGlkIiwiaWF0IjoxNTQwMjA4NzY0LCJleHAiOjE1NDAyOTUxNjR9.j8yMWs9TLJ0Ex68HFEbKl5g9hrWnizpcVcN7ntVlDrs',
					'Content-Type':'Application/Json',
					'Accept':'Application/Json',
					'Access-Control-Allow-Methods':'PUT',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
				}

				const userData = {
					username: this.user.username,
					fullname: this.user.fullname,
					birthday: this.user.birthday,
					gender: this.user.gender,
					email: this.user.email
				}

				axios.put(this.userUrl, userData , headers).then(response=>{
					if(response.status === 200){
						console.log('Response', response)
					}
				}).catch(e=>{
					console.log('error', e.response);
					
				})
			}

			// const imgHeaders = {
			// 	'Content-Tipe':'multipart/form-data',
			// 	'Access-Control-Allow-Origin': '*',
			// 	'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
			// }

			// axios.post(this.url, this.user.profilePic , imgHeaders).then(response=>{
			// 	if(response.status === 200){
			// 		console.log('Response', response)
			// 	}else {
			// 		throw new Error("Error");
			// 		response.status = 200;
			// 	}
			// }).catch(e=>{
			// 	console.log('error', e.response);
			// 	if(e.status!=200){

			// 	}
			// })
		},
		onFilePicked(event) {
			const image = event.target.files[0];
			const fileReader = new FileReader()
			fileReader.readAsDataURL(image);
			fileReader.onload = (e) => {
				this.user.profilePic = e.target.result
			};

			console.log('ini gambar',image)

			var id = "7Ryf1HYsezQDwiOoXVsb"

			const params = {
				headers: {

					// 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6InZhbGlkIiwiaWF0IjoxNTQwMjA4NzY0LCJleHAiOjE1NDAyOTUxNjR9.j8yMWs9TLJ0Ex68HFEbKl5g9hrWnizpcVcN7ntVlDrs',
					'Content-Type':'multipart/form-data',
					'Accept':'multipart/form-data',
					'Access-Control-Allow-Origin': '*',
					// 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR'
					// 'Access-Control-Allow-Headers': 'Origin,X-Requested-With,Content-Type',
					// 'WithCrudentials': true
				}
				
			}

			axios.put(this.avatarUrl + id, image, params ).then(response => {
				if(response.status === 200){
					console.log('Response', response)
				}
			}).catch(e=>{
				console.log('error', e.response);
			})
		}
	}
}
</script>

<style>
	
#uploadImg {
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

#uploadImg img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
}

label.custom-file-label::after {
  display: none;
}
	
</style>