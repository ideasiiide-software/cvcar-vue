import api from "@/api"

export default {
  state: {
    vehicles: [],
    vehicle: {},
  },
  mutations: {
    SET_VEHICLES: function (state, vehicles){
      state.vehicles = vehicles
    },
    SET_VEHICLE: function (state, vehicle){
      state.vehicle = state.vehicles.find(it => it.id == vehicle.id)
    },
  },
  actions: {
    getVehicles: async function({commit}) {
      return new Promise((resolve, reject) => {
        api
          .getVehicles()
          .then((data) => {
            commit('SET_VEHICLES', data.vehicles)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {
    vehiclesActive: state => {
      return state.users.filter(user => user.status)
    }
  },
}