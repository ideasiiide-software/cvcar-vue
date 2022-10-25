<template>
  <AppLayout>
    <h2 class="mb-4">Dashboard</h2>
    <div class="row">
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body text-center">
            <font-awesome-icon icon="user-shield" class="fa-3x mb-2" />
            <h2 class="text-bold-700 mt-1 mb-2">{{ totalAdmin }}</h2>
            <p class="mb-2">Administrador</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body text-center">
            <font-awesome-icon icon="user" class="fa-3x mb-2" />
            <h2 class="text-bold-700 mt-1 mb-2">{{ totalUser }}</h2>
            <p class="mb-2">Usuarios</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body text-center">
            <font-awesome-icon icon="user-tie" class="fa-3x mb-2" />
            <h2 class="text-bold-700 mt-1 mb-2">{{ totalPartner }}</h2>
            <p class="mb-2">Aliados</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card mb-4">
          <div class="card-body text-center">
            <font-awesome-icon icon="car" class="fa-3x mb-2" />
            <h2 class="text-bold-700 mt-1 mb-2">{{ totalVehicle }}</h2>
            <p class="mb-2">Vehiculos</p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { auth } from "@/firebase"
import api from "@/api"
import AppLayout from "@/components/layout/AppLayout.vue"

export default {
  name: "home",
  components: {
    AppLayout,
  },
  data() {
    return {
      totalAdmin: null,
      totalUser: null,
      totalPartner: null,
      totalVehicle: null,
    }
  },
  mounted: function () {
    this.getTotals()
  },
  methods: {
    getTotals: function() {
      let that = this
      let loader = this.$loading.show()
      api
        .getTotals()
        .then((data) => {
          console.log(data.result)
          that.totalAdmin = data.result.total_admin
          that.totalUser = data.result.total_user
          that.totalPartner = data.result.total_partner
          that.totalVehicle = data.result.total_vehicle
          loader.hide()
        })
        .catch((error) => {
          that.showAlert(error.response.data.message)
          loader.hide()
          if(error.response.status === 401){
            auth.signOut()
            localStorage.clear()
            that.$router.push('/login')
          }
        })
    },
    showAlert: function(message) {
      this.$swal({
        position: "top-end",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
</script>
