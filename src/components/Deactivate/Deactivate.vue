<template>
	<div class="deactivate">
		 <div class=" container-fluid">
	      <div class="container">
	        <div class="row border my-5">
	          <div class="profile col-12 text-center p-2">
	            <h1 class="font-weight-bold">Deactive Account</h1>
	            <p>Deactive your account</p>
	          </div>
	          <div class="col-12 col-lg-3 p-0 border-right">
	            <div class="border-bottom border-top p-3">
	              <h5 class="font-weight-bold m-0">ATHIX MUBAROCK</h5>
	            </div>
	            <div class="p-3">
	              <ul class="list-unstyled font-weight-bold">
	                <li><a href="editprofile.html">Profile</a></li>
	                <li><a href="changepassword.html">Change Password</a></li>
	                <li><a href="deactive-account.html">Deactive Account</a></li>
	              </ul>
	            </div>
	          </div>
	          <div class="col-lg-9 border-top justify-content-center p-0">
	            <div class="container">
	              <div class="row justify-content-center">
	                <div class="col-12 col-sm-10 col-md-8 col-lg-9 py-5 px-3">
	                  <h5 class="py-4">Are you sure want to deactive your account?</h5>
	                  <div class="text-right">
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
	import router from '../router.js'
	import VueAxios from 'vue-axios'
	import axios from 'axios'
	import Vue from 'vue'
	Vue.use(VueAxios, axios)

	export default {
		data(){
			return {
				url: 'http://192.168.2.235:3000/deactivate'
			}
		},
		methods: {
			save() {

				var params = {
					headers : {
						'Content-Type': 'application/json',
						'Accept': 'application/json;charset=UTF-8',
						'Access-Control-Allow-Origin': '*',
						'X-Auth-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJRVGw0VENvZkR1c25DZ2oyTW12IiwiaWF0IjoxNTM5Nzg3OTk1LCJleHAiOjE1Mzk5NjA3OTV9.LanYaJ7dFcoK34C3-zTd3pAci8akwYkMQAbbeB0oS08"
					}
				}
				var dataUser = {
					active: false
				}
				axios.put(this.url, dataUser, params).then((response,err)=>{
					if(response.status === 200){
						console.log("Response:", response)
						alert('Account is Deactivate')
						this.$router.push('/')						
					}else {
						console.log("Error", err)
					}
				}).catch(e=>{
					console.log('catch', e.response)
				})
			}
		}
	}
</script>