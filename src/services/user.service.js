import { config } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = 'http://192.168.0.102:8080/api/test/';
const CAMPAIGN_API_URL = 'http://localhost:8081/api/v1/';
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getCampaigns(brandid){

    this.url = CAMPAIGN_API_URL + 'campaign/brand/' + brandid;
    return axios.create( {WithCredentials: false, 
      headers:{Accept:"application/json", "Content-Type":"application/json"}})
    .get(this.url)
    .then(response => {
      localStorage.setItem('campaigns', JSON.stringify(response.data));
  
      console.log('Campaign Object: ', response.data)
      return response;
    })
    .catch(error => {
      console.log('Error: ', error)
    });
  }

}

export default new UserService();
