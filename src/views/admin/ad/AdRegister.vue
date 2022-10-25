<template>
  <AppLayout>
    <h2 class="mb-4">
      Registro de Publicidad
      <router-link to="/ads" class="btn btn-primary float-end"><font-awesome-icon icon="arrow-left" /> Regresar</router-link>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <form class="form" @submit.prevent="register">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label>Aliado</label>
                <select v-model="formData.pi" id="partner" class="form-control">
                  <option v-for="row in dataPartners" :key="row.id" :value="row.id">{{ row.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label>Imagen</label>
                <input type="text" v-model="formData.im" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary me-1 mb-1">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import { auth } from "@/firebase"
import api from "@/api"
import modalMixin from "@/mixins/modal"
import AppLayout from "@/components/layout/AppLayout.vue"

export default {
  name: "PartnerRegister",
  components: {
    AppLayout,
  },
  data() {
    return {
      formData: {
        im: null,
        pi: null,
        pn: null,
      },
      dataPartners: [],
    }
  },
  mixins: [modalMixin],
  mounted: function () {
    this.getPartners()
  },
  methods: {
    getPartners: function() {
      let that = this
      let loader = this.$loading.show()
      api
        .getPartners()
        .then((data) => {
          that.dataPartners = data.partners
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
    register: function() {
      const el = document.getElementById("partner")
      this.formData.pn = el.options[el.selectedIndex].text
      let loader = this.$loading.show()
      this.$store
        .dispatch("registerAd", this.formData)
        .then(() => {
          loader.hide()
          this.$router.push('/ads')
        })
        .catch((error) => {
          this.showAlert(error.response.data.message)
          loader.hide()
          if(error.response.status === 401){
            auth.signOut()
            localStorage.clear()
            this.$router.push('/login')
          }
        })
    }
  },
}
</script>