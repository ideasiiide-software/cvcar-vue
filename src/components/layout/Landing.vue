<template >
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/img/cvcar_logo-10.png" height="30" />
          </router-link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link
                  to="login"
                  class="btn btn-outline-light btn-sm me-3"
                  >Iniciar Sesión</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/register" class="btn btn-light btn-sm"
                  >Regístrate</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <slot></slot>
      <footer
        class="bg-dark pb-3"
        style="
          padding-top: 40px;
          border-top: 8px solid rgb(255, 15, 0);
        "
      >
        <div class="container">
          <div class="text-center row">
            <div class="col-md-3 align-self-center" style="padding-bottom: 15px">
              <img src="../../assets/img/cvcar_logo-10.png" height="50" />
            </div>
            <div class="col-md-3" style="padding-bottom: 15px">
              <ul class="list-group" style="padding-left: 20px">
                <li
                  class="list-group-item"
                  style="
                    border-style: none;
                    background: rgba(255, 255, 255, 0);
                    padding-left: 0px;
                  "
                >
                  <i
                    class="fas fa-phone-alt"
                    style="
                      font-size: 14px;
                      color: rgb(255, 255, 255);
                      border-style: none;
                    "
                  ></i
                  ><span
                    style="
                      margin-left: 10px;
                      font-size: 13px;
                      color: rgb(255, 255, 255);
                      font-weight: bold;
                    "
                    >+57 320 6370012<br
                  /></span>
                </li>
                <li
                  class="list-group-item"
                  style="
                    border-style: none;
                    background: rgba(255, 255, 255, 0);
                    padding-left: 0px;
                  "
                >
                  <i
                    class="fas fa-envelope"
                    style="font-size: 15px; color: rgb(255, 255, 255)"
                  ></i
                  ><span
                    style="
                      margin-left: 10px;
                      font-size: 13px;
                      color: rgb(255, 255, 255);
                      font-weight: bold;
                    "
                    >servicioalcliente@cvcar.com.co<br
                  /></span>
                </li>
              </ul>
            </div>
            <div class="col-md-3" style="padding-bottom: 15px">
              <ul class="list-group" style="padding-left: 20px">
                <li
                  class="list-group-item"
                  style="
                    border-style: none;
                    background: rgba(255, 255, 255, 0);
                    padding-left: 0px;
                  "
                >
                  <router-link class="text-white" to="/terminos-y-condiciones"
                    >Terminos y Condiciones</router-link
                  >
                </li>
                <li
                  class="list-group-item"
                  style="
                    border-style: none;
                    background: rgba(255, 255, 255, 0);
                    padding-left: 0px;
                  "
                >
                  <router-link class="text-white" to="/politica-de-privacidad"
                    >Política de Privacidad</router-link
                  >
                </li>
              </ul>
            </div>
            <div
              class="col-md-3 text-center align-self-center"
              style="padding-bottom: 15px"
            >
              <img src="../../assets/img/appstore.png" /><a
                href="https://play.google.com/store/apps/details?id=co.com.cvcar.user"
                target="_blank"
                ><img src="../../assets/img/playstore.png"
              /></a>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style scoped src="@/assets/css/landing.min.css">
</style>

<script>
export default {
  name: "landing",
};
</script>