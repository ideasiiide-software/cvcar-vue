<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../../assets/img/cvcar_logo-10.png" height="30" />
          </a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Usuarios
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link class="dropdown-item" to="/admins">Administradores</router-link></li>
                  <li><router-link class="dropdown-item" to="/users">Usuarios</router-link></li>
                  <li><router-link class="dropdown-item" to="/partners">Aliados</router-link></li>
                  <li><a class="dropdown-item" href="#">Mayoristas</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/ads">Publicidades</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/vehicles">Vehiculos</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <font-awesome-icon icon="user" />{{ user }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link class="dropdown-item" to="/perfil">Mi Perfil</router-link>
                  <a href="#" @click="logout" class="dropdown-item">Cerrar Sesión</a>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col mt-5 pt-5">
          <slot></slot>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import { auth } from "@/firebase"

export default {
  name: "AppLayout",
  data() {
    return {
      user: localStorage.getItem("userName"),
      userType: "Admin",
    }
  },
  created: function() {
    document.body.classList.remove("bg-dark")
    this.$data.userType = localStorage.getItem("userType")
  },
  methods: {
    logout: function() {
      let that = this
      this.$swal({
        title: "Quieres Salir?",
        text: "Está seguro de querer cerrar sesión",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(result => {
        if (result.value) {
          localStorage.clear()
          auth.signOut()
          that.$router.push('/login')
        }
      })
    }
  }
}
</script>