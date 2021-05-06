/* eslint-disable no-console */
<template>
  <div class="container">
    <v-container class="my-5">
      <v-btn @click="getCampaigns(currentUser.id)">Get Campaign</v-btn>
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
      <p>
      <strong>Id:</strong>
      {{currentUser.id}}
      </p>
      <p>URL: {{this.url}}</p>
      <p>Campaign DTO: {{this.campaignDataList}}</p>
      <div v-for="campaign in campaignDataList" :key="campaign.id" class="campaign-data">
        <div>
          <span>Id: {{campaign.campaignId}}</span>
        </div>
        <div>
          <span>Title: {{campaign.campaignTitle}}</span>
        </div>
        <div>
          <span>Description: {{campaign.campaignDesc}}</span>
        </div>
        <div>
          <span>Date Created: {{campaign.campaignCreateDate}}</span>
        </div>
        <div>
          <span>Status: {{campaign.campaignStatus}}</span>
        </div>
      </div>
      <!-- <v-layout row v-if="isCampaignEmpty">
        <ul>
          <li>

          </li>
        </ul>
      <v-spacer></v-spacer>
      </v-layout> -->

      
    </v-container>

  </div>
</template>

<script>
import axios from 'axios';

//const baseUrl = 'http://18.138.248.19:8080/';
const baseUrl = 'http://localhost:8081/';
//import UserService from '../services/user.service';
// import BrandService from '../services/brand.service'

export default {


  name: 'Admin',
  components:{

  },
  data: function() {
    return {
      content: 'Admin Content',
      errored: false,
      loading: false,
      campaignDataList: null,
      url: ''
      // campaigns: [
      //   { id: 1, title: "Adidas Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
      //   { id: 2, title: "Nike Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
      //   { id: 3, title: "Ascis Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
      //   { id: 4, title: "XXX1 Clothing Apparels", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
      //   { id: 5, title: "XXX2 Electrical Applicances", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
      //   { id: 6, title: "XXX3 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
      //   { id: 7, title: "XXX4 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
      //   { id: 8, title: "XXX5 Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
      //   { id: 9, title: "XXX6 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
      //   { id: 10, title: "XXX7 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "5/5/2021", status: "New" },
      //   { id: 11, title: "XXX8 Shoes", description: "Advertisement for Clothings, Influencer has to create own instagram and FB", createDate: "1/5/2021", status: "Ongoing"},
      //   { id: 12, title: "XXX9 Shoes", description: "Advertisement for Shoes, Influencer has to create own instagram and FB", createDate: "15/4/2021", status: "Completed"},
      // ]
    };
  },
  created() {


    
  },
  mounted() {
    // axios
    //   .get('http://localhost:8081/api/v1/campaign/brand/' + this.currentUser.id)
    //   .then(response => (this.campaigns = response.data))
    // axios
    //   .get('http://localhost:8081//api/v1/campaign/brand/' + this.currentUser.id)
    //   .then(response => {
    //     this.campaigns = response.data
    //   })
    //   .catch(error => {
    //     // eslint-disable-next-line no-console
    //     console.log(error)
    //     this.errored = true
    //   })
    //   .finally(() => this.loading = false)
    
      // this.$http.get('http://localhost:8081//api/v1/campaign/brand/' + this.currentUser.id).then(function(data){
          
      //     this.campaigns = data;
      // })

    // UserService.getAdminBoard().then(
    //   response => {
    //     this.content = response.data;
    //   },
    //   error => {
    //     this.content =
    //       (error.response && error.response.data && error.response.data.message) ||
    //       error.message ||
    //       error.toString();
        
    //   }
    // )
    // let url = baseUrl + 'campaign/brand/1';
    // axios.get(url).then(resp => {
    // console.log(`HTTP Response: ${resp.status}, ${resp.statusText}`);
    // console.log(`Response Data: ${resp.data.length} items`);
    // });

    // if (!this.currentUser) {
    //   this.$router.push('/login');
    // }

  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods:{
    processCampaigns(){

    },
    getCampaigns(id){
      this.url = baseUrl + 'api/v1/campaign/brand/' + id;
      axios.get(this.url).then(resp => {
        console.log(`HTTP Response: ${resp.status}, ${resp.statusText}`);
        console.log(`Response Data: ${resp.data.length} items`);
        this.campaignDataList = resp.data;

        // console.log(resp.data);
        // console.log(resp.status);
        // console.log(resp.statusText);
        // console.log(resp.headers);
        // console.log(resp.config);
        
      }).catch(error => {
        console.log(error)
        this.errored = true
      })
    },
    isCampaignEmpty()
    {
      return false;
    }
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
