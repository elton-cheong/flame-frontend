<template>
    <div class="container-fluid">
    <h3 class="header mt-6">
      <p>Campaign</p> 
    </h3>
    <v-container class="mt-5">
      <div>
      <!-- <h3 class="btn-primary text-center text-white p-2">
      {{ editing ? "Edit" : "Create"}}
      </h3> -->
      <div class="form-group">
      <label>{{currentUser.username}}</label>
      <!-- <input class="form-control" v-model="selectedCampaign.campaignId" /> -->
      </div>
      <!-- <div class="form-group">
      <label>Title</label>
      <input class="form-control" v-model="selectedCampaign.campaignTitle" />
      </div>
      <div class="form-group">
      <label>Description</label>
      <input class="form-control" v-model="selectedCampaign.campaignDesc" />
      </div>
      <div class="form-group">
      <label>Date Created</label>
      <input class="form-control" v-model.number="selectedCampaign.campaignCreateDate" />
      </div>
      <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
      {{ editing ? "Save" : "Create" }}
      </button>
      <router-link to="/" class="btn btn-secondary">Cancel</router-link>
      </div> -->
      </div>
            <v-card flat v-for="c in filterMainDto" :key="c.campaignId" class="campaignList">
        <v-layout row wrap class="campaignitem" v-if="c.campaignId[0]===currentUser.id">
          <v-flex xs12 md2>
            <div class="caption grey--text" >Campaign Title</div>
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
      content: 'Admin Content',
      url: '',
      campaign: null
      
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
  
    /*name: 'Campaign',
    data: function (){
      return {
        campaign: '',
      }

    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      selectedCampaign (){
        return this.$store.state.editCampaign;
      },
    },
    methods: {

        // async save() {
        // await this.$store.dispatch("saveProductAction", this.product);
        // this.$router.push("/");
        // this.product = {};
        // },
        selectCampaign() {
          if (this.$route.path == "/create") {
          this.editing = false;
          this.campaign = {};
        } else {
          let CampaignId = this.$route.params.id;
          let selectedCampaign
          = this.$store.state.campaigns.find(c => c.campaignId == CampaignId);
          this.campaign = {};
          Object.assign(this.campaign, selectedCampaign);
          this.editing = true;
        }
      }
    },*/

  }
  
</script>

<style>

</style>