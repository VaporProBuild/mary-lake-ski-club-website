<!-- HomePage.vue -->

<template>
  <div id="homepage">
    <div class="image-header">
      <img class="front-logo" src="/Logos/logo.png" alt="Logo">
    </div>
    <!-- sticky Navigator -->
    <div class="center-text-box">
      <h3>Do you wanna be the best dressed on the Lake?</h3>
      <router-link class="shop-here" to="/Apparel">
        Shop Here
      </router-link>
    </div>
    <FooterBar/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import FooterBar from "../components/FooterBar.vue"

  export default defineComponent({
    components: {
      FooterBar
    }
  })
</script>

<style scoped>
.image-header {
  background-image: url('/Cool_Shots/drone_turning_shot.jpg');
  background-position: center center;
  background-size: cover;
  height: 60vh;
  text-align: center;
}

.shop-here {
  height: auto;
  width: auto;
  display: inline-block;
  padding: 10px 20px;
  background-color: #bdbdbd; /* Button background color */
  color: #fff; /* Button text color */
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 4s ease; 
}

.shop-here:hover {
  background-color: #3c3c3c; /* Change background color on hover */
}

.front-logo {
  min-height: 15vh;
  max-height: 20vw;
  padding-top: 10vh;
}

h3 {
  font-size: 30px;
  margin: 6%;
  margin-right: 8%;
  margin-left: 8%;
  line-height: 1.4;
}

</style>
