<template>
  <div>
    <img :src="latestPost.image" :alt="latestPost.caption" v-if="latestPost">
    <p v-else>No posts found with the hashtag "marylakeskiclub"</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
}

export default defineComponent({
  name: 'LatestInstagramPost',

  data() {
    return {
      latestPost: null as InstagramPost | null,
    };
  },

  async created() {
    const INSTAGRAM_ACCESS_TOKEN = '<YOUR_INSTAGRAM_ACCESS_TOKEN>';
    const INSTAGRAM_API_URL = `https://api.instagram.com/v1/tags/marylakeskiclub/media/recent?access_token=${INSTAGRAM_ACCESS_TOKEN}`;

    try {
      const response = await axios.get(INSTAGRAM_API_URL);

      if (response.status === 200) {
        const data = response.data;
        const latestPost = data.data[0];

        this.latestPost = {
          id: latestPost.id,
          image: latestPost.images.standard_resolution.url,
          caption: latestPost.caption.text,
        };
      }
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
