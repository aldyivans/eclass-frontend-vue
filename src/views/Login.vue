<template>
  <div class="login">
    <Blue/>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'

export default {
  name: 'login',
  components: {
    Blue
  },
  methods: {
    onSignIn(googleUser) {
		  var profile = googleUser.getBasicProfile();
		  console.log('TOKEN: ' + googleUser.getAuthResponse().id_token);
		  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		  console.log('Name: ' + profile.getName());
		  console.log('Image URL: ' + profile.getImageUrl());
		  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
		}
  }
}
</script>
