<!-- HomePage.vue -->

<template>
  <div id="homepage">
    <div class="image-header">
        <img class="front-logo" src="/Logos/logo.png" alt="Logo">
    </div>
    <!-- sticky Navigator -->
    <content>
      <div class="center-text-box">
        <h3>Do you wanna be the best dressed on the Lake? 🌅🪩🕺🏼</h3>
        <router-link to="/other-page">Click here to go to another page on the site

        </router-link>
      </div>
    </content>
    <footer>
      <h4 class="footer-text">More questions? Shoot us a Dm on the @marylakeskiclub insta or send Em a text. </h4>
    </footer>
  </div>
</template>

<style scoped>
.image-header {
  background-image: url('../../public/Cool_Shots/drone_turning_shot.jpg');
  background-position: center center;
  background-size: cover;
  height: 60vh;
  text-align: center;
}

.front-logo {
  min-height: 15vh;
  max-height: 20vw;
  padding-top: 10vh;
}

h2 {
    font-size: 40px;
    color: orange;
}

h3 {
    font-size: 30px;
    margin: 6%;
    margin-right: 8%;
    margin-left: 8%;
    line-height: 1.4;
}

footer {
    background-image: url('../../public//Cool_Shots/drone_boat_blue.jpg');
    background-position: center center;
    background-size: cover;
    height: 33vh;
}
.footer-text {
    color: white;
    text-align: center;
    padding-top: 200px;
}
</style>
