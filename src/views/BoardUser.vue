<template>
  <div class="container">
    <header class="jumbotron">
      <h3>Latest Campaign</h3>
    </header>
    <div class="block latestPostBlock">
      <v-container>
        <!-- <h2 class="text-center">Latest Campaign</h2> -->
        <v-row>
          <v-col v-for="campaign in filterMainDto" :key="campaign.campaignId" cols="12" md="4">
            <v-card outlined class="mx-auto">
              <v-img class="white--text align-end" height="200px">
                <v-card-title>{{ campaign.campaignTitle }}</v-card-title>
              </v-img>
              <!-- <v-card-subtitle class="pb-0">{{ campaign.subtitle }}</v-card-subtitle> -->
              <v-card-text class="text--primary">
                <div>{{ campaign.campaignDesc }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" text>More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'User',
  data: () => ({
    show: false,
    images: [
      'https://picsum.photos/id/230/600/300',
      'https://picsum.photos/id/231/600/300',
      'https://picsum.photos/id/232/600/300',
    ],
    items: [
       {
        id: 1,
        title: "Top western road trips",
        subtitle: "1,000 miles of wonder",
        description: "His ubique laboramus ne. Expetenda assueverit sed ad. Id nec malis lucilius delicatissimi. Nec assum sonet suscipit ex, diam deterruisset ut usu, ad dicat fabellas aliquando eam.",
        src: require("../assets/images/img10.jpg")
      },
      {
        id: 2,
        title: "Christmas tales to read",
        subtitle: "2,000 miles of wonder",
        description: "Sea ad habemus assueverit, omnes platonem convenire sit et, at integre pericula quo. Facete adolescens definitionem cu qui, in putant aliquid fierent ius.",
        src: require("../assets/images/img11.jpg")
      },
      {
        id: 3,
        title: "20 movies not to miss in 2020",
        subtitle: "3,000 miles of wonder",
        description: "Aliquam albucius mei ei, debitis torquatos et pro, eos natum scribentur no. Putant verear constituto te qui. Adolescens persequeris vim ei. Vel nullam reprimique te.",
        src: require("../assets/images/img12.jpg")
      }
    ]
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    campaignDataList (){
      return this.$store.state.campaigns;
    },
    filterMainDto(){
      let mainDto = [];
      for (let i=0; i<this.campaignDataList.length; i++){
        mainDto.push(this.campaignDataList[i].campaignMainDto)
      }
      return mainDto;
    },
    filterDetailDto(){
      let detailDto = [];
      for (let i=0; i<this.campaignDataList.length; i++){
        detailDto.push(this.campaignDataList[i].campaignDetailDto)
      }
      return detailDto;
    },

  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }

    UserService.getUserBoard().then(
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
