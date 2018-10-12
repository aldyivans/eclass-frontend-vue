import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Profile from './views/Profile.vue'
import Changepassword from './views/Changepassword.vue'
import Deactive from './views/Deactive.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: Changepassword
    },
    {
      path: '/deactive',
      name: 'deactive',
      component: Deactive
    }
  ]
})
