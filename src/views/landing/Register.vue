<template>
  <Landing>
    <div class="container h-100 py-lg-5">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-6 col-offset-3 pt-5">
          <form
            action="return false"
            class="card p-4"
            method="post"
            onsubmit="return false"
          >
            <h3 class="py-3">Registro de Usuario</h3>
            <div class="mb-3 text-start">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="type"
                  checked
                  value="user"
                />
                <label class="form-check-label"
                  >CV Usuario</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="type"
                  value="partner"
                />
                <label class="form-check-label"
                  >CV Aliado</label
                >
              </div>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Nombres y Apellidos</label>
            </div>
            <div class="form-floating mb-3">
              <select class="form-select" v-model="tid">
                <option selected></option>
                <option>Cedula de Ciudadania</option>
                <option>NIT</option>
              </select>
              <label for="floatingInput">Tipo de Identificacion</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="cid"
                class="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Numero de Identificacion</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                v-model="phone"
                class="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Telefono</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="floatingInput"
                placeholder=""
              />
              <label for="floatingInput">Email</label>
            </div>
            <button
              type="submit"
              @click="register"
              class="btn bg-dark text-white font-weight-bold"
            >
              Registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  </Landing>
</template>

<style scoped>
body {
  min-height: 100vh;
  background-color: #f1f1f1;
}
.border-md {
  border-width: 2px;
}
.form-control:not(select) {
  padding: 1.5rem 0.5rem;
}
select.form-control {
  height: 52px;
  padding-left: 0.5rem;
}
.form-control::placeholder {
  color: #ccc;
  font-weight: bold;
  font-size: 0.9rem;
}
.form-control:focus {
  box-shadow: none;
}
</style>

<script>
import Landing from "@/components/layout/Landing.vue";
import crypto from "crypto";
import { auth } from "@/firebase";
import api from "@/api";

export default {
  name: "register",
  components: {
    Landing,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      tid: "",
      cid: "",
      type: "",
      password: "",
    };
  },
  methods: {
    register: function () {
      let that = this;
      if (that.email === "" || that.type === "" || that.tid === "") {
        that.showAlert("Completa los campos");
      } else {
        let loader = this.$loading.show();
        if(that.type === "partner") {
          api
            .registerPartner(that.$data)
            .then(() => {
              loader.hide();
            })
            .catch((error) => {
              loader.hide();
              that.showAlert(error.response.data.message);
            })
        }else{
          let password = crypto.randomBytes(6).toString("base64")
          that.password = password
          auth
            .createUserWithEmailAndPassword(that.email, password)
            .then(() => {
              api
                .registerUser(that.$data)
                .then(() => {
                  loader.hide();
                  
                })
                .catch((error) => {
                  loader.hide();
                  that.showAlert(error.response.data.message);
                })
            })
          .catch((err) => {
            that.showAlert(err.message);
            loader.hide();
          });
        }
      }
    },
    showAlert: function (message) {
      this.$swal({
        position: "top-end",
        icon: "error",
        title: message,
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
};
</script>