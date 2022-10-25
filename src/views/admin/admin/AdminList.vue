<template>
  <AppLayout>
    <h2 class="mb-4">
      Listado de Administradores
      <span class="badge badge-danger">{{ this.$store.state.userModule.admins.length }}</span>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <data-table v-bind="adminsBinding" />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { auth } from "@/firebase"
import AppLayout from "@/components/layout/AppLayout.vue"
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
    adminsBinding() {
      return {
        showDownloadButton: false,
        lang: "es",
        columns: [
          {
            key: "name",
            title: "Nombres y Apellidos",
          },
          {
            key: "email",
            title: "Email",
          },
        ],
        data: this.$store.state.userModule.admins,
      }
    },
  },
  mounted: function () {
    if(this.$store.state.userModule.admins.length == 0) {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("getAdmins")
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
