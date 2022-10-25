<template>
  <AppLayout>
    <h2 class="mb-4">
      Listado de Aliados
      <span class="badge bg-primary">{{ this.$store.state.partnerModule.partners.length }}</span>
      <router-link to="/partners/register" class="btn btn-primary float-end"><font-awesome-icon icon="plus" /> Registrar</router-link>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <data-table v-bind="usersBinding" />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { auth } from "@/firebase"
import AppLayout from "@/components/layout/AppLayout.vue"
import ButtonsDelete from "@/components/datatable/ButtonsDelete.vue";
import modalMixin from '@/mixins/modal'

export default {
  name: "userlist",
  components: {
    AppLayout
  },
  mixins: [
    modalMixin
  ],
  computed: {
    usersBinding() {
      return {
        showDownloadButton: false,
        lang: "es",
        columns: [
          {
            key: "name",
            title: "Nombre",
          },
          {
            key: "address",
            title: "Direccion",
          },
          {
            key: "phone",
            title: "Telefono",
          },
          {
            key: "schedule",
            title: "Horario",
          },
          {
            key: "coordinates",
            title: "Coordenadas",
          },
          {
            key: "buttons",
            title: "Acciones",
            component: ButtonsDelete,
          },
        ],
        data: this.$store.state.partnerModule.partners,
      }
    },
  },
  mounted: function () {
    if(this.$store.state.partnerModule.partners.length == 0) {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("getPartners")
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
