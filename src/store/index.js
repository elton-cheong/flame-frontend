import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import userService from '../services/user.service';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    campaigns: [],
    selectedcampaign: null

  },
  getters: {
    allcampaigns: state => state.campaigns
  },
  mutations:{
    SET_CAMPAIGNS(state, campaigns){
      state.campaigns = campaigns;
    },
    EDIT_CAMPAIGN(state, campaign){
      state.selectedcampaign = campaign;
    }
  },
  actions:{
    async loadCampaigns({ commit }, id){
      let response = await userService.getCampaigns(id);
          commit('SET_CAMPAIGNS', response.data);
          return Promise.resolve(response.data);
    },
    editCampaign({commit}, campaign){
      localStorage.setItem('selectedcampaign', campaign);
      commit('EDIT_CAMPAIGN', campaign);
      return Promise.resolve(campaign);
    }
  },
  modules: {
    auth
  }

});
