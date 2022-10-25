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
            <h3 class="py-3">Acceso de Usuario</h3>
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
            <div class="form-floating mb-3">
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="floatingPassword"
                placeholder=""
              />
              <label for="floatingPassword">Contraseña</label>
            </div>
            <button
              type="submit"
              @click="login"
              class="btn bg-dark text-white font-weight-bold"
            >
              Entrar
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
import { auth } from "@/firebase";
import api from "@/api";

export default {
  name: "login",
  components: {
    Landing,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      let that = this;
      if (that.email === "" || that.password === "") {
        that.showAlert("Completa los campos");
      } else {
        let loader = this.$loading.show();
        auth
          .signInWithEmailAndPassword(that.email, that.password)
          .then(() => {
            auth.currentUser.getIdToken(true).then((token) => {
              localStorage.setItem("userToken", token);
              api
                .getAdmin(auth.currentUser.uid)
                .then(() => {
                  loader.hide();
                  that.$router.push("/home");
                })
                .catch((error) => {
                  auth.signOut();
                  localStorage.clear();
                  loader.hide();
                  that.showAlert(error.response.data.message);
                });
            });
          })
          .catch((err) => {
            that.showAlert(err.message);
            loader.hide();
          });
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