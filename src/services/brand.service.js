import axios from 'axios';

const API_URL = 'http://18.138.248.19:8080/api/v1/';

class BrandService {
    getAllCampaign(user) {
        return axios.post(API_URL + 'campaign/brand/', {id: user.id})
            .then(response => {
                if (response.data.accessToken) {localStorage.setItem('campaign', JSON.stringify(response.data));}
            return response.data;
        });
    }

    getCampaign(campaignId) {
        return axios.post(API_URL + 'campaign/brand/', {id: campaignId })
            .then(response => {
                if (response.data.accessToken) {localStorage.setItem('campaign', JSON.stringify(response.data));}
            return response.data;
        });
    }
    
    // logout() { 
    //     localStorage.removeItem('user'); 
    // }
    
    // newCampaign(user) {
    //     return axios.post(API_URL + 'brand', {campaign: campaign});
    // }
}

export default new BrandService();