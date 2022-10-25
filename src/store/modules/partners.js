import api from "@/api"

export default {
  state: {
    partners: [],
    partner: {},
  },
  mutations: {
    SET_PARTNERS: function (state, partners){
      state.partners = partners
    },
    SET_PARTNER: function (state, partner){
      state.partner = partner
    },
    ADD_PARTNER: function (state, partner) {
      state.partners.unshift(partner)
    },
    REMOVE_PARTNER: function (state, id) {
      state.partners = state.partners.filter(partner => partner.id != id)
      //state.partners.splice(partner => partner.id, 1)
    },
  },
  actions: {
    getPartners: async function({commit}) {
      return new Promise((resolve, reject) => {
        api
          .getPartners()
          .then((data) => {
            data.partners.forEach(partner => {
              partner.module = 'partner'
            })
            commit('SET_PARTNERS', data.partners)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getPartner: async function({commit}, id) {
      return new Promise((resolve, reject) => {
        api
          .getPartner(id)
          .then((data) => {
            commit('SET_PARTNER', data.partner)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    registerPartner: async function({commit}, partner) {
      return new Promise((resolve, reject) => {
        api
          .registerPartner(partner)
          .then((res) => {
            partner.id = res.id
            commit('ADD_PARTNER', partner)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    editPartner: async function({commit}, partner) {
      return new Promise((resolve, reject) => {
        api
          .editPartner(partner.id, partner)
          .then(() => {
            commit('SET_PARTNER', partner)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    deletePartner: async function({commit}, id) {
      return new Promise((resolve, reject) => {
        api
          .deletePartner(id)
          .then(() => {
            commit('REMOVE_PARTNER', id)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {
  },
}