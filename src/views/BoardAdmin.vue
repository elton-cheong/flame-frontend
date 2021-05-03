<template>
  <div class="container">
    <v-container class="my-5">
      <v-layout row>
        <ul>
          <li>

          </li>
        </ul>
      <v-spacer></v-spacer>
      </v-layout>

      <v-card flat v-for="campaign in campaigns" :key="campaign.id" class="campaignlist">
        <v-layout row wrap :class="campaign.status">
          <v-flex xs12 md2>
            <div class="caption grey--text">Campaign Title</div>
            <div>{{ campaign.title }}</div>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">Description</div>
            <div>{{campaign.description}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Created On</div>
            <div>{{campaign.createDate}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip small :class="campaign.status">{{campaign.status}}</v-chip>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs2 sm4 md2>
            <router-link :to="{ name: 'Campaign', params:{ id: campaign.id } }">view</router-link>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>

import UserService from '../services/user.service';
//import BrandService from '../services/brand.service'

export default {

  name: 'Admin',
  components:{

  },
  data() {
    return {
      content: 'Admin Content',
      campaigns: [
        { id: 1, title: "Adidas Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
        { id: 2, title: "Nike Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
        { id: 3, title: "Ascis Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
        { id: 4, title: "XXX1 Clothing Apparels", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
        { id: 5, title: "XXX2 Electrical Applicances", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
        { id: 6, title: "XXX3 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
        { id: 7, title: "XXX4 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
        { id: 8, title: "XXX5 Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
        { id: 9, title: "XXX6 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
        { id: 10, title: "XXX7 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
        { id: 11, title: "XXX8 Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
        { id: 12, title: "XXX9 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
      ]
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }

    UserService.getAdminBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        
      }
    )
    // BrandService.getCampaigns(this.currentuser).then(
    //   response => {
    //     this.campaigns = response.data;
    //   },
    //   error => {
    //     this.content =
    //       (error.response && error.response.data && error.response.data.message) ||
    //       error.message ||
    //       error.toString();
        
    //   }
    // )
  }
};
</script>

<style>
.Completed{
  border-left: 10px solid #3cd1c2;
}
.New{
  border-left: 10px solid orange;
}
.Ongoing{
  border-left: 10px solid tomato;
}
.v-chip.Completed{
  background: #3cd1c2;
}
.v-chip.New{
  background: orange;
}
.v-chip.Ongoing{

  background: tomato;
}

.pa-3{
  border-block-start:0em;
  border-block-end: 0em;
  padding-inline: 2px;
}

.campaignlist{
  margin-top: 2em;
}
</style>
