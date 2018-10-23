<template>
    <div class="container-fluid">
      <div class="container py-5">
        <div class="row justify-content-center">
		  <div class="col-12 col-lg-4 col-md-6 col-sm-8 p-0">
		      <h3 class="font-weight-bold text-center">Reset Password</h3>
		      <hr class="w-100">
		      <form>
		        <div class="form-group">
		          <label for="newPassword">New Password</label>
		          <input type="password" class="form-control rounded-0 shadow-none" ref="newPassword" v-model="password.new">
		          <span class="text-danger" style="font-size: 12px" ref="inputWarning1"></span>
		        </div>
		        <div class="form-group">
		          <label for="confirmNewPassword">Confrim New Password</label>
		          <input type="password" class="form-control rounded-0 shadow-none" ref="confirmNewPassword" v-model="password.confirmNew">
		          <span class="text-danger" style="font-size: 12px" ref="inputWarning3"></span>
		          <span class="text-danger" style="font-size: 12px" ref="inputWarning2"></span>
		        </div>
		        <button type="button" class="btn btn-primary btn-md btn-block rounded-0 font-weight-bold shadow-none" v-on:click="save">Save New Password</button>
		      </form>
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
			password : {
				new: '',
				confirmNew: ''
			},
			url: 'http://192.168.2.235:3000/v1/confirmation/'
		}
	},
	methods : {
		save() {

			var newPassword = this.$refs.newPassword;
			var confirmNewPassword = this.$refs.confirmNewPassword;
			var inputWarning1 = this.$refs.inputWarning1;
			var inputWarning2 = this.$refs.inputWarning2;
			var inputWarning3 = this.$refs.inputWarning3;

			if(this.password.new == '') {
				newPassword.style.borderBottom = "3px solid red"
				inputWarning1.innerHTML = "field cannot be empty!"
			} else {
				newPassword.style.borderBottom = "3px solid #28a745"
		        inputWarning1.innerHTML = ""
			}

			if(this.password.confirmNew == '') {
				confirmNewPassword.style.borderBottom = "3px solid red"
				inputWarning2.innerHTML = "field cannot be empty!"
			} else {
				confirmNewPassword.style.borderBottom = "3px solid #28a745"
		        inputWarning2.innerHTML = ""
		        if(this.password.confirmNew != this.password.new) {
		          confirmNewPassword.style.borderBottom = "3px solid red"
		          inputWarning2.innerHTML = "new password didn't match!"
		        }
			}

			if(this.password.new != "" && this.password.confirmNew != "" && this.password.confirmNew == this.password.new) {

			const params = {
			  headers : {
			    'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZLNGJkS0xrd0tnZHZCZnI4eTlaIiwiaWF0IjoxNTM5OTM2NDQwLCJleHAiOjE1NDAwMjI4NDB9.sK_b8h4LN0LbwHWWQ3haYv7wy2oYOGpNM_2En3WdjzY',
			    'Content-Type':'application/json',
			    'Accept': 'application/json',
			    'Access-Control-Allow-Origin': '*',
			    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
			  }
			}

			var dataUser = {
			  password: this.password.confirmNew
			}

			axios.put(this.url, dataUser, params).then(response => {
			  if(response.status === 200){
			    console.log('Response', response)
			  }
			}).catch(e=>{
			  console.log('error', e.response);
			})


			}
		}
	}
}
</script>

<style scoped>
</style>