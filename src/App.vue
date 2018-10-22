<template>
  <div id="app">
    <!-- Mobile Sidebar -->
    <div class="sidebar">
      <div class="sidebar-menu bg-light" id="sidebarMenu">
        <ul class="list-group">
          <li class="list-group-item active text-right rounded-0">
            <font-awesome-icon icon="times" size="lg" v-on:click="openSidebar" class="shadow-none" />
          </li>
          <router-link to="/login"><li class="list-group-item list-group-item-action font-weight-bold text-primary">Log In</li></router-link>
          <router-link to="/signup"><li class="list-group-item list-group-item-action font-weight-bold text-primary">Sign Up</li></router-link>
          <li class="list-group-item list-group-item-action d-flex justify-content-between font-weight-bold" v-on:click="openCategory">Categories<font-awesome-icon icon="chevron-down" size="lg" /></li>
          <li class="mobile-category list-group-item" id="mobileCategory">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href="#">Development</a></li>
              <li class="list-group-item"><a href="#">Design</a></li>
              <li class="list-group-item"><a href="#">Music</a></li>
              <li class="list-group-item"><a href="#">Business</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="sidebar-bg" id="sideBar">
      </div>
    </div>

    <!-- end -->

    <!-- Header -->

    <div class="header bg-light position-relative">
      <div class="navbar navbar-expand-lg align-items-center p-2">
        <button class="navbar-toggler shadow-none" type="button" v-on:click="openSidebar">
          <font-awesome-icon icon="bars" />
        </button>
        <div class="col-4 col-sm-3 col-lg-1 logo text-center text-lg-left">
          <router-link to="/"><h2>EClass</h2></router-link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <font-awesome-icon icon="search" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="col-lg-2 category d-none d-lg-block">

            <div class="dropdown">
              <button class="btn shadow-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
                <div class="category-header">
                  <font-awesome-icon icon="th" />
                  <span>Categories</span>
                </div>
              </button>
              <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                <li class="dropdown-submenu">
                  <a class="dropdown-item" tabindex="-1" href="#">Development</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" tabindex="-1" href="#">All Development</a></li>
                    <li class="dropdown-submenu">
                      <a class="dropdown-item" href="#">Programming</a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">HTML</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 my-4 my-lg-0">
            <div class="input-group border">
              <input type="text" class="form-control rounded-0 shadow-none" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn rounded-0 shadow-none" type="button" id="button-addon2">
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block" v-if="isLoggedIn">
              <div class="dropdown text-right">
                <button class="avatar" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img :src="profilePic">
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="editprofile.html">Profile</a>
                  <a class="dropdown-item" href="#">My Courses</a>
                  <a class="dropdown-item" href="index.html">Log Out</a>
                </div>
              </div>
            </div>
          <div class="col-lg-4 text-right user d-none d-lg-block" v-if="!isLoggedIn">
            <router-link to="/login" class="btn btn-warning rounded-0 font-weight-bold" style="margin-right: 7px">Login</router-link>
            <router-link to="/signup" class="btn btn-warning rounded-0 font-weight-bold">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- end -->

    <router-view/>

    <!-- footer -->

    <div class="footer p-0">
      <div class="footer-top">
        <div class="container-fluid">
          <div class="row p-5">
            <div class="col-lg-4 my-3">
              <h1>About e-Class</h1>
              <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>
            </div>
            <div class="col-lg-4 my-3">
              <h1>Follow Us</h1>
              <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>
            </div>
            <div class="col-lg-4 my-3">
              <h1>Does University</h1>
              <p>Soekamtiland, Area Sawah, Sidoarum, Godean, Sleman Regency, Special Region of Yogyakarta 55264</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container-fluid">
          <div class="wrapper">
            <span>2018 Does Programmer GEN 5. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name:"app",
    data () {
      return {
        profilePic: require('@/assets/tes.jpg'),
        isLoggedIn: false
      }
    },
    methods: {
      openSidebar() {
        var x = document.getElementById('sideBar');
        var y = document.getElementById('sidebarMenu');

        if (y.style.width == '70%' && x.style.display == 'block') {
          x.style.display = 'none';
          y.style.width = '0px';
        } else {
          x.style.display = 'block';
          y.style.width = '70%';
        }
      },

      openCategory() {
        var z = document.getElementById('mobileCategory');

        if (z.style.display == 'none') {
          z.style.display = 'block';
        } else {
          z.style.display = 'none';
        }
      },
    }
  }
  
