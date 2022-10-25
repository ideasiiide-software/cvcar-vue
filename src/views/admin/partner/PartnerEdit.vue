<template>
  <AppLayout>
    <h2 class="mb-4">
      Editar Aliado
      <router-link to="/partners" class="btn btn-primary float-end"><font-awesome-icon icon="arrow-left" /> Regresar</router-link>
    </h2>
    <div class="card mb-4">
      <div class="card-body">
        <form class="form" @submit.prevent="edit">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="tid">Tipo de Identificacion</label>
                <select v-model="formData.tid" id="email" class="form-control">
                    <option>NIT</option>
                    <option>Cedula De Ciudadania</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="cid">Numero Identificacion</label>
                <input type="text" v-model="formData.cid" id="cid" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="name">Nombre del establecimiento</label>
                <input type="text" v-model="formData.name" id="name" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="name_person">Propietario del establecimiento</label>
                <input type="text" v-model="formData.name_person" id="name_person" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="phone">Telefono</label>
                <input type="text" v-model="formData.phone" id="phone" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="address">Direccion</label>
                <input type="text" v-model="formData.address" id="address" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="formData.email" id="email" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="id_city">Ciudad</label>
                <select v-model="formData.id_city" id="id_city" class="form-control">
                    <option v-for="row in dataCity" :key="row.id" :value="row.id">{{ row.name }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="brands">Marcas</label>
                <input type="text" v-model="formData.brands" id="brands" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="schedule">Horario</label>
                <input type="text" v-model="formData.schedule" id="schedule" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="schedule_start">Hora Inicio</label>
                <input type="time" v-model="formData.schedule_start" id="schedule_start" class="form-control" />
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="schedule_end">Hora Fin</label>
                <input type="time" v-model="formData.schedule_end" id="schedule_end" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="id_partner_type">Tipos de Aliado</label>
                <select multiple v-model="formData.id_partner_type" id="id_partner_type" class="form-control">
                    <option v-for="row in dataPartnerType" :key="row.id" :value="row.id">{{ row.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="form-group">
                <label for="cid">Tipos de Vehiculo</label>
                <select multiple v-model="formData.id_vehicle_type" id="id_vehicle_type" class="form-control">
                    <option v-for="row in dataVehicleType" :key="row.id" :value="row.id">{{ row.name }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="coordinates">Coordenadas</label>
                <input type="text" v-model="formData.coordinates" id="coordinates" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="services">Servicios</label>
                <textarea v-model="formData.services" id="services" class="form-control mb-3"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="logo">Logo</label>
                <input type="file" class="form-control mb-3" id="file" name="file" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary me-1 mb-1">
                Editar
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
        cid: null,
        tid: null,
        name: null,
        name_person: null,
        phone: null,
        email: null,
        address: null,
        schedule: "Lunes a Domingo",
        schedule_start: "00:00",
        schedule_end: "00:00",
        brands: "Todas Las Marcas",
        id_city: null,
        id_vehicle_type: [],
        id_partner_type: [],
        coordinates: null,
        services: null,
      },
      dataCity: [],
      dataVehicleType: [],
      dataPartnerType: [],
    }
  },
  mixins: [modalMixin],
  mounted: function () {
    this.getCities()
    this.getVehicleTypes()
    this.getPartnerTypes()
    this.getPartner()
  },
  methods: {
    getCities: function() {
      let that = this
      let loader = this.$loading.show()
      api
        .getCities()
        .then((data) => {
          that.dataCity = data.cities
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
    getVehicleTypes: function() {
      let that = this
      let loader = this.$loading.show()
      api
        .getVehicleTypes()
        .then((data) => {
          that.dataVehicleType = data.types
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
    getPartnerTypes: function() {
      let that = this
      let loader = this.$loading.show()
      api
        .getPartnerTypes()
        .then((data) => {
          that.dataPartnerType = data.types
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
    getPartner: function() {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("getPartner", that.$route.params.id)
        .then(() => {
          that.formData = this.$store.state.partnerModule.partner
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
    },
    edit: function() {
      let that = this
      let loader = this.$loading.show()
      this.$store
        .dispatch("editPartner", this.formData)
        .then(() => {
          let doc = document.getElementById("file");
          if(doc.files.length > 0) {            
            let formData = new FormData();
            formData.append("file", doc.files[0]);
            api.editImagePartner(that.$route.params.id, formData)
              .then(() => {
                loader.hide()
                this.$router.push('/partners')
              })
          }else{
            this.showAlert("Escoge el archivo a subir");
          }
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