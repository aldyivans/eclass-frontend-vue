<template>
	<div class="deactivate">
		 <div class=" container-fluid">
	      <div class="container">
	        <div class="row border my-5">
	          <div class="profile col-12 text-center p-2">
	            <h4 class="font-weight-bold m-0">Deactive Account</h4>
	            <p class="m-0">Deactive your account</p>
	          </div>
	          <div class="col-12 col-lg-3 p-0 border-right">
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
	          <div class="col-lg-9 border-top justify-content-center p-0">
	            <div class="container">
	              <div class="row justify-content-center ">
	                <div class="col-12 col-sm-10 col-md-8 col-lg-9 py-5 px-3">
	                  <h5 class="pb-5 mb-5">Are you sure want to deactive your account?</h5>
	                  <div class="text-right py-5">
	                    <button ttype="button" class="btn btn-success rounded-0 font-weight-bold mr-1" v-on:click="save">Save</button>
	                    <button class="btn btn-warning rounded-0 font-weight-bold">Cancel</button>
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
		data(){
			return {
				url: 'http://192.168.2.235:3000/v1/deactivate'
			}
		},
		methods: {
			save() {

				var params = {
					headers : {
						'x-access-token': localStorage.getItem('EClassToken'),
						'Content-Type':'Application/Json',
						'Accept':'Application/Json',
						'Access-Control-Allow-Origin': '*'
					}
				}
				var dataUser = {
					active: false
				}
				axios.put(this.url, dataUser, params).then((response,err)=>{
					if(response.status === 200){
						console.log("Response:", response)
						alert('Account is Deactivate')
						localStorage.clear();
				        this.$root.$emit('isLoggedOut');
				        this.isLoggedIn = false;
						this.$router.push('/')						
					}else {
						console.log("Error", err)
					}
				}).catch(e=>{
					console.log('error', e.response)
				})
			}
		}
	}
</script>