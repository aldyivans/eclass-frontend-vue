<template>
  <div class="changepassword">
    <Blue/>
    <ChangePassword/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'
import ChangePassword from '@/components/ChangePassword/ChangePassword.vue'

export default {
  name: 'changepassword',
  components: {
    Blue,
    ChangePassword
  },
  mounted() {
  	if(!localStorage.getItem('EClassToken')) {
      this.$router.push('/')
    }
  }
}
</script>
