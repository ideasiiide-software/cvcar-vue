import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import firebase from 'firebase/app'
import DataTable from "@andresouzaabreu/vue-data-table"
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/assets/css/landing.min.css"
import "@andresouzaabreu/vue-data-table/dist/DataTable.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(far)
library.add(fab)

Vue.use(Loading, { zIndex: 9999 })
Vue.use(VueSweetalert2)
Vue.component("data-table", DataTable)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/*
const firebaseConfig = {
  apiKey: "AIzaSyDLHu6j2mkV3oFOP7XGyrRzEGbzsgrlUu0",
  authDomain: "cvcar-62fca.firebaseapp.com",
  databaseURL: "https://cvcar-62fca.firebaseio.com",
  projectId: "cvcar-62fca",
  storageBucket: "cvcar-62fca.appspot.com",
  messagingSenderId: "673622590458",
  appId: "1:673622590458:web:74740c012cc2025a06da43",
  measurementId: "G-R0WGHZG97C"
}
firebase.initializeApp(firebaseConfig)
*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
