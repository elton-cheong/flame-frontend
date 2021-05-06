<template>
    <div class="container-fluid">
    <h3 class="header">
      <p>Campaign</p> 
    </h3>
    <v-container class="my-5">
      <div>
      <!-- <h3 class="btn-primary text-center text-white p-2">
      {{ editing ? "Edit" : "Create"}}
      </h3> -->
      <div class="form-group">
      <label>Brand ID</label>
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

    </v-container>
    <router-link to="/admin">back</router-link>
  </div>
</template>

<script>
export default {
    name: 'Campaign',
    data: function (){
      return {
        campaign: null
      }

    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      selectedCampaign (){
        return this.$store.state.editCampaign;
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
    },

  }

}
</script>

<style>

</style>