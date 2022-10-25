import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/users'
import partner from '@/store/modules/partners'
import vehicle from '@/store/modules/vehicles'
import ad from '@/store/modules/ads'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule: user,
    partnerModule: partner,
    vehicleModule: vehicle,
    adModule: ad
  }
})