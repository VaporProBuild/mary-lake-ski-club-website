<template>
  <div id="cover-page">
    <Menu/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Menu from '../components/Menu.vue';

export default defineComponent({
  name: 'CoverPage',
  components: {
    Menu,
  },
});
</script>

<style scoped>
#cover-page {
  height: 100vh;
  width: 100vw;
  background-color: rgb(113, 113, 113);
  overflow-y: hidden;
  overflow-x: auto;
}
</style>
