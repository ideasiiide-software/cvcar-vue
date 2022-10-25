<template>
  <AppLayout>
    <h2 class="mb-4">
      Listado de Usuarios
      <span class="badge badge-danger">{{ this.$store.state.userModule.users.length }}</span>
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
            title: "Nombres y Apellidos",
          },
          {
            key: "email",
            title: "Email",
          },
          {
            key: "phone",
            title: "Telefono",
          },
          {
            key: "plan",
            title: "Plan",
          },
        ],
        data: this.$store.state.userModule.users,
      }
    },
  },
  mounted: function () {
    if(this.$store.state.userModule.users.length == 0) {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("getUsers")
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
