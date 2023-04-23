<script setup lang="ts">

</script>

<template>
  <div id="homepage">
    <div class="front-page">
      <img class="front-logo" src="../../public/Logos/logo.png" alt="Logo">
    </div>
    <content>
      <div>
        <h3>We are Mary Lake Ski Club, a group of University age best friends from Muskoka who spend our summer nights rushing home from work to catch an evening sunset ski. The slalom ski team consists of Brad, Teagen, David, Janine & Emily, but we love throwing photos up of our best friends who prefer other water sports too ;) We started skiing together summer of 2020 when hanging out indoors was a challenge, and we quickly became best friends & avid waterskiers. This insta is a fun way for us to share our summer adventures & favourite boat memories. Photos are taken mostly by @davo71, but also @emily.mcdougs, & a few from everyone. Thanks for following along as we countdown the days till summer!! 🌅🪩🕺🏼</h3>
      </div>
    </content>
    <footer>
      <h4 class="footer-text">More questions? Shoot us a Dm on the @marylakeskiclub insta or send Em a text. </h4>
    </footer>
  </div>
</template>

<style scoped>
.front-page {
  background-image: url('../../public/Cool_Shots/drone_turning_shot.jpg');
  background-position: center center;
  background-size: cover;
  height: 700px;
  text-align: center;
}

.front-logo {
  min-width: 200px;
  max-width: 20vw;
  padding-top: 170px;
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
