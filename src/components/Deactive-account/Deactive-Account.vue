<template>
    <div class="deactive-account container-fluid">
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
                <li><router-link to="/profile">Profile</router-link></li>
                <li><router-link to="/changepassword">Change Password</router-link></li>
                <li><router-link to="/deactive">Deactive Account</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 border-top justify-content-center p-0">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12 col-sm-10 col-md-8 col-lg-9 py-5 px-3">
                  <h5 class="py-4">Are you sure want to deactive your account?</h5>
                  <div class="text-right">
                    <button v-on:click="save" class="btn btn-success rounded-0 font-weight-bold">Save</button>
                    <button class="btn btn-warning rounded-0 font-weight-bold">Cancel</button>
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

export default {
	data() {
		return {
			active: false
		}
	},
	methods:{
		save() {

		}
	}
}
</script>

<style scoped>
	

</style>