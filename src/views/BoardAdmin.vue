/* eslint-disable no-console */
<template>
  <div class="container">
    <h3 class="header">
      <strong>{{currentUser.username}}</strong> Campaign List
    </h3>
    <v-container class="my-5">

      <v-card flat v-for="c in filterMainDto" :key="c.campaignId" class="campaignList">
        <v-layout row wrap class="campaignitem">
          <v-flex xs12 md2>
            <div class="caption grey--text">Campaign Title</div>
            <div>{{ c.campaignTitle }}</div>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <div class="caption grey--text">Description</div>
            <div>{{c.campaignDesc }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Created On</div>
            <div>{{c.campaignCreateDate }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip small :class="c.campaignStatus">{{convertToStatus(c.campaignStatus)}}</v-chip>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs2 sm4 md2>
            <router-link v-bind:to="'/Campaign/' + c.campaignId " 
              class="btn btn-sm" v-on:click="selectCampaign(c)">Edit</router-link>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'Admin',
  components:{
  },
  data: function (){
    return {
    };
  },
  created() {
      this.$store.dispatch('loadCampaigns',this.$store.state.auth.user.id);
  },
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
  methods:{
    parseData(data) {
      if (!data) return {};
      if (typeof data === 'object') return data;
      if (typeof data === 'string') return JSON.parse(data);
      return {};
    },
    isCampaignEmpty()
    {
      return true;
    },
    convertToStatus(campaignStatus){
      let status = '';
      switch (campaignStatus)
      {
        case 1: status='New'; break;
        case 2: status='Completed'; break;
        case 3: status='Ongoing'; break;
        default:
          status='New';
          
      }
      return status;
    },
    selectCampaign(campaign) {
      this.$store.dispatch('editCampaign', campaign);
      this.$router.push("/Campaign");
    },
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
.header {
  padding: 20px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
.campaignList{
  padding: 10px;
  text-align: center;
  background:white;
  color: black;
  font-size: 14px;
}
</style>