</script>

<style>

/*Mobile Sidebar*/
.sidebar {
  width: 100%;
}

.sidebar-bg {
  width: 100%;
  z-index: 100;
  height: 100vh;
  position: fixed;
  background-color: #00000080;
  z-index: 20;
  display: none;
  transition: display .5s ease;
}

.sidebar-menu {
  position: fixed;
  width: 0px;
  height: 100vh;
  transition: width .5s ease;
  z-index: 30;
  overflow-y: scroll;
  box-shadow: 0 0 10px #000000
}

.mobile-category {
  display: none;
}

.mobile-category ul li a {
  color: #495057;
}

/*end*/

.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 20px #00000050;
  padding: 0;
  margin: 0;
}

.dropdown .btn {
  background-color: transparent;
}

.dropdown-submenu ul.dropdown-menu {
  border-radius: 0;
}

.dropdown-menu {
  border-radius: 0;
}

.btn .focus, .btn:focus {
  box-shadow: none;
}

.input-group:focus {
  border: 1px solid #ccc;
}

.input-group input, .input-group button {
  border: none;
  background-color: #fff;
}

.spacer {
  flex: 1;
}

.wrapper {
  display: flex;
  align-items: center;
}

.logo h2 {
  font-family: cursive;
  color: #228eff;
  font-weight: bold;
  margin: 0;
}
.logo a {
  padding: 0;
}

.logo a:hover {
  text-decoration: none;
}

.search input, .search button {
  display: flex;
  align-items: center;
}

.search input, .search button {
  padding: 10px;
  background-color: #e4e4e4;
}

.category {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.category ul {
  margin-bottom: 0;
}

.category ul li span {
  color: #000;
}

.category .category-header{
  display: flex;
  align-items: center;
}

.category .categoryspan {
  color: #818181;
  font-size: 16px;
}

.category svg {
  font-size: 25px;
  color: #c1c1c1;
  margin-right: 7px;
}

.search button:hover {
  background-color: #FFBD3A;
}

/*navbar avatar*/
.avatar img, .avatarSidebar img {
  width: 100%;
  position: absolute;
  justify-content: center;
  display: flex;
  top: 0;
  left: 0;

}
.avatar{
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.avatarSidebar {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.footer {
  width: 100%;
  padding: 0;
}

.footer-top {
  width: 100%;
  background-color: #0a172f;
  color: #fff;
  display: flex;
  justify-content: center;
}

.footer-top .wrapper {
  display: flex;
  justify-content: space-between;
}

.footer-top .wrapper .row {
  width: 30%;
  display: inline-block;
}

.footer-top .wrapper .row {
  padding: 40px 20px;
}

.footer-top .wrapper .row h1 {
  font-size: 26px;
  margin-bottom: 15px;
  font-weight: bold;
}

.footer-top .wrapper .row p {
  font-size: 16px;
  font-family: 'Playfair Display', serif;
}


.footer-bottom {
  width: 100%;
  background-color: #228eff;
  padding: 10px 0;
  color: #fff;
  display: flex;
  justify-content: center;
}

.footer-bottom span {
  font-size: 14px;
  font-weight: bold;
}

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}

.avatar img, .avatarSidebar img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);

}
.avatar{
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.avatarSidebar {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: inline-block;
  position: relative;
  overflow: hidden;
}


</style>
