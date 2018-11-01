<template>
  <div class="home">
    <Carousel/>
    <Blue/>
    <MyCourses v-if="isLoggedIn"/>
    <NewCourses/>
    <PopularCourses/>
    <TopCategories/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Carousel from '@/components/Home/Carousel.vue'
import Blue from '@/components/Blue.vue'
import MyCourses from '@/components/Home/MyCourse.vue'
import NewCourses from '@/components/Home/NewCourses.vue'
import PopularCourses from '@/components/Home/PopularCourses.vue'
import TopCategories from '@/components/Home/TopCategories.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    Blue,
    MyCourses,
    NewCourses,
    PopularCourses,
    TopCategories
  },
  data() {
    return {
      userUrl: 'http://192.168.2.231:3000/v1/users/',
      courseUrl: 'http://192.168.2.231:3000/v1/course/',
      isLoggedIn: false
    }
  },
  mounted() {

    var self = this;

    this.$root.$on('isLoggedOut', function(){
      console.log('isLoggedOut dari app')
      self.isLoggedIn = false;
    })

    // this is checker 2

    if(localStorage.getItem('EClassToken')) {
      self.isLoggedIn = true
    }

    var EclassId = localStorage.getItem('ECLASS-id');
    var courseId = "H3RAI8dHUMYSkvCmIPGa"
    
    const headers = {
      'Content-Type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
    }

    axios.get(this.userUrl + EclassId, headers).then(res => {
      if(res.status === 200) {
        console.log('data user', res)
      }
    })
  }
}
</script>
