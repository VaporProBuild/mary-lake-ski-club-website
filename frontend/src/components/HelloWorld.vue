<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
<!DOCTYPE html>
<html>
  <head>
    <title>Mary Lake Ski Club</title>
		<link rel="stylesheet" href="style.css">
		<link rel="icon" href="../../public/Logos/MaryLakePatchFinalDraft.png" type="image/x-icon">
  </head>
  <body>
		<header class="front-page">
			<div style="text-align: center; padding-top: 170px;">
				<img src="../../public/Logos/logo.png" alt="Logo" style="width: 18%;">
				<h2 style="padding-top: 140px;">Wanna Join the Club?</h2>
			</div>
		</header>
		<content>
			<div>
				<h3>We are Mary Lake Ski Club, a group of University age best friends from Muskoka who spend our summer nights rushing home from work to catch an evening sunset ski. The slalom ski team consists of Brad, Teagen, David, Janine & Emily, but we love throwing photos up of our best friends who prefer other water sports too ;) We started skiing together summer of 2020 when hanging out indoors was a challenge, and we quickly became best friends & avid waterskiers. This insta is a fun way for us to share our summer adventures & favourite boat memories. Photos are taken mostly by @davo71, but also @emily.mcdougs, & a few from everyone. Thanks for following along as we countdown the days till summer!! 🌅🪩🕺🏼</h3>
			</div>
		</content>
		<footer>
			<h4 class="footer-text">More questions? Shoot us a Dm on the @marylakeskiclub insta or send Em a text. </h4>
		</footer>
  </body>
</html>
</template>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}


.front-page {
    background-image: url('../../public/Cool_Shots/drone_turning_shot.jpg');
    background-position: center center;
    background-size: cover;
    height: 100vh;
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
    background-image: url('../../public/Cool_Shots/drone_boat_blue.jpg');
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
