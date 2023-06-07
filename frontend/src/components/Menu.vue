<template>
  <div class="menu">
    <div class="img-container">
      <img id="logo-png" src="../../public/Logos/logo.png" alt="">
    </div>
    <div class="options">
      <div class="item">
        About
      </div>
      <div class="item">
        Apparel
      </div>
      <div class="item">
        Stickers
      </div>
      <div class="item">
        Pics
      </div>
      <div class="item">
        Join
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoverPage',
});
</script>

<style scoped>
.menu {
  background-color: rgb(87, 87, 87);
  height: 60vh;
}

.img-container {
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-png {
  height: 90%;
}

.options {
  display: flex;
  justify-content: center;
  border: black 1px solid;
}

.item {
  padding: 20px;

  margin-left: 20px;
  margin-right: 20px;

  border: blue 2px solid;
}

</style>
