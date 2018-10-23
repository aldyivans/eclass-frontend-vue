<template>
  <div class="profile">
    <Blue/>
    <Profile/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'
import Profile from '@/components/Profile/Profile.vue'

export default {
  name: 'profile',
  components: {
    Blue,
    Profile
  }
}
</script>