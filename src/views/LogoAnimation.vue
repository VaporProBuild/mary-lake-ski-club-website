<template>
    <div id="logo-animation">
        <div class="shield"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'LogoAnimation',
});
</script>
  
<style scoped>
.shield {
  width: 20rem;
  height: 18rem;
  background-color: #000000;
  position: relative;
  border-bottom: 5px;
  border-radius: 0 0 10px 10px; /* Apply the border radius only to the bottom */
  clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%); /* Adjust the clip-path */
  border-radius: 10px;
  border: solid white 2px;
}


#logo-animation {
height: 100vh;
width: 100vw;
background-color: rgb(207, 207, 207);
overflow-y: hidden;
overflow-x: auto;
display: flex;
justify-content: center;
align-items: center;
}
</style>
