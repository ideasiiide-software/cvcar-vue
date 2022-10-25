import { firebase } from "@/firebase"

export default {
  state: {
    ads: [],
    ad: {},
  },
  mutations: {
    SET_ADS: function (state, ads){
      state.ads = ads
    },
    SET_AD: function (state, ad){
      state.ad = ad
    },
    ADD_AD: function (state, ad) {
      state.ads.unshift(ad)
    },
    REMOVE_AD: function (state, id) {
      state.ads = state.ads.filter(ad => ad.id != id)
    }
  },
  actions: {
    getAds: async function({commit}) {
      try {
        const res = await firebase.database().ref().child('ad').once('value')
        let arr = []
        res.forEach(snap => {
          arr.push({...snap.val(), id: snap.key, module: 'ad'});
        })
        commit('SET_ADS', arr)
      } catch(err) {
        console.log(err)
        return err
      }
    },
    registerAd: async function({commit}, ad) {
      try {
        await firebase.database().ref().child('ad').child(ad.pi).set(ad)
        commit('ADD_AD', ad)
      } catch(err) {
        console.log(err)
        return err
      }
    },
    deleteAd: async function({commit}, id) {
      try {
        await firebase.database().ref().child('ad').child(id).remove()
        commit('REMOVE_AD', id)
      } catch(err) {
        console.log(err)
        return err
      }
    },
  },
  getters: {
  },
}