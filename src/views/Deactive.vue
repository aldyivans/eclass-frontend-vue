<template>
  <div class="deactive">
    <Blue/>
    <DeactiveAccount/>
  </div>
</template>

<script>
// @ is an alias to /src
import Blue from '@/components/Blue.vue'
import DeactiveAccount from '@/components/Deactive-account/Deactive-Account.vue'

export default {
  name: 'deactive',
  components: {
    Blue,
    DeactiveAccount
  }
}
</script>
