export default {
    namespaced: true,
    state: {
        campaignList: []
    },
    getters: {
        itemCount: state => state.campaignList.reduce((total, campaignitem) =>
            total + campaignitem, 0),
    },
    mutations: {
    },
    actions: {
        
    }
}