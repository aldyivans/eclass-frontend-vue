<template>
  <div class="profile">
    <Blue/>
    <Profile/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Blue from '@/components/Blue.vue'
import Profile from '@/components/Profile/Profile.vue'

export default {
  name: 'profile',
  components: {
    Blue,
    Profile
  },
  data() {
    return {
      url: 'http://192.168.2.231:3000/v1/users/'
    }
  },
  mounted() {

  	console.log('hahaha')

    var EclassId = localStorage.getItem('ECLASS-id');

    if(!localStorage.getItem('EClassToken')) {
      this.$router.push('/')
    }

    const headers = {
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    }

    axios.get(this.url + EclassId, headers).then(res => {
      if(res.status === 200) {
        console.log('data user', res)
      }
    })
  }
}
</script>