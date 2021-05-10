<template>
  <div class="container">
  <v-carousel class="mt-2">
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
            <v-img
              src="../../src/assets/social1.jpg"
              max-width="100%"
              max-height="100%"
              class="grey darken-4"
            ></v-img>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
            <v-img
              src="../../src/assets/social2.jpg"
              max-width="100%"
              max-height="100%"
              class="grey darken-4"
            ><p class="pl-14 mt-14 text-left font-weight-bold" >.</p><p class="pl-14 mt-14 text-left font-weight-bold" style="font-size:24pt ">
                      {{ items[1].text }}
                    </p></v-img>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
            <v-img
              src="../../src/assets/social3.jpg"
              max-width="100%"
              max-height="100%"
              class="grey darken-4"
            ><p class="pl-14 mt-14 text-left font-weight-bold" >.</p><p class="pl-14 mt-14 text-left font-weight-bold" style="font-size:24pt ">
                      {{ items[2].text }}
                    </p></v-img>
    </v-carousel-item>
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
            <v-img
              src="../../src/assets/social4.jpeg"
              max-width="100%"
              max-height="100%"
              class="grey darken-4"
            ><p></p><p class="pl-14 mt-14 text-left font-weight-bold" style="font-size:24pt ">
                      {{ items[3].text }}
                    </p></v-img>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: '',
      items: [
          {
            text:'Promote your Brand',
          },
          {
            text:'Navigate your way in the world of Influencers',
          },
          {
             text:'Marketing with Social Media',
          },
          {
             text:'Massive Brand Exposure',
          },
        ],
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
