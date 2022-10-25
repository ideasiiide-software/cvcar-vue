import api from "@/api"

export default {
  state: {
    users: [],
    user: {},
    admins: [],
    admin: {},
  },
  mutations: {
    SET_USERS: function (state, users){
      state.users = users
    },
    SET_USER: function (state, user){
      state.user = state.users.find(it => it.id == user.id)
    },
    SET_ADMINS: function (state, admins){
      state.admins = admins
    },
    REMOVE_ADMIN(state, admin) {
      state.admins.splice(state.admins.indexOf(admin), 1)
    },
  },
  actions: {
    getUsers: async function({commit}) {
      return new Promise((resolve, reject) => {
        api
          .getUsers()
          .then((data) => {
            commit('SET_USERS', data.users)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getAdmins: async function({commit}) {
      return new Promise((resolve, reject) => {
        api
          .getAdmins()
          .then((data) => {
            commit('SET_ADMINS', data.admins)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    deleteAdmin: async function({commit }, admin) {
      return new Promise((resolve, reject) => {
        api
          .deleteAdmin()
          .then(() => {
            commit('REMOVE_ADMIN', admin)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {
    usersActive: state => {
      return state.users.filter(user => user.status)
    }
  },
}