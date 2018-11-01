<template>
    <div class="container-fluid">
      <div class="container">
        <div class="row border my-5">
          <div class="profile col-12 text-center p-2">
            <h4 class="m-0 font-weight-bold">Change Password</h4>
            <p class="m-0">Edit your account and Change your Password</p>
          </div>
          <div class="col-lg-3 p-0 border-right">
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
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-10 col-md-8 col-lg-9 py-5 px-3">
                    <form class=" form-group py-4">
                      <div class=" p-0 mb-2">
                        <label for="current-password" class="font-weight-bold m-0">Current Password</label>
                        <input type="password" class="form-control rounded-0 shadow-none" v-model="password.current" ref="currentPassword">
                        <span class="text-danger" style="font-size: 12px" ref="inputWarning1"></span>
                      </div>
                      <div class=" p-0 mb-2">
                        <label for="New Password" class="font-weight-bold m-0">New Password</label>
                        <input type="password" class="form-control rounded-0 shadow-none" v-model="password.new" ref="newPassword">
                        <span class="text-danger" style="font-size: 12px" ref="inputWarning2"></span>
                      </div>
                      <div class=" p-0 mb-2">
                        <label for="confirm-new-password" class="font-weight-bold m-0">Confirm New Password</label>
                        <input type="password" class="form-control rounded-0 shadow-none" v-model="password.confirmNew" ref="confirmNewPassword">
                        <span class="text-danger" style="font-size: 12px" ref="inputWarning3"></span>
                      </div>
                    </form>
                    <div class="row">
                      <div class="col text-right">
                        <button type="submit" class="btn btn-success rounded-0 font-weight-bold shadow-none" style="margin-right: 7px" v-on:click="save">Save</button>
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
			password : {
				current: '',
				new: '',
				confirmNew: ''
			},
      url: 'http://192.168.2.225:3000/changepassword'
		}
	},
	methods : {
		save() {

      console.log(this.password.current)

			var x = this.$refs.currentPassword;
			var y = this.$refs.newPassword;
			var z = this.$refs.confirmNewPassword;
			var inpWarning1 = this.$refs.inputWarning1;
			var inpWarning2 = this.$refs.inputWarning2;
			var inpWarning3 = this.$refs.inputWarning3;

      if(this.password.current == "") {
        x.style.borderBottom = "3px solid red"
        inpWarning1.innerHTML = "field cannot be empty!"
      } else {
        x.style.borderBottom = "3px solid #28a745"
        inpWarning1.innerHTML = ""
        // if(this.password.current != this.password.currentPassword) {
        //   x.style.borderBottom = "3px solid red"
        //   inpWarning1.innerHTML = "didn't match with your current password!"
        // }
      }

      if(this.password.new == "") {
        y.style.borderBottom = "3px solid red"
        inpWarning2.innerHTML = "field cannot be empty!"
      } else {
        y.style.borderBottom = "3px solid #28a745"
        inpWarning2.innerHTML = ""
        if(this.password.new.length < 8) {
          y.style.borderBottom = "3px solid red"
          inpWarning2.innerHTML = 'Your password must be between 8 - 15 characters'
        } else if(this.password.new.length > 15) {
          y.style.borderBottom = "3px solid red"
          inpWarning2.innerHTML = 'Your password must be between 8 - 15 characters'
        }
      }

      if(this.password.confirmNew == "") {
        z.style.borderBottom = "3px solid red"
        inpWarning3.innerHTML = "field cannot be empty!"
      } else {
        z.style.borderBottom = "3px solid #28a745"
        inpWarning3.innerHTML = ""
        if(this.password.confirmNew != this.password.new) {
          z.style.borderBottom = "3px solid red"
          inpWarning3.innerHTML = "new password didn't match!"
        }
      }

      if(this.password.current != "" && this.password.new != "" && this.password.confirmNew != "" && this.password.confirmNew == this.password.new) {
        
        const params = {
          headers : {
            'x-access-token': localStorage.getItem('EClassToken'),
            'Content-Type':'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
          }
        }

        var dataUser = {
          current_password: this.password.current,
          new_password: this.password.confirmNew
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