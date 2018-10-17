<template>
  <div class="Signup">
    <Blue/>
    <signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'

import signup from '@/components/signUpGoogle.vue'

export default {
  name: 'Signup',
  components: {
    Blue,
    signup
  }
}
</script>
