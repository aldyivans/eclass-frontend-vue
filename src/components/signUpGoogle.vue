<template>
    <div class="signUpGoogle">

        <div id="google-signin-btn"></div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Blue from '@/components/Blue.vue'
  import axios from 'axios'

  
  export default {
    name: 'signUpGoogle',
    components: {
      Blue
    },
    data(){
        return {
            url: "http://192.168.2.225:3000/register"
        }
    },
    mounted: function() {
        gapi.signin2.render('google-signin-btn', { // this is the button "id"
        onsuccess: this.onSignIn // note, no "()" here
      })
    },
    methods: {
      onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            var token = googleUser.getAuthResponse().id_token;
            var id = profile.getId();
            var name = profile.getName();
            var imageUrl = profile.getImageUrl();
            var email = profile.getEmail();

            console.log('TOKEN: ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            
            var signUpGoogleUser = {
                token: token,
                username: name,
                avatar: imageUrl,
                email: email,
                fullname: "",
                birthday: "",
                gender: "",
                google_id: id,
                role: "",
                token_expired: "",
                active: true,
                verified:false
            }
            var params = {
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Allow-Origin': '*',
                    'Accept': 'application/json'
                }
            }
            axios.post(this.url, signUpGoogleUser).then(response =>{
                if (response === 200) {
                    console.log(response);
                } else {
                    throw new Error("ERROR");
                }
            })
          }
    }
  }
  </script>
  