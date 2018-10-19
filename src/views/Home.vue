<template>
  <div class="home">
    <Carousel/>
    <Blue/>
    <NewCourses/>
    <PopularCourses/>
    <TopCategories/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Home/Carousel.vue'
import Blue from '@/components/Blue.vue'
import NewCourses from '@/components/Home/NewCourses.vue'
import PopularCourses from '@/components/Home/PopularCourses.vue'
import TopCategories from '@/components/Home/TopCategories.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Blue,
    NewCourses,
    PopularCourses,
    TopCategories
  }
}
</script>
