<template>
  <div class="deactive">
    <Blue/>
    <Deactivate/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'
import Deactivate from '@/components/Deactivate/Deactivate.vue'

export default {
  name: 'deactive',
  components: {
    Blue,
    Deactivate
  }
}
</script>
