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
    },
    editCampaign({commit}, campaign){
      localStorage.setItem('selectedcampaign', campaign);
      commit('EDIT_CAMPAIGN', campaign);
    }
  },
  modules: {
    auth
  }

});
