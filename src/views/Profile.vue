<template>
  <div class="profile">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'profile',
  components: {
    HelloWorld
  }
}
</script>
