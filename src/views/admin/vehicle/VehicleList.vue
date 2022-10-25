<template>
  <AppLayout>
    <h2 class="mb-4">
      Listado de Vehiculos
      <span class="badge badge-danger">{{ this.$store.state.vehicleModule.vehicles.length }}</span>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <data-table v-bind="vehiclesBinding" />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { auth } from "@/firebase"
import AppLayout from "@/components/layout/AppLayout.vue"
import modalMixin from '@/mixins/modal'

export default {
  name: "vehiclelist",
  components: {
    AppLayout
  },
  mixins: [
    modalMixin
  ],
  computed: {
    vehiclesBinding() {
      return {
        showDownloadButton: false,
        lang: "es",
        columns: [
          {
            key: "plate",
            title: "Placa",
          },
          {
            key: "brand",
            title: "Marca",
          },
          {
            key: "line",
            title: "Linea",
          },
          {
            key: "model",
            title: "Modelo",
          },
        ],
        data: this.$store.state.vehicleModule.vehicles,
      }
    },
  },
  mounted: function () {
    if(this.$store.state.vehicleModule.vehicles.length == 0) {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("getVehicles")
        .then(() => {
          loader.hide()
        })
        .catch((error) => {
          loader.hide()
          that.showAlert(error.response.data.message)
          if(error.response.status === 401){
            auth.signOut()
            localStorage.clear()
            that.$router.push('/login')
          }
        })
    }
  },
}
</script>
