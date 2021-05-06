import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';
const CAMPAIGN_API_URL = 'http://18.138.248.19:8080/api/v1/';
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getAllCampaign(id) {
    return axios.get(CAMPAIGN_API_URL + 'campaign/brand/' + id, { headers: authHeader() });
  
  }
}

export default new UserService();
