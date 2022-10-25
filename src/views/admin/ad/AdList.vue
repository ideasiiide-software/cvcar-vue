<template>
  <AppLayout>
    <h2 class="mb-4">
      Listado de Publicidades
      <span class="badge bg-primary">{{ this.$store.state.adModule.ads.length }}</span>
      <router-link to="/ads/register" class="btn btn-primary float-end"><font-awesome-icon icon="plus" /> Registrar</router-link>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <data-table v-bind="usersBinding" @deleteData="deleteData" />
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
            key: "im",
            title: "URL Imagen",
          },
          {
            key: "pn",
            title: "Aliado",
          },
          {
            key: "buttons",
            title: "Acciones",
            component: ButtonsDelete,
          },
        ],
        data: this.$store.state.adModule.ads,
      }
    },
  },
  mounted: function () {
    let that = this
    let loader = this.$loading.show()
    this.$store
      .dispatch("getAds")
      .then(() => {
        loader.hide()
      })
      .catch((error) => {
        loader.hide()
        that.showAlert(error)
        if(error.response.status === 401){
          auth.signOut()
          localStorage.clear()
          that.$router.push('/login')
        }
      })
  },
  methods: {
    deleteData: function (id) {
      console.log(id)
    }
  }
}
</script>